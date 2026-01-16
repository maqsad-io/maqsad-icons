import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEMP_DIR = path.join(__dirname, '../assets/temp/Icon');
const SYSTEM_DIR = path.join(__dirname, '../assets/system');

function toKebabCase(str: string): string {
  return str
    .trim()
    .replace(/\s+/g, '-')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function extractSizeAndName(filename: string): { size: string; name: string } | null {
  // Match pattern: "Name - XXpx.svg" or "Name- XXpx.svg"
  const match = filename.match(/^(.+?)\s*-\s*(\d+)px\.svg$/i);

  if (!match) {
    console.warn(`⚠️  Could not parse filename: ${filename}`);
    return null;
  }

  const [, name, size] = match;
  return {
    size: size,
    name: name.trim()
  };
}

function processIcons(): void {
  console.log('🔍 Scanning temp directory...\n');

  const files = walkDirectory(TEMP_DIR);
  const svgFiles = files.filter(f => f.endsWith('.svg'));

  console.log(`Found ${svgFiles.length} SVG files\n`);

  const processed: { from: string; to: string; name: string }[] = [];
  const skipped: string[] = [];

  for (const filePath of svgFiles) {
    const filename = path.basename(filePath);
    const parsed = extractSizeAndName(filename);

    if (!parsed) {
      skipped.push(filename);
      continue;
    }

    const { size, name } = parsed;
    const kebabName = toKebabCase(name);
    const targetDir = path.join(SYSTEM_DIR, size);
    const targetPath = path.join(targetDir, `${kebabName}.svg`);

    // Create target directory if it doesn't exist
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Copy file
    fs.copyFileSync(filePath, targetPath);

    processed.push({
      from: filename,
      to: `${size}/${kebabName}.svg`,
      name: kebabName
    });
  }

  // Report results
  console.log('✅ Successfully processed:\n');

  const bySize: Record<string, string[]> = {};
  processed.forEach(({ to, name }) => {
    const size = to.split('/')[0];
    if (!bySize[size]) bySize[size] = [];
    bySize[size].push(name);
  });

  Object.keys(bySize).sort((a, b) => Number(a) - Number(b)).forEach(size => {
    console.log(`📁 ${size}px (${bySize[size].length} icons):`);
    bySize[size].sort().forEach(name => {
      console.log(`   - ${name}`);
    });
    console.log('');
  });

  if (skipped.length > 0) {
    console.log('⚠️  Skipped files:\n');
    skipped.forEach(file => console.log(`   - ${file}`));
    console.log('');
  }

  console.log(`\n📊 Summary: ${processed.length} processed, ${skipped.length} skipped`);
}

function walkDirectory(dir: string): string[] {
  const results: string[] = [];

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results.push(...walkDirectory(filePath));
    } else {
      results.push(filePath);
    }
  }

  return results;
}

processIcons();

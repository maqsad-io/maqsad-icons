/**
 * Build script for generating React icon components from SVG files
 *
 * This script:
 * 1. Reads SVG files from the assets directory
 * 2. Optimizes them using SVGO
 * 3. Generates React components with proper TypeScript types
 *
 * Directory structure expected:
 * assets/
 *   system/
 *     stroke/
 *       icon-name.svg
 *     filled/
 *       icon-name.svg
 *   illustrations/
 *     primary/
 *       icon-name.svg
 *     secondary/
 *       icon-name.svg
 *     dark/
 *       icon-name.svg
 *     light/
 *       icon-name.svg
 */

import * as fs from 'fs';
import * as path from 'path';
import { optimize, type Config } from 'svgo';

const ROOT_DIR = path.resolve(__dirname, '..');
const ASSETS_DIR = path.join(ROOT_DIR, 'assets');
const SRC_DIR = path.join(ROOT_DIR, 'src');

// SVGO configuration for optimizing SVGs
const svgoConfig: Config = {
  multipass: true,
  plugins: [
    'preset-default',
    'removeDimensions',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['class', 'data-name'],
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
      },
    },
  ],
};

/**
 * Convert kebab-case to PascalCase
 */
function toPascalCase(str: string): string {
  return str
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join('');
}

/**
 * Convert a CSS style string to a React style object string
 */
function cssStyleToReactStyle(styleStr: string): string {
  const styleObj: Record<string, string> = {};
  styleStr.split(';').forEach(rule => {
    const colonIndex = rule.indexOf(':');
    if (colonIndex > -1) {
      const property = rule.substring(0, colonIndex).trim();
      const value = rule.substring(colonIndex + 1).trim();
      if (property && value) {
        // Convert CSS property to camelCase (e.g., border-radius -> borderRadius, mask-type -> maskType)
        const camelProperty = property.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        styleObj[camelProperty] = value;
      }
    }
  });
  return JSON.stringify(styleObj);
}

/**
 * Convert inline style attributes in SVG content to React style objects
 */
function convertInlineStylesToReact(content: string): string {
  // Match style="..." on any element and convert to style={{...}}
  return content.replace(/style="([^"]+)"/g, (_, styleStr) => {
    const reactStyle = cssStyleToReactStyle(styleStr);
    return `style={${reactStyle}}`;
  });
}

/**
 * Extract SVG content (everything inside the <svg> tag)
 */
function extractSvgContent(svgString: string): { content: string; viewBox: string; svgStyle: Record<string, string> | null } {
  const viewBoxMatch = svgString.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';

  // Extract style attribute from root SVG element
  const styleMatch = svgString.match(/<svg[^>]*style="([^"]+)"/);
  let svgStyle: Record<string, string> | null = null;
  if (styleMatch) {
    svgStyle = {};
    const styleStr = styleMatch[1];
    // Parse CSS style string into object (e.g., "border-radius: 50%; overflow: hidden;")
    styleStr.split(';').forEach(rule => {
      const colonIndex = rule.indexOf(':');
      if (colonIndex > -1) {
        const property = rule.substring(0, colonIndex).trim();
        const value = rule.substring(colonIndex + 1).trim();
        if (property && value) {
          // Convert CSS property to camelCase (e.g., border-radius -> borderRadius)
          const camelProperty = property.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
          svgStyle![camelProperty] = value;
        }
      }
    });
  }

  // Extract content between <svg> tags
  const contentMatch = svgString.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  let content = contentMatch ? contentMatch[1].trim() : '';

  // Convert any inline styles in the content to React style objects
  content = convertInlineStylesToReact(content);

  return { content, viewBox, svgStyle };
}

/**
 * Convert SVG content to JSX
 */
function svgToJsx(svgContent: string): string {
  return svgContent
    // Convert attributes to camelCase
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/stroke-dasharray/g, 'strokeDasharray')
    .replace(/stroke-dashoffset/g, 'strokeDashoffset')
    .replace(/stroke-miterlimit/g, 'strokeMiterlimit')
    .replace(/stroke-opacity/g, 'strokeOpacity')
    .replace(/fill-opacity/g, 'fillOpacity')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/clip-path/g, 'clipPath')
    .replace(/font-family/g, 'fontFamily')
    .replace(/font-size/g, 'fontSize')
    .replace(/font-weight/g, 'fontWeight')
    .replace(/text-anchor/g, 'textAnchor')
    .replace(/dominant-baseline/g, 'dominantBaseline')
    .replace(/stop-color/g, 'stopColor')
    .replace(/stop-opacity/g, 'stopOpacity')
    // Handle xlink:href
    .replace(/xlink:href/g, 'xlinkHref')
    // Ensure space before self-closing tags (JSX requirement)
    .replace(/([^\/\s])\/>/g, '$1 />');
}

/**
 * Color categories for filled variant
 * Primary colors: blues, purples (main body colors)
 * Accent colors: yellows, oranges, golds, pinks/reds (highlight colors)
 */
const PRIMARY_COLORS = [
  // Blues
  '#5F85BC', '#79A3D2', '#78A1D0', '#6084BB', '#4274AF', '#4375AF', '#4274B0',
  // Purples
  '#5D5D9F', '#5E5FA0',
];

const ACCENT_COLORS = [
  // Yellows/golds
  '#F2AE1D', '#FCDFB1', '#F6BD57', '#F1AD1D', '#E69A24', '#F8BE57', '#FBDEB0',
  // Pinks/reds
  '#F27780', '#E64970', '#E74970',
];

/**
 * Generate filled variant content with dynamic colors
 * Replaces hardcoded colors with JSX expressions using colors.primary and colors.accent
 */
function generateFilledVariant(content: string): string {
  let result = content;

  // Replace primary colors with {colors.primary}
  for (const color of PRIMARY_COLORS) {
    // Match fill="color" and replace with fill={colors.primary}
    const fillRegex = new RegExp(`fill="${color}"`, 'gi');
    result = result.replace(fillRegex, 'fill={colors.primary}');
  }

  // Replace accent colors with {colors.accent}
  for (const color of ACCENT_COLORS) {
    const fillRegex = new RegExp(`fill="${color}"`, 'gi');
    result = result.replace(fillRegex, 'fill={colors.accent}');
  }

  return result;
}

/**
 * Process system icons
 */
async function processSystemIcons(): Promise<void> {
  const systemAssetsDir = path.join(ASSETS_DIR, 'system');
  const outputDir = path.join(SRC_DIR, 'system', 'icons');

  if (!fs.existsSync(systemAssetsDir)) {
    console.log('No system icons assets found, skipping...');
    return;
  }

  // Create output directory
  fs.mkdirSync(outputDir, { recursive: true });

  const icons: Map<string, { content: string; viewBox: string; svgStyle: Record<string, string> | null }> = new Map();

  // Read icons from stroke and filled directories (prefer stroke, fallback to filled)
  const iconTypes = ['stroke', 'filled'];

  for (const iconType of iconTypes) {
    const typeDir = path.join(systemAssetsDir, iconType);
    if (!fs.existsSync(typeDir)) continue;

    const files = fs.readdirSync(typeDir).filter((f) => f.endsWith('.svg'));

    for (const file of files) {
      const iconName = path.basename(file, '.svg');
      if (icons.has(iconName)) continue; // Already processed from another type

      const svgPath = path.join(typeDir, file);
      const svgContent = fs.readFileSync(svgPath, 'utf-8');

      // Optimize SVG
      const optimized = optimize(svgContent, svgoConfig);
      const { content, viewBox, svgStyle } = extractSvgContent(optimized.data);
      const jsxContent = svgToJsx(content);

      icons.set(iconName, { content: jsxContent, viewBox, svgStyle });
    }
  }

  // Generate the icons file
  let output = `// Auto-generated file - DO NOT EDIT MANUALLY
// This file is generated by the build script from SVG sources

`;

  if (icons.size > 0) {
    output += `import { createSystemIcon } from '../../types';

`;
  } else {
    output += `// No system icons found in assets/system/ directory
// Add SVG files to assets/system/stroke/ or assets/system/filled/
export {};
`;
  }

  for (const [name, { content, svgStyle }] of icons) {
    const componentName = `Icon${toPascalCase(name)}`;
    const hasMultipleElements = content.includes('><');
    const svgStyleArg = svgStyle ? JSON.stringify(svgStyle) : 'null';

    output += `export const ${componentName} = createSystemIcon(
  '${componentName}',
  ${hasMultipleElements ? `<>${content}</>` : content},
  ${svgStyleArg}
);

`;
  }

  fs.writeFileSync(path.join(outputDir, 'index.tsx'), output);
  console.log(`Generated ${icons.size} system icons`);
}

/**
 * Strip variant suffix from filename
 * e.g., "notes-primary" -> "notes", "video-lectures-dark" -> "video-lectures"
 */
function stripVariantSuffix(filename: string, variant: string): string {
  const suffix = `-${variant}`;
  if (filename.endsWith(suffix)) {
    return filename.slice(0, -suffix.length);
  }
  return filename;
}

/**
 * Process illustration icons
 */
async function processIllustrationIcons(): Promise<void> {
  const illustrationsAssetsDir = path.join(ASSETS_DIR, 'illustrations');
  const outputDir = path.join(SRC_DIR, 'illustrations', 'icons');

  if (!fs.existsSync(illustrationsAssetsDir)) {
    console.log('No illustration icons assets found, skipping...');
    return;
  }

  // Create output directory
  fs.mkdirSync(outputDir, { recursive: true });

  const variants = ['primary', 'secondary', 'dark', 'light'] as const;
  const icons: Map<
    string,
    {
      variants: Partial<Record<(typeof variants)[number], { content: string; viewBox: string; svgStyle: Record<string, string> | null }>>;
    }
  > = new Map();

  // Read icons from each variant directory
  for (const variant of variants) {
    const variantDir = path.join(illustrationsAssetsDir, variant);
    if (!fs.existsSync(variantDir)) continue;

    const files = fs.readdirSync(variantDir).filter((f) => f.endsWith('.svg'));

    for (const file of files) {
      const rawIconName = path.basename(file, '.svg');
      // Strip variant suffix if present (e.g., "notes-primary" -> "notes")
      const iconName = stripVariantSuffix(rawIconName, variant);
      const svgPath = path.join(variantDir, file);
      const svgContent = fs.readFileSync(svgPath, 'utf-8');

      // Optimize SVG
      const optimized = optimize(svgContent, svgoConfig);
      const { content, viewBox, svgStyle } = extractSvgContent(optimized.data);
      const jsxContent = svgToJsx(content);

      if (!icons.has(iconName)) {
        icons.set(iconName, { variants: {} });
      }

      icons.get(iconName)!.variants[variant] = { content: jsxContent, viewBox, svgStyle };
    }
  }

  // Generate the icons file
  let output = `// Auto-generated file - DO NOT EDIT MANUALLY
// This file is generated by the build script from SVG sources

`;

  if (icons.size > 0) {
    output += `import { createIllustrationIcon, type FilledColors } from '../../types';

`;
  } else {
    output += `// No illustration icons found in assets/illustrations/ directory
// Add SVG files to assets/illustrations/primary/, secondary/, dark/, light/
export {};
`;
  }

  for (const [name, { variants: iconVariants }] of icons) {
    const componentName = `Illustration${toPascalCase(name)}`;
    const viewBox = iconVariants.primary?.viewBox || '0 0 48 48';
    const svgStyle = iconVariants.primary?.svgStyle;
    const svgStyleArg = svgStyle ? JSON.stringify(svgStyle) : 'null';

    output += `export const ${componentName} = createIllustrationIcon(
  '${componentName}',
  {
`;

    for (const variant of variants) {
      const variantData = iconVariants[variant];
      if (variantData) {
        output += `    ${variant}: (
      <>${variantData.content}</>
    ),
`;
      } else {
        // Fallback to primary if variant doesn't exist
        output += `    ${variant}: (
      <>${iconVariants.primary?.content || ''}</>
    ),
`;
      }
    }

    // Add filled variant with dynamic color support
    // Replace cool colors (blues, purples) with primary and warm colors (yellows, oranges) with accent
    const filledContent = generateFilledVariant(iconVariants.primary?.content || '');
    // Use _colors to avoid unused parameter error when colors aren't used in the SVG
    const usesColors = filledContent.includes('colors.primary') || filledContent.includes('colors.accent');
    output += `    filled: (${usesColors ? 'colors' : '_colors'}: FilledColors) => (
      <>${filledContent}</>
    ),
`;

    output += `  },
  '${viewBox}',
  ${svgStyleArg}
);

`;
  }

  fs.writeFileSync(path.join(outputDir, 'index.tsx'), output);
  console.log(`Generated ${icons.size} illustration icons`);
}

/**
 * Main build function
 */
async function build(): Promise<void> {
  console.log('Building Maqsad Icons...');

  try {
    await processSystemIcons();
    await processIllustrationIcons();
    console.log('Build complete!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();

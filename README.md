# Maqsad Icons

<p align="center">
  <img src="./app/assets/illustrations/primary/logo-maqsad-bg-white-primary.svg" width="120" height="120" alt="Maqsad Icons" />
</p>

<p align="center">
  A comprehensive React icon library featuring system icons and illustration icons with multiple variants.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@maqsad/icons"><img src="https://img.shields.io/npm/v/@maqsad/icons.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/@maqsad/icons"><img src="https://img.shields.io/npm/dm/@maqsad/icons.svg" alt="npm downloads" /></a>
  <a href="https://github.com/maqsad-io/maqsad-icons/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@maqsad/icons.svg" alt="license" /></a>
</p>

<p align="center">
  <a href="https://icons.maqsad.io">Documentation</a> •
  <a href="#installation">Installation</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#packages">Packages</a>
</p>

---

## Installation

```bash
pnpm add @maqsad/icons
# or
npm install @maqsad/icons
# or
yarn add @maqsad/icons
```

## Quick Start

```tsx
import { IconSearch, IllustrationNotes } from "@maqsad/icons";

function App() {
  return (
    <div>
      {/* System icon */}
      <IconSearch size={24} stroke="currentColor" />

      {/* Illustration icon */}
      <IllustrationNotes variant="primary" size={48} />
    </div>
  );
}
```

## Icon Preview

### System Icons (63)

<table>
  <tr>
    <td align="center"><img src="./app/assets/system/stroke/search.svg" width="24" height="24" /><br /><sub>Search</sub></td>
    <td align="center"><img src="./app/assets/system/stroke/home.svg" width="24" height="24" /><br /><sub>Home</sub></td>
    <td align="center"><img src="./app/assets/system/stroke/bell.svg" width="24" height="24" /><br /><sub>Bell</sub></td>
    <td align="center"><img src="./app/assets/system/stroke/star.svg" width="24" height="24" /><br /><sub>Star</sub></td>
    <td align="center"><img src="./app/assets/system/stroke/check.svg" width="24" height="24" /><br /><sub>Check</sub></td>
    <td align="center"><img src="./app/assets/system/stroke/close.svg" width="24" height="24" /><br /><sub>Close</sub></td>
    <td align="center"><img src="./app/assets/system/stroke/download.svg" width="24" height="24" /><br /><sub>Download</sub></td>
  </tr>
</table>

<p align="center"><a href="./app/README.md#system-icons-63">View all 63 system icons →</a></p>

### Illustration Icons (13)

<table>
  <tr>
    <td align="center"><img src="./app/assets/illustrations/primary/doubtsolve-primary.svg" width="48" height="48" /><br /><sub>Doubtsolve</sub></td>
    <td align="center"><img src="./app/assets/illustrations/primary/notes-primary.svg" width="48" height="48" /><br /><sub>Notes</sub></td>
    <td align="center"><img src="./app/assets/illustrations/primary/video-lectures-primary.svg" width="48" height="48" /><br /><sub>VideoLectures</sub></td>
    <td align="center"><img src="./app/assets/illustrations/primary/tests-primary.svg" width="48" height="48" /><br /><sub>Tests</sub></td>
    <td align="center"><img src="./app/assets/illustrations/primary/live-sessions-primary.svg" width="48" height="48" /><br /><sub>LiveSessions</sub></td>
  </tr>
</table>

<p align="center"><a href="./app/README.md#illustration-icons-13">View all 13 illustration icons →</a></p>

## Packages

This is a monorepo containing the following packages:

| Package                           | Description        | Path                   |
| --------------------------------- | ------------------ | ---------------------- |
| [@maqsad/icons](./app)            | React icon library | `./app`                |
| [icon-docs](./web-apps/icon-docs) | Documentation site | `./web-apps/icon-docs` |

## Documentation

- **[Full Documentation](./app/README.md)** - Complete usage guide, props reference, and examples
- **[Available Icons](./app/src/ICONS.md)** - Complete list of all icons with previews
- **[Live Demo](https://icons.maqsad.io)** - Interactive icon browser

## Development

```bash
# Clone the repository
git clone https://github.com/maqsad-io/maqsad-icons.git
cd maqsad-icons

# Install dependencies
cd app && pnpm install

# Build icons from SVG assets
pnpm build:icons

# Build the library
pnpm build

# Run docs site locally
cd ../web-apps/icon-docs && pnpm install && pnpm dev
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-icon`)
3. Add your SVG icons to the appropriate `assets/` folder
4. Run `pnpm build:icons` to generate React components
5. Commit your changes (`git commit -m 'Add amazing icon'`)
6. Push to the branch (`git push origin feature/amazing-icon`)
7. Open a Pull Request

## License

MIT © [Maqsad](https://maqsad.io)

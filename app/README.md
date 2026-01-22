# @maqsad/icons

<p align="center">
  <img src="assets/illustrations/primary/logo-maqsad-bg-white-primary.svg" width="120" height="120" alt="Maqsad Icons" />
</p>

<p align="center">
  A comprehensive React icon library featuring both system icons and illustration icons with multiple variants.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@maqsad/icons"><img src="https://img.shields.io/npm/v/@maqsad/icons.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/@maqsad/icons"><img src="https://img.shields.io/npm/dm/@maqsad/icons.svg" alt="npm downloads" /></a>
  <a href="https://github.com/maqsad-io/maqsad-icons/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@maqsad/icons.svg" alt="license" /></a>
</p>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [System Icons](#system-icons)
  - [Illustration Icons](#illustration-icons)
- [Available Icons](#available-icons)
- [Variants Explained](#variants-explained)
- [Adding New Icons](#adding-new-icons)
- [Development](#development)
- [Tree Shaking](#tree-shaking)
- [TypeScript](#typescript)
- [License](#license)

## Installation

```bash
pnpm add @maqsad/icons
# or
npm install @maqsad/icons
# or
yarn add @maqsad/icons
```

## Usage

### System Icons

System icons are available in two styles: **stroke** (outline-based) and **filled**. All icons can be scaled to any size.

```tsx
import { IconArrowBack, IconSearch, IconStar } from "@maqsad/icons";
// or import specifically from system
import { IconArrowBack } from "@maqsad/icons/system";

function App() {
  return (
    <div>
      {/* Default size (24px) */}
      <IconArrowBack />

      {/* Custom size */}
      <IconSearch size={18} />

      {/* Custom stroke color */}
      <IconStar stroke="gold" />

      {/* Custom fill color */}
      <IconStar fill="gold" />

      {/* Custom stroke width */}
      <IconArrowBack strokeWidth={1.5} />

      {/* With className for styling */}
      <IconSearch className="my-icon" />
    </div>
  );
}
```

#### System Icon Props

| Prop          | Type       | Default          | Description                                  |
| ------------- | ---------- | ---------------- | -------------------------------------------- |
| `size`        | `number`   | `24`             | Icon size in pixels                          |
| `stroke`      | `string`   | `'currentColor'` | Icon stroke color                            |
| `fill`        | `string`   | `'none'`         | Icon fill color                              |
| `color`       | `string`   | `'currentColor'` | Icon stroke color (deprecated, use `stroke`) |
| `strokeWidth` | `number`   | `2`              | Stroke width                                 |
| `className`   | `string`   | -                | CSS class name                               |
| `...props`    | `SVGProps` | -                | Any valid SVG props                          |

### Illustration Icons

Illustration icons are more detailed icons with multiple color variants.

```tsx
import { IllustrationNotes, IllustrationVideoLectures } from "@maqsad/icons";
// or import specifically from illustrations
import { IllustrationNotes } from "@maqsad/icons/illustrations";

function App() {
  return (
    <div>
      {/* Default variant (primary - blue) */}
      <IllustrationNotes />

      {/* Secondary variant (brown/pink) */}
      <IllustrationNotes variant="secondary" />

      {/* Dark variant (for light theme) */}
      <IllustrationNotes variant="dark" />

      {/* Light variant (for dark theme) */}
      <IllustrationNotes variant="light" />

      {/* Filled variant with custom colors */}
      <IllustrationNotes
        variant="filled"
        primaryColor="#8B5CF6"
        accentColor="#F59E0B"
      />

      {/* Custom size */}
      <IllustrationVideoLectures size={64} />
    </div>
  );
}
```

#### Illustration Icon Props

| Prop           | Type                                                        | Default     | Description                      |
| -------------- | ----------------------------------------------------------- | ----------- | -------------------------------- |
| `variant`      | `'primary' \| 'secondary' \| 'filled' \| 'dark' \| 'light'` | `'primary'` | Icon color variant               |
| `size`         | `number`                                                    | `48`        | Icon width in pixels             |
| `primaryColor` | `string`                                                    | `'#3B82F6'` | Primary color for filled variant |
| `accentColor`  | `string`                                                    | `'#F59E0B'` | Accent color for filled variant  |
| `className`    | `string`                                                    | -           | CSS class name                   |
| `...props`     | `SVGProps`                                                  | -           | Any valid SVG props              |

## Available Icons

**Total: 130 icons** (85 system icons + 45 illustration icons)

> For a complete list with import examples, see the [documentation website](https://icons.maqsad.io)

### System Icons (85)

<table>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/alert.svg" width="24" height="24" /><br /><sub>Alert</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/alert-filled.svg" width="24" height="24" /><br /><sub>AlertFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/alert-circle.svg" width="24" height="24" /><br /><sub>AlertCircle</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/arrow-back.svg" width="24" height="24" /><br /><sub>ArrowBack</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/arrow-forward.svg" width="24" height="24" /><br /><sub>ArrowForward</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/badge-check-filled.svg" width="24" height="24" /><br /><sub>BadgeCheckFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/bell.svg" width="24" height="24" /><br /><sub>Bell</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/bell-filled.svg" width="24" height="24" /><br /><sub>BellFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/book.svg" width="24" height="24" /><br /><sub>Book</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/book-filled.svg" width="24" height="24" /><br /><sub>BookFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/bookmark.svg" width="24" height="24" /><br /><sub>Bookmark</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/bookmark-filled.svg" width="24" height="24" /><br /><sub>BookmarkFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/calculator.svg" width="24" height="24" /><br /><sub>Calculator</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/calculator-2.svg" width="24" height="24" /><br /><sub>Calculator2</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/calculator-filled.svg" width="24" height="24" /><br /><sub>CalculatorFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/calculator-filled-2.svg" width="24" height="24" /><br /><sub>CalculatorFilled2</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/camera.svg" width="24" height="24" /><br /><sub>Camera</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/camera-filled.svg" width="24" height="24" /><br /><sub>CameraFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/chat.svg" width="24" height="24" /><br /><sub>Chat</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/chat-filled.svg" width="24" height="24" /><br /><sub>ChatFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/chat-filled-1.svg" width="24" height="24" /><br /><sub>ChatFilled1</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/check.svg" width="24" height="24" /><br /><sub>Check</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/check-circle.svg" width="24" height="24" /><br /><sub>CheckCircle</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/check-circle-filled.svg" width="24" height="24" /><br /><sub>CheckCircleFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/chemistry.svg" width="24" height="24" /><br /><sub>Chemistry</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/chevron-back.svg" width="24" height="24" /><br /><sub>ChevronBack</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/chevron-down.svg" width="24" height="24" /><br /><sub>ChevronDown</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/chevron-forward.svg" width="24" height="24" /><br /><sub>ChevronForward</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/chevron-up.svg" width="24" height="24" /><br /><sub>ChevronUp</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/close.svg" width="24" height="24" /><br /><sub>Close</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/credit-card.svg" width="24" height="24" /><br /><sub>CreditCard</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/credit-card-filled.svg" width="24" height="24" /><br /><sub>CreditCardFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/crown.svg" width="24" height="24" /><br /><sub>Crown</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/crown-filled.svg" width="24" height="24" /><br /><sub>CrownFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/delete.svg" width="24" height="24" /><br /><sub>Delete</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/delete-filled.svg" width="24" height="24" /><br /><sub>DeleteFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/dislike.svg" width="24" height="24" /><br /><sub>Dislike</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/dislike-filled.svg" width="24" height="24" /><br /><sub>DislikeFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/download.svg" width="24" height="24" /><br /><sub>Download</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/edit.svg" width="24" height="24" /><br /><sub>Edit</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/edit-filled.svg" width="24" height="24" /><br /><sub>EditFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/envelope.svg" width="24" height="24" /><br /><sub>Envelope</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/envelope-filled.svg" width="24" height="24" /><br /><sub>EnvelopeFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/feedback.svg" width="24" height="24" /><br /><sub>Feedback</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/feedback-filled.svg" width="24" height="24" /><br /><sub>FeedbackFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/filter.svg" width="24" height="24" /><br /><sub>Filter</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/help.svg" width="24" height="24" /><br /><sub>Help</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/help-filled.svg" width="24" height="24" /><br /><sub>HelpFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/history.svg" width="24" height="24" /><br /><sub>History</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/home.svg" width="24" height="24" /><br /><sub>Home</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/home-filled.svg" width="24" height="24" /><br /><sub>HomeFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/info.svg" width="24" height="24" /><br /><sub>Info</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/info-filled.svg" width="24" height="24" /><br /><sub>InfoFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/kebab-menu.svg" width="24" height="24" /><br /><sub>KebabMenu</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/like.svg" width="24" height="24" /><br /><sub>Like</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/like-filled.svg" width="24" height="24" /><br /><sub>LikeFilled</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/loader.svg" width="24" height="24" /><br /><sub>Loader</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/logout.svg" width="24" height="24" /><br /><sub>Logout</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/maths.svg" width="24" height="24" /><br /><sub>Maths</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/negative-circle-filled.svg" width="24" height="24" /><br /><sub>NegativeCircleFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/padlock-locked.svg" width="24" height="24" /><br /><sub>PadlockLocked</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/pencil-hand.svg" width="24" height="24" /><br /><sub>PencilHand</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/physics.svg" width="24" height="24" /><br /><sub>Physics</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/pin.svg" width="24" height="24" /><br /><sub>Pin</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/question-bank.svg" width="24" height="24" /><br /><sub>QuestionBank</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/reset.svg" width="24" height="24" /><br /><sub>Reset</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/rotate-screen.svg" width="24" height="24" /><br /><sub>RotateScreen</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/search.svg" width="24" height="24" /><br /><sub>Search</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/share.svg" width="24" height="24" /><br /><sub>Share</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/share-arrow.svg" width="24" height="24" /><br /><sub>ShareArrow</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/share-arrow-filled.svg" width="24" height="24" /><br /><sub>ShareArrowFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/sikkay.svg" width="24" height="24" /><br /><sub>Sikkay</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/sikkay-filled.svg" width="24" height="24" /><br /><sub>SikkayFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/smiley.svg" width="24" height="24" /><br /><sub>Smiley</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/smiley-filled.svg" width="24" height="24" /><br /><sub>SmileyFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/sort.svg" width="24" height="24" /><br /><sub>Sort</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/star.svg" width="24" height="24" /><br /><sub>Star</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/star-filled.svg" width="24" height="24" /><br /><sub>StarFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/test.svg" width="24" height="24" /><br /><sub>Test</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/test-filled.svg" width="24" height="24" /><br /><sub>TestFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/video-play.svg" width="24" height="24" /><br /><sub>VideoPlay</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/video-play-filled.svg" width="24" height="24" /><br /><sub>VideoPlayFilled</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/video-skip.svg" width="24" height="24" /><br /><sub>VideoSkip</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/filled/whatsapp-filled.svg" width="24" height="24" /><br /><sub>WhatsappFilled</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/system/stroke/wrench-gear.svg" width="24" height="24" /><br /><sub>WrenchGear</sub></td>
  </tr>
</table>

### Illustration Icons (45)

<table>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/avatar-female-primary.svg" width="48" height="48" /><br /><sub>AvatarFemale</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/avatar-generic-primary.svg" width="48" height="48" /><br /><sub>AvatarGeneric</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/avatar-male-primary.svg" width="48" height="48" /><br /><sub>AvatarMale</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/badge-star-primary.svg" width="48" height="48" /><br /><sub>BadgeStar</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/book-open-primary.svg" width="48" height="48" /><br /><sub>BookOpen</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/crown-shine-primary.svg" width="48" height="48" /><br /><sub>CrownShine</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/doctor-female-primary.svg" width="48" height="48" /><br /><sub>DoctorFemale</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/doctor-syringe-primary.svg" width="48" height="48" /><br /><sub>DoctorSyringe</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/doubtsolve-primary.svg" width="48" height="48" /><br /><sub>Doubtsolve</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/engineer-boy-primary.svg" width="48" height="48" /><br /><sub>EngineerBoy</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/gift-sikkay-primary.svg" width="48" height="48" /><br /><sub>GiftSikkay</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/giki-primary.svg" width="48" height="48" /><br /><sub>Giki</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/hero-sikka-primary.svg" width="48" height="48" /><br /><sub>HeroSikka</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/iba-primary.svg" width="48" height="48" /><br /><sub>Iba</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/limit-reached-hijab-primary.svg" width="48" height="48" /><br /><sub>LimitReachedHijab</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/live-sessions-primary.svg" width="48" height="48" /><br /><sub>LiveSessions</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/logo-maqsad-primary.svg" width="48" height="48" /><br /><sub>LogoMaqsad</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/logo-maqsad-bg-white-primary.svg" width="48" height="48" /><br /><sub>LogoMaqsadBgWhite</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/lums-primary.svg" width="48" height="48" /><br /><sub>Lums</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/maqsad-dots-primary.svg" width="48" height="48" /><br /><sub>MaqsadDots</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/miss-huma-confused-primary.svg" width="48" height="48" /><br /><sub>MissHumaConfused</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/miss-huma-crown-gold-primary.svg" width="48" height="48" /><br /><sub>MissHumaCrownGold</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/miss-huma-searching-primary.svg" width="48" height="48" /><br /><sub>MissHumaSearching</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/miss-huma-searching-small-primary.svg" width="48" height="48" /><br /><sub>MissHumaSearchingSmall</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/miss-huma-small-primary.svg" width="48" height="48" /><br /><sub>MissHumaSmall</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/miss-huma-star-primary.svg" width="48" height="48" /><br /><sub>MissHumaStar</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/miss-huma-thinking-primary.svg" width="48" height="48" /><br /><sub>MissHumaThinking</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/miss-huma-thinking-question-primary.svg" width="48" height="48" /><br /><sub>MissHumaThinkingQuestion</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/no-connection-girl-primary.svg" width="48" height="48" /><br /><sub>NoConnectionGirl</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/notes-primary.svg" width="48" height="48" /><br /><sub>Notes</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/notes-2-primary.svg" width="48" height="48" /><br /><sub>Notes2</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/padlock-open-primary.svg" width="48" height="48" /><br /><sub>PadlockOpen</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/sikka-primary.svg" width="48" height="48" /><br /><sub>Sikka</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/sikkay-stacked-primary.svg" width="48" height="48" /><br /><sub>SikkayStacked</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/sikkay-stacked-sparkles-primary.svg" width="48" height="48" /><br /><sub>SikkayStackedSparkles</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/studying-boy-big-book-primary.svg" width="48" height="48" /><br /><sub>StudyingBoyBigBook</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/studying-boy-mobile-primary.svg" width="48" height="48" /><br /><sub>StudyingBoyMobile</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/studying-boy-phone-primary.svg" width="48" height="48" /><br /><sub>StudyingBoyPhone</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/studying-girl-laying-down-primary.svg" width="48" height="48" /><br /><sub>StudyingGirlLayingDown</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/studying-girl-table-primary.svg" width="48" height="48" /><br /><sub>StudyingGirlTable</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/tag-bookmark-premium-primary.svg" width="48" height="48" /><br /><sub>TagBookmarkPremium</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/tag-pill-shine-premium-primary.svg" width="48" height="48" /><br /><sub>TagPillShinePremium</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/tests-primary.svg" width="48" height="48" /><br /><sub>Tests</sub></td>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/video-lectures-primary.svg" width="48" height="48" /><br /><sub>VideoLectures</sub></td>
  </tr>
  <tr>
    <td align="center"><img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/walking-girl-walkman-primary.svg" width="48" height="48" /><br /><sub>WalkingGirlWalkman</sub></td>
  </tr>
</table>

## Variants Explained

| Variant     | Preview                                                                                                                                                        | Description             | Use Case                   |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | -------------------------- |
| `primary`   | <img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/primary/doubtsolve-primary.svg" width="48" height="48" />     | Blue color scheme       | Default, general use       |
| `secondary` | <img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/secondary/doubtsolve-secondary.svg" width="48" height="48" /> | Brown/pink color scheme | Alternative styling        |
| `dark`      | <img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/dark/doubtsolve-dark.svg" width="48" height="48" />           | Dark monotone           | Icons on light backgrounds |
| `light`     | <img src="https://raw.githubusercontent.com/maqsad-io/maqsad-icons/main/app/assets/illustrations/light/doubtsolve-light.svg" width="48" height="48" />         | Light monotone          | Icons on dark backgrounds  |

## Adding New Icons

### System Icons

1. Add your SVG file to `assets/system/stroke/` (for outline icons) or `assets/system/filled/` (for filled icons)
2. Run `pnpm build:icons`

### Illustration Icons

1. Add your SVG files to `assets/illustrations/{variant}/` for each variant
2. Run `pnpm build:icons`

## Development

```bash
# Install dependencies
pnpm install

# Build icons from SVG assets
pnpm build:icons

# Build the library
pnpm build

# Type check
pnpm typecheck
```

## Tree Shaking

This library is fully tree-shakeable. Import only the icons you need:

```tsx
// ✅ Good - only imports what you need
import { IconSearch, IconHeart } from "@maqsad/icons";

// ✅ Also good - imports from specific subpath
import { IconSearch } from "@maqsad/icons/system";
import { IllustrationNotes } from "@maqsad/icons/illustrations";
```

## TypeScript

Full TypeScript support with exported types:

```tsx
import type {
  SystemIconProps,
  IllustrationIconProps,
  SystemIconSize,
  IllustrationVariant,
} from "@maqsad/icons";
```

## License

MIT

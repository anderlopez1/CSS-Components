# @anderlopez/untitledui-components

A production-ready React component library with **200+ components** built on React Aria Components and Tailwind CSS v4.2.

> **Note:** Update the package name and author details in `package.json` before publishing.

## Features

✨ **200+ Production-Ready Components**
- 25+ base UI components (buttons, inputs, badges, avatars)
- 14+ application components (tables, modals, date pickers, pagination)
- 100+ icon sets (social, payment, integration icons)
- 6+ marketing and asset components

🎨 **Design System**
- Built on React Aria Components for accessibility
- Tailwind CSS v4.2 for styling
- Full TypeScript support
- Responsive and accessible by default

📦 **Easy to Use**
- Tree-shakeable exports
- Semantic color system
- Compound component patterns
- Comprehensive prop documentation

## Installation

```bash
npm install @anderlopez/untitledui-components

# or
yarn add @anderlopez/untitledui-components

# or
pnpm add @anderlopez/untitledui-components
```

## Quick Start

### 1. Import Components

```typescript
import { Button, Input, Badge, Avatar } from '@anderlopez/untitledui-components';

export function Example() {
  return (
    <>
      <Button size="md" color="primary">Click me</Button>
      <Input label="Email" placeholder="olivia@untitledui.com" />
      <Badge color="brand">New</Badge>
    </>
  );
}
```

### 2. Import Styles

Add this to your global CSS or app entry point:

```css
@import '@anderlopez/untitledui-components/styles';
```

Or in your CSS file:

```css
@import url('@anderlopez/untitledui-components/styles');
```

### 3. Use Icons

```typescript
import { Home01, Settings01, ChevronDown } from '@untitledui/icons';
import { Button } from '@anderlopez/untitledui-components';

export function Example() {
  return <Button iconLeading={Settings01}>Settings</Button>;
}
```

## Component Categories

### Base Components
- **Buttons**: Button, SocialButton, AppStoreButtons
- **Form Inputs**: Input, Textarea, Select, Checkbox, Radio, Toggle, Slider
- **Display**: Avatar, Badge, Tags, Tooltip, ProgressIndicators
- **Interaction**: Dropdown, ButtonGroup, FileUploadTrigger

### Application Components
- Table, Tabs, Pagination
- DatePicker, DateRangePicker
- Modal, SlideoutMenu
- Carousel, FileUpload
- Navigation (Sidebar, Header)
- EmptyState, LoadingIndicator

### Foundation Components
- FeaturedIcon (with 8 themes)
- Logos, RatingStars, RatingBadge
- 20+ Social Icons
- 50+ Payment Icons
- 20+ Integration Icons

### Marketing & Assets
- Header Navigation variants
- iPhone Mockup, QR Code, Credit Card
- Background Patterns, Illustrations

## Usage Examples

### Button Component

```typescript
import { Button } from '@anderlopez/untitledui-components';
import { ChevronDown } from '@untitledui/icons';

export function ButtonExamples() {
  return (
    <>
      {/* Basic button */}
      <Button>Save</Button>

      {/* With icon */}
      <Button iconLeading={ChevronDown} size="md" color="primary">
        Options
      </Button>

      {/* Loading state */}
      <Button isLoading showTextWhileLoading>
        Submitting...
      </Button>

      {/* Destructive */}
      <Button color="primary-destructive">Delete</Button>

      {/* Link style */}
      <Button color="link-color">Learn more</Button>
    </>
  );
}
```

### Input Component

```typescript
import { Input } from '@anderlopez/untitledui-components';
import { Mail01 } from '@untitledui/icons';

export function InputExamples() {
  return (
    <>
      {/* Basic input */}
      <Input label="Name" placeholder="Enter your name" />

      {/* With icon and validation */}
      <Input
        icon={Mail01}
        label="Email"
        placeholder="olivia@untitledui.com"
        isRequired
        hint="We'll never share your email"
      />

      {/* Error state */}
      <Input
        label="Username"
        isInvalid
        hint="Username already taken"
      />
    </>
  );
}
```

### Select Component

```typescript
import { Select } from '@anderlopez/untitledui-components';

const users = [
  { id: '1', name: 'Olivia', email: 'olivia@untitledui.com' },
  { id: '2', name: 'Phoenix', email: 'phoenix@untitledui.com' },
];

export function SelectExamples() {
  return (
    <>
      {/* Basic select */}
      <Select label="Team member" placeholder="Select member" items={users}>
        {(item) => (
          <Select.Item id={item.id} supportingText={item.email}>
            {item.name}
          </Select.Item>
        )}
      </Select>

      {/* With search (ComboBox) */}
      <Select.ComboBox label="Search" placeholder="Search users" items={users}>
        {(item) => <Select.Item id={item.id}>{item.name}</Select.Item>}
      </Select.ComboBox>
    </>
  );
}
```

### Badge Component

```typescript
import { Badge, BadgeWithDot, BadgeWithIcon } from '@anderlopez/untitledui-components';
import { ArrowUp } from '@untitledui/icons';

export function BadgeExamples() {
  return (
    <>
      <Badge color="brand" size="md">New</Badge>
      <BadgeWithDot color="success">Active</BadgeWithDot>
      <BadgeWithIcon iconLeading={ArrowUp} color="success">12%</BadgeWithIcon>
    </>
  );
}
```

## Color System

Use semantic color classes instead of gray-specific utilities:

```typescript
// ✅ Correct
className="text-primary bg-secondary border-primary"

// ❌ Incorrect
className="text-gray-900 bg-gray-50 border-gray-300"
```

### Text Colors
- `text-primary` - Main text
- `text-secondary` - Labels and headings
- `text-tertiary` - Supporting text
- `text-quaternary` - Subtle text
- `text-brand-*` - Brand colors
- `text-error-primary`, `text-warning-primary`, `text-success-primary`

### Background Colors
- `bg-primary` - Main background
- `bg-secondary` - Section backgrounds
- `bg-active` - Active states
- `bg-brand-*` - Brand backgrounds
- `bg-error-*`, `bg-warning-*`, `bg-success-*` - Semantic

## Customization

### Theme Colors

Edit your Tailwind config to customize brand colors:

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        // Override brand colors
        brand: {
          50: 'rgb(249 245 255)',
          100: 'rgb(244 235 255)',
          // ... continue color scale
        },
      },
    },
  },
};
```

## Dependencies

This library requires:

- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `react-aria-components`: ^1.16.0
- `tailwindcss`: ^4.2.2
- `@untitledui/icons`: ^0.0.20+

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Support

For issues, questions, or feature requests, please visit the GitHub repository.

---

**Before publishing to npm:**

1. Update `package.json` with your actual npm account username
2. Update repository URL to your GitHub repo
3. Update author details
4. Create an npm account at [npmjs.com](https://npmjs.com)
5. Run `npm login` in your terminal
6. Run `npm publish` to publish the package

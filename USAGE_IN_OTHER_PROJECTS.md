# Using @anderlopez/untitledui-components in Other Projects

Guide to install and use the component library in your other GitHub projects.

## 🚀 Quick Install (5 minutes)

### Step 1: Install the package

```bash
npm install @yourname/untitledui-components
```

### Step 2: Import styles globally

In your main app file (Next.js, React, etc.):

```typescript
// app.tsx or main.tsx or _app.tsx
import '@yourname/untitledui-components/styles';
```

### Step 3: Start using components

```typescript
import { Button, Input, Badge } from '@yourname/untitledui-components';

export function MyComponent() {
  return (
    <>
      <Button size="md" color="primary">Click me</Button>
      <Input label="Email" placeholder="email@example.com" />
      <Badge color="brand">New</Badge>
    </>
  );
}
```

## 📱 Framework-Specific Setup

### Next.js (Recommended)

```typescript
// app/layout.tsx
import '@yourname/untitledui-components/styles';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

### React (Vite/Create React App)

```typescript
// main.tsx or index.tsx
import '@yourname/untitledui-components/styles';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

### Remix

```typescript
// root.tsx
import '@yourname/untitledui-components/styles';
```

## 📦 Available Components

All components are directly importable:

```typescript
// Buttons
import { Button, SocialButton, CloseButton } from '@yourname/untitledui-components';

// Form Inputs
import { Input, Select, Checkbox, Textarea } from '@yourname/untitledui-components';

// Display
import { Avatar, Badge, Tags, Tooltip } from '@yourname/untitledui-components';

// Application
import { Table, Modal, DatePicker, Pagination } from '@yourname/untitledui-components';

// Icons
import { FeaturedIcon } from '@yourname/untitledui-components';
import { Home01, Settings01 } from '@untitledui/icons';
```

See [README-PACKAGE.md](./README-PACKAGE.md) for full component list.

## 🎨 Styling

### Use Semantic Colors

```typescript
// ✅ Correct
className="text-primary bg-secondary border-primary"

// ❌ Incorrect
className="text-gray-900 bg-gray-50 border-gray-300"
```

### Customize Theme

If you want to override theme colors in your project:

```css
/* global.css */
:root {
  --color-brand-600: #your-brand-color;
  /* Override other colors as needed */
}
```

## 📚 Common Patterns

### Form with Validation

```typescript
import { Input, Button, Form } from '@yourname/untitledui-components';
import { useState } from 'react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Your submit logic
      }}
    >
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        isRequired
      />
      <Button isLoading={isLoading} type="submit">
        Sign in
      </Button>
    </Form>
  );
}
```

### Data Table

```typescript
import { Table } from '@yourname/untitledui-components';

const data = [
  { id: 1, name: 'Olivia', role: 'Product Designer' },
  { id: 2, name: 'Phoenix', role: 'Engineering' },
];

export function UserTable() {
  return (
    <Table
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'role', label: 'Role' },
      ]}
      rows={data}
    />
  );
}
```

### Modal

```typescript
import { Modal, Button } from '@yourname/untitledui-components';
import { useState } from 'react';

export function ConfirmDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Delete</Button>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <div>
            <h2>Confirm Delete</h2>
            <p>Are you sure?</p>
            <Button color="primary-destructive">Delete</Button>
            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          </div>
        </Modal>
      )}
    </>
  );
}
```

## 🔄 Updating to Latest Version

```bash
# Check current version
npm list @yourname/untitledui-components

# Update to latest
npm update @yourname/untitledui-components

# Or install specific version
npm install @yourname/untitledui-components@1.0.1
```

## 🆘 Troubleshooting

### Styles not loading

```typescript
// Make sure this is imported in your entry point
import '@yourname/untitledui-components/styles';
```

### Component not found

```typescript
// Check the correct path
import { Button } from '@yourname/untitledui-components';

// NOT
import Button from '@yourname/untitledui-components/button';
```

### TypeScript errors

Install types (usually automatic):

```bash
npm install --save-dev @types/@yourname/untitledui-components
```

### Icon imports not working

Make sure you have @untitledui/icons installed:

```bash
npm install @untitledui/icons
```

Then import icons:

```typescript
import { Home01, Settings01 } from '@untitledui/icons';
import { Button } from '@yourname/untitledui-components';

<Button iconLeading={Settings01}>Settings</Button>
```

## 📖 Full Documentation

See `README-PACKAGE.md` for:
- Full component API
- Prop definitions
- Usage examples for each component
- Color system reference

## 💡 Tips

1. **Start with base components** (Button, Input, Select)
2. **Use compound components** (Select.Item, Badge.WithDot)
3. **Reference CLAUDE.md** for naming conventions
4. **Check component source** for advanced props
5. **Keep styles imported globally** for consistency

## 🚀 Next Steps

1. Install the package in your project
2. Import styles in your app entry point
3. Start using components
4. Refer to README-PACKAGE.md for component docs
5. Customize theme colors if needed

---

**Have questions?** Check the [README-PACKAGE.md](./README-PACKAGE.md) or the component source code.

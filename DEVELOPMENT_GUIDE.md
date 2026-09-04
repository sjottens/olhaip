# OlhaIP Development Guide

## Quick Start
```bash
# Install dependencies
npm install

# Development server (hot reload)
npm run dev

# Open http://localhost:3000
```

## Build & Deploy
```bash
# Build for production
npm run build

# Run production build locally
npm run start

# Check for linting issues
npm run lint
```

## Project Structure Quick Reference

### Adding a New Tool Page
1. Create folder: `src/app/[tool-name]/`
2. Create `page.tsx` with your component
3. Import components from `@/components/ui/` and `@/components/layout/`
4. Use design system CSS variables in className
5. Add link to Footer (`src/components/layout/Footer.tsx`)

Template:
```tsx
'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';

export default function ToolPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-[var(--color-foreground)] mb-8">
        Tool Name
      </h1>
      {/* Content */}
    </div>
  );
}
```

### Adding a New Guide
1. Create folder: `src/app/guides/[guide-name]/`
2. Create `layout.tsx` with metadata:
```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Title | OlhaIP',
  description: 'Your description',
};

export default function Layout({ children }) {
  return children;
}
```
3. Create `page.tsx` with 'use client' directive
4. Add link to `/guides/page.tsx` grid

### Using Design System Variables

**Colors**
- `var(--color-primary)` - Main brand blue
- `var(--color-background)` - Page background
- `var(--color-foreground)` - Text color
- `var(--color-foreground-secondary)` - Muted text
- `var(--color-surface)` - Card backgrounds
- `var(--color-border)` - Border color

**Typography**
- `text-4xl` through `text-xs` (Tailwind scale)
- `font-bold`, `font-semibold`, `font-normal`

**Spacing**
- `px-4` (padding horizontal)
- `py-12` (padding vertical)
- `mb-8` (margin bottom)
- `space-y-4` (vertical gap between children)

**Cards**
```tsx
<Card>
  <CardHeader>
    <h2 className="text-2xl font-semibold">Title</h2>
  </CardHeader>
  <CardContent>
    <p>Content goes here</p>
  </CardContent>
</Card>
```

## API Routes

### Adding an API Endpoint
Create `src/app/api/[route]/route.ts`:
```tsx
export async function GET(request: Request) {
  return Response.json({ data: 'value' });
}
```

Available utilities:
- `getClientIP()` from `@/lib/server-utils.ts`
- `formatHeaders()` for header processing
- Request headers available via `request.headers`

## Utility Functions

### Client-Side (`@/lib/client-utils.ts`)
- `getBrowserInfo()` - Detect browser, OS, device
- `isValidIPv4()` / `isValidIPv6()` - IP validation
- `getIPVersion()` - Identify IP type
- `copyToClipboard()` - Copy text to clipboard

### Server-Side (`@/lib/server-utils.ts`)
- `getClientIP()` - Extract client IP from request
- `formatHeaders()` - Format request headers for display

### TypeScript Types (`@/lib/types.ts`)
- `IPInfo` - IP address information
- `BrowserInfo` - Browser detection results
- `DNSRecord`, `DNSLookupResult` - DNS data types
- `IPLookupResult` - IP lookup response

## SEO & Structured Data

### Using JSON-LD Schemas
Import from `@/lib/schema.ts`:
```tsx
import { generateArticleSchema, StructuredData } from '@/lib/schema';

export default function GuidePage() {
  const schema = generateArticleSchema(
    'Title',
    'Description',
    'https://olhaip.com/guides/...', 
    'Full content...'
  );
  
  return (
    <>
      <StructuredData schema={schema} />
      {/* Page content */}
    </>
  );
}
```

Available schema generators:
- `generateWebSiteSchema()` - Site schema
- `generateOrganizationSchema()` - Org info
- `generateArticleSchema()` - Guide articles
- `generateBreadcrumbSchema()` - Breadcrumbs
- `generateFAQSchema()` - FAQ pages

## Common Tasks

### Add Meta Tags to a Page
```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | OlhaIP',
  description: 'Page description for search results',
  keywords: 'keyword1, keyword2',
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    url: 'https://olhaip.com/path',
    type: 'website',
  },
};
```

### Update Navigation
Edit `src/components/layout/Header.tsx`:
```tsx
const navLinks = [
  { label: 'Tools', href: '/tools' },
  { label: 'Guides', href: '/guides' },
  // Add your link here
];
```

Edit Footer: `src/components/layout/Footer.tsx`

### Add a Copy Button
```tsx
import { CopyButton } from '@/components/ui/CopyButton';

<CopyButton text="Copy this text" />
```

### Create a Custom Button
```tsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" size="lg">
  Click Me
</Button>
```

Button variants: `primary`, `secondary`, `ghost`
Button sizes: `sm`, `md`, `lg`

## Testing

### Run Locally
```bash
npm run dev
# Visit http://localhost:3000
```

### Test API Routes
```bash
curl http://localhost:3000/api/ip
curl http://localhost:3000/api/headers
```

### Check Build
```bash
npm run build
# Look for "✓ Compiled successfully"
# Check route prerendering list at the end
```

## Performance Tips

1. Use Server Components by default (don't add 'use client' unless needed)
2. Use static generation for guides (automatic with Next.js)
3. Use dynamic API routes only for server computations
4. Keep component files in `/components/ui/` for reusability
5. Use CSS variables instead of hardcoded colors

## Debugging

### Check TypeScript Errors
```bash
npm run build
# TypeScript errors shown after compilation
```

### View Build Artifact
```bash
ls -la .next/
```

### Check Route Generation
Build output shows all prerendered pages - verify your new routes appear.

## Before Deploying

1. ✅ Run `npm run build` - all pages should prerender
2. ✅ Run `npm run lint` - no ESLint errors
3. ✅ Test all links work correctly
4. ✅ Check mobile responsiveness (320px, 768px, 1440px)
5. ✅ Verify SEO meta tags present
6. ✅ Test API routes work
7. ✅ Load test with Lighthouse

## Environment Setup

### Required
- Node.js 18+ (LTS recommended)
- npm or yarn

### Optional
- VS Code with Tailwind CSS IntelliSense extension
- Prettier for code formatting
- ESLint extension

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/guide-name

# Make changes
git add .
git commit -m "Add new guide: Guide Title"

# Build before push
npm run build

# Push
git push origin feature/guide-name
```

## Key Files Reference

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `tsconfig.json` | TypeScript configuration |
| `tailwind.config.ts` | Tailwind CSS config |
| `postcss.config.mjs` | PostCSS plugins |
| `next.config.js` | Next.js configuration |
| `src/app/globals.css` | Design system & global styles |
| `src/lib/types.ts` | TypeScript interfaces |
| `src/lib/client-utils.ts` | Browser utilities |
| `src/lib/server-utils.ts` | Server utilities |

## Common Errors & Solutions

| Error | Solution |
|-------|----------|
| Import error for component | Check path uses `@/` alias, file exists |
| CSS variable not working | Use `var(--color-name)` exactly as defined in globals.css |
| Build fails | Run `npm run build` to see detailed errors |
| Page not found | Verify `page.tsx` exists in route folder |
| Layout not applied | Ensure metadata is in `layout.tsx`, content in `page.tsx` |

## Resources

- [Next.js 16 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Schema.org Markup](https://schema.org)

---

**Last Updated**: January 2025
**Next Phase**: Add Open Graph, breadcrumbs, and Lighthouse optimization

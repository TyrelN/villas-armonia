# Villa Armonia

This is a [Next.js](https://nextjs.org) project for Villa Armonia, a property management application.

## Authentication

This project uses [Supabase](https://supabase.com) for authentication with support for email/password and Google OAuth. To set up authentication:

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from the project settings
3. Create a `.env.local` file with the following variables:

```bash
NEXT_PUBLIC_SUPABASE_URL="your-supabase-project-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
DATABASE_URL="your-database-url"
```

### Setting up Google OAuth

To enable Google social login:

1. Go to your Supabase project dashboard
2. Navigate to **Authentication** > **Providers**
3. Enable **Google** provider
4. Create a Google OAuth application at [Google Cloud Console](https://console.cloud.google.com/):
   - Go to **APIs & Services** > **Credentials**
   - Click **Create Credentials** > **OAuth 2.0 Client IDs**
   - Set **Authorized redirect URIs** to: `https://your-project-ref.supabase.co/auth/v1/callback`
5. Copy the **Client ID** and **Client Secret** from Google
6. Paste them into the Google provider settings in Supabase

## SVG to React Component Conversion

This project includes a sophisticated SVG to React component conversion system for creating interactive lot maps. The system preserves all element IDs and enables dynamic styling and interactivity.

### Prerequisites

Install the required dependencies:

```bash
npm install --save-dev @svgr/cli svgo
```

### Exporting from Figma with IDs Intact

To create a new lot map from Figma that works with our system:

#### 1. Prepare Your Figma Design

- **Layer Structure**: Organize your lot map with clear layer hierarchy
- **Naming Convention**: Use consistent naming for lot elements (e.g., `lot-1`, `lot-2`, etc.)
- **Grouping**: Group related elements together (e.g., lot shapes, text labels, etc.)

#### 2. Export Settings in Figma

1. **Select your lot map frame/artboard**
2. **Right-click** and select **"Export"**
3. **Choose SVG format** from the export options
4. **Enable "Include 'id' attribute"** in export settings
5. **Set scale** to 1x for optimal quality
6. **Export** the file

#### 3. Optimize the Export

After exporting from Figma, you may need to:

- **Clean up unnecessary elements** (guides, hidden layers, etc.)
- **Ensure all lot elements have proper IDs** (e.g., `lot-1`, `lot-2`, etc.)
- **Verify text elements are properly converted** to paths if needed
- **Check that colors and styles are preserved**

### Converting SVG to React Component

#### 1. Place SVG File

Save your exported SVG file to `src/assets/lot-map.svg` (or your preferred name).

#### 2. Run Conversion Command

Use the provided npm scripts to convert the SVG to an interactive React component:

**Basic conversion:**
```bash
npm run svg:react
```

**Full conversion with interactivity:**
```bash
npm run svg:full
```

**Step-by-step process:**
```bash
# Step 1: Convert SVG to basic React component
npm run svg:react

# Step 2: Add interactivity and styling
npm run svg:enhance
```

The conversion process:
- Optimizes the SVG using SVGO with ID preservation
- Converts it to a React component using SVGR
- Outputs the basic component to `src/assets/LotMap.jsx`
- Enhances it with click handlers and dynamic styling
- Outputs the final interactive component to `src/components/Lotmap.jsx`

#### 3. Configuration Files

The conversion process uses these configuration files:

**`.svgrrc.js`** - SVGR configuration:
```javascript
module.exports = {
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            cleanupIds: false, // Preserves all IDs
            removeViewBox: false,
            removeTitle: false,
          },
        },
      },
    ],
  },
  svgProps: { width: "380", height: "1433" },
  icon: true,
  titleProp: true,
  descProp: true,
  ref: true,
  expandProps: "end",
  svgo: true,
};
```

**`svgo.config.js`** - SVGO optimization settings:
```javascript
module.exports = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          cleanupIds: false, // Critical for preserving IDs
        },
      },
    },
  ],
};
```

### Integrating the Generated Component

#### 1. Automated Enhancement

The `svg:enhance` script automatically:

- **Adds click handlers** to all lot groups (`lot-*` elements)
- **Implements dynamic styling** based on lot availability
- **Integrates state management** for selected lots
- **Includes side panel integration**
- **Applies proper cursor styles** and hover effects

#### 2. Manual Enhancement (if needed)

If you need to customize the enhancement process, you can:

- **Modify the script** at `scripts/add-lot-handlers.js`
- **Add custom styling functions** for different lot states
- **Implement additional interactivity** features
- **Customize the side panel integration**

#### 3. Example Integration

```jsx
"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SidePanel from "./SidePanel";

export default function LotMap({ lotAvailability = {} }) {
  const [selectedLot, setSelectedLot] = useState(null);

  const handleLotClick = (lotId) => {
    setSelectedLot(lotId);
  };

  const getLotFillColor = (lotId) => {
    const availability = lotAvailability[lotId];
    switch (availability) {
      case "available": return "#4cc091";
      case "unavailable": return "#B7580A";
      case "reserved": return "#C6A15B";
      default: return "#A6BBB2";
    }
  };

  return (
    <div className="relative">
      {/* SVG content with click handlers */}
      <svg>
        {/* Generated SVG content with onClick handlers */}
      </svg>
      
      <AnimatePresence>
        {selectedLot && (
          <SidePanel 
            lotNumber={selectedLot} 
            onClose={() => setSelectedLot(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
```

### Best Practices

#### 1. Figma Design Guidelines

- **Consistent Naming**: Use `lot-{number}` format for all lot elements
- **Layer Organization**: Keep related elements grouped logically
- **Color Coding**: Use distinct colors for different lot states
- **Text Elements**: Convert text to paths if you need precise control
- **Export Settings**: Always enable ID preservation in Figma export

#### 2. SVG Optimization

- **Remove unnecessary elements** before conversion
- **Simplify complex paths** when possible
- **Use semantic IDs** for better code readability
- **Test the conversion** with a small subset first

#### 3. React Integration

- **Preserve all IDs** - they're essential for interactivity
- **Add proper TypeScript types** if using TypeScript
- **Implement proper error handling** for missing lots
- **Use consistent state management** patterns

### Troubleshooting

#### Common Issues

1. **IDs Missing After Conversion**
   - Check that `cleanupIds: false` is set in both config files
   - Verify Figma export includes ID attributes
   - Ensure SVGR version is compatible

2. **Styling Issues**
   - Check that CSS custom properties are properly defined
   - Verify color variables are accessible in the component
   - Test with different lot availability states

3. **Click Handlers Not Working**
   - Ensure lot elements have proper `onClick` handlers
   - Check that event propagation is handled correctly
   - Verify lot IDs match between SVG and state management

#### Debugging Commands

```bash
# Check SVG structure
cat src/assets/lot-map.svg | grep -E "id=\"lot-"

# Verify SVGR output
npm run svg:react && head -20 src/assets/LotMap.jsx

# Test the enhancement script
node scripts/add-lot-handlers.js src/assets/LotMap.jsx

# Test component compilation
npm run build

# Full workflow test
npm run svg:full
```

### Advanced Customization

#### Custom Styling Functions

You can create custom styling functions for different lot states:

```javascript
const getLotStyles = (lotId, availability) => ({
  fill: getLotFillColor(lotId),
  stroke: getLotStrokeColor(lotId),
  cursor: availability === 'available' ? 'pointer' : 'default',
  opacity: availability === 'unavailable' ? 0.6 : 1,
});
```

#### Animation Integration

Add smooth transitions and animations:

```javascript
import { motion } from "framer-motion";

const LotElement = ({ lotId, ...props }) => (
  <motion.g
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ duration: 0.2 }}
    {...props}
  />
);
```

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the database migrations:

```bash
npx prisma migrate dev
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

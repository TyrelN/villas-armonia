#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script to automatically add click handlers and styling functions to a generated SVG React component
 * This transforms a basic SVG component into an interactive lot map component
 */

const TEMPLATE_HEADER = `"use client";

import * as React from "react";
import { forwardRef, useState } from "react";
import SidePanel from "@/components/SidePanel";

const SvgLotMap = ({ 
  title, 
  titleId, 
  desc, 
  descId, 
  lotAvailability = {}, // Object with lot numbers as keys and availability status as values
  ...props 
}, ref) => {
  const [selectedLot, setSelectedLot] = useState(null);

  const handleLotClick = (lotNumber) => {
    setSelectedLot(lotNumber);
  };

  const handleClosePanel = () => {
    setSelectedLot(null);
  };

  // Function to get lot fill color based on availability
  const getLotFillColor = (lotNumber) => {
    const availability = lotAvailability[lotNumber];
    
    switch (availability) {
      case 'available':
        return 'oklch(96.2% .044 156.743)'; // Default green color
      case 'unavailable':
        return '#B7580A'; // Burgundy color for unavailable lots
      case 'reserved':
        return 'var(--color-orange-100)'; // Orange color for reserved lots
      case 'sold':
        return '#6b7280'; // Gray color for sold lots
      default:
        return '#a9bbb2'; // Default color if no data
    }
  };

  // Function to get lot stroke color based on availability
  const getLotStrokeColor = (lotNumber) => {
    const availability = lotAvailability[lotNumber];
    
    switch (availability) {
      case 'available':
        return '#d9b382'; // Default stroke color
      case 'unavailable':
        return '#dc2626'; // Darker red for stroke
      case 'reserved':
        return '#d97706'; // Darker orange for stroke
      case 'sold':
        return '#374151'; // Darker gray for stroke
      default:
        return '#d9b382'; // Default stroke color
    }
  };

  // Function to get lot text color based on availability
  const getLotTextColor = (lotNumber) => {
    const availability = lotAvailability[lotNumber];
    
    switch (availability) {
      case 'available':
        return 'var(--color-green-600)'; // Dark text for light backgrounds
      case 'unavailable':
        return '#ffffff'; // White text for red background
      case 'reserved':
        return 'var(--color-orange-600)'; // White text for orange background
      case 'sold':
        return '#ffffff'; // White text for gray background
      default:
        return '#212121'; // Dark text for light backgrounds
    }
  };

  // Function to get lot cursor style based on availability
  const getLotCursorStyle = (lotNumber) => {
    const availability = lotAvailability[lotNumber];
    
    switch (availability) {
      case 'available':
        return 'cursor-pointer hover:opacity-80 transition-opacity';
      case 'unavailable':
        return 'cursor-not-allowed opacity-60';
      case 'reserved':
        return 'cursor-pointer hover:opacity-80 transition-opacity';
      case 'sold':
        return 'cursor-not-allowed opacity-60';
      default:
        return 'cursor-pointer hover:opacity-80 transition-opacity';
    }
  };

  // Function to handle lot click based on availability
  const handleLotClickWithAvailability = (lotNumber) => {
    const availability = lotAvailability[lotNumber];
    
    // Only allow clicks for available or reserved lots
    if (availability === 'available' || availability === 'reserved') {
      handleLotClick(lotNumber);
    }
  };

  return (
    <div 
      className="relative bg-transparent"
      style={{
        backgroundColor: 'transparent',
        background: 'none'
      }}
    >
      {/* Backdrop blur overlay positioned behind the SVG */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          clipPath: 'polygon(100% 4.13%, 41.3% 0%, 29.8% 15.68%, 19.5% 25.83%, 6.7% 49.13%, 5.6% 73%, 0.3% 96.25%, 15.1% 100%, 63.8% 96.6%, 76.1% 74.68%, 82.3% 51.18%, 88.9% 27.25%, 100% 4.13%)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '8px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          zIndex: 1
        }}
      />
      
      {/* SVG container with higher z-index */}
      <div className="relative z-10">
                                                 <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="381"
                     height="1433"
                     fill="none"
                     viewBox="0 0 381 1433"
                     ref={ref}
                     aria-labelledby={titleId}
                     aria-describedby={descId}
                     className="bg-transparent"
                     style={{
                       backgroundColor: 'transparent',
                       background: 'none'
                     }}
                     {...props}
                   >
      {desc ? <desc id={descId}>{desc}</desc> : null}
      {title ? <title id={titleId}>{title}</title> : null}`;

const TEMPLATE_FOOTER = `
      </svg>
      </div>
      
      {/* Side Panel */}
      {selectedLot && (
        <SidePanel 
          lotNumber={selectedLot} 
          onClose={handleClosePanel} 
        />
      )}
    </div>
  );
};

export default forwardRef(SvgLotMap);
`;

function addHandlersToLotGroups(svgContent) {
  // Find all lot groups (g elements with id="lot-*")
  const lotGroupRegex = /<g\s+id="lot-(\d+)"([^>]*)>/g;
  
  let modifiedContent = svgContent;
  let match;
  
  while ((match = lotGroupRegex.exec(svgContent)) !== null) {
    const lotNumber = match[1];
    const originalGroup = match[0];
    const attributes = match[2];
    
    // Create the enhanced group with click handlers and styling
    const enhancedGroup = `<g 
             id="lot-${lotNumber}" 
             className={getLotCursorStyle("${lotNumber}")}
             onClick={() => handleLotClickWithAvailability("${lotNumber}")}
             ${attributes}>`;
    
    // Replace the original group with the enhanced version
    modifiedContent = modifiedContent.replace(originalGroup, enhancedGroup);
  }
  
  return modifiedContent;
}

function addStylingToLotElements(svgContent) {
  // Find all path elements and add dynamic fill/stroke based on their context
  const pathRegex = /<path\s+id="([^"]*)"\s+([^>]*)>/g;
  
  let modifiedContent = svgContent;
  let match;
  
  while ((match = pathRegex.exec(svgContent)) !== null) {
    const pathId = match[1];
    const attributes = match[2];
    
    // Check if this path is within a lot group by looking for the lot number in the path ID
    let lotMatch = pathId.match(/lot-(\d+)/);
    
    // If not found in path ID, check if it's a shape element within a lot group
    if (!lotMatch && (pathId === 'shape' || pathId.startsWith('shape_'))) {
      // Look for the lot number in the surrounding context by finding the most recent lot group
      const beforePath = svgContent.substring(0, match.index);
      const lotGroups = beforePath.match(/<g\s+id="lot-(\d+)"[^>]*>/g);
      if (lotGroups && lotGroups.length > 0) {
        const lastLotGroup = lotGroups[lotGroups.length - 1];
        const lotGroupMatch = lastLotGroup.match(/lot-(\d+)/);
        if (lotGroupMatch) {
          lotMatch = lotGroupMatch;
        }
      }
    }
    
    if (lotMatch) {
      const lotNumber = lotMatch[1];
      
      // Remove existing fill and stroke attributes from the attributes string
      let cleanAttributes = attributes
        .replace(/\bfill="[^"]*"/g, '')
        .replace(/\bstroke="[^"]*"/g, '')
        .replace(/\s+/g, ' ')
        .trim();
      
      // Create enhanced path with dynamic styling
      const enhancedPath = `<path
               id="${pathId}"
               fill={getLotFillColor('${lotNumber}')}
               stroke={getLotStrokeColor('${lotNumber}')}
               ${cleanAttributes}>`;
      
      // Replace the original path with the enhanced version
      modifiedContent = modifiedContent.replace(match[0], enhancedPath);
    }
  }
  
  return modifiedContent;
}



function removeEmbeddedImages(svgContent) {
  // Remove <image> tags with large base64 data
  const imageRegex = /<image[^>]*xlinkHref="data:image\/[^"]*"[^>]*\/?>/g;
  let modifiedContent = svgContent.replace(imageRegex, '');
  
  // Also remove any <image> tags that might be very large (over 1000 characters)
  const largeImageRegex = /<image[^>]*>[\s\S]*?<\/image>/g;
  modifiedContent = modifiedContent.replace(largeImageRegex, (match) => {
    if (match.length > 1000) {
      return '';
    }
    return match;
  });
  
  return modifiedContent;
}

function addStylingToLotText(svgContent) {
  // Find all text elements and add dynamic fill based on their context
  const textRegex = /<text\s+([^>]*)>/g;
  
  let modifiedContent = svgContent;
  let match;
  
  while ((match = textRegex.exec(svgContent)) !== null) {
    const attributes = match[1];
    
    // Skip text elements with specific IDs that should not be styled
    const idMatch = attributes.match(/id="([^"]*)"/);
    if (idMatch) {
      const textId = idMatch[1];
      // Skip styling for specific text elements that should remain unchanged
      if (textId === "Lote Commercial" || textId.includes("Commercial") || textId.includes("environment")) {
        continue;
      }
    }
    
    // Check if this text is within a lot group by looking for the lot number in the attributes
    let lotMatch = attributes.match(/lot-(\d+)/);
    
    // If not found in attributes, check if it's a text element within a lot group
    if (!lotMatch) {
      // Look for the lot number in the surrounding context by finding the most recent lot group
      const beforeText = svgContent.substring(0, match.index);
      const lotGroups = beforeText.match(/<g\s+id="lot-(\d+)"[^>]*>/g);
      if (lotGroups && lotGroups.length > 0) {
        const lastLotGroup = lotGroups[lotGroups.length - 1];
        const lotGroupMatch = lastLotGroup.match(/lot-(\d+)/);
        if (lotGroupMatch) {
          lotMatch = lotGroupMatch;
        }
      }
    }
    
    if (lotMatch) {
      const lotNumber = lotMatch[1];
      
      // Remove existing fill attribute from the attributes string
      let cleanAttributes = attributes
        .replace(/\bfill="[^"]*"/g, '')
        .replace(/\s+/g, ' ')
        .trim();
      
      // Create enhanced text with dynamic styling
      const enhancedText = `<text
               ${cleanAttributes}
               fill={getLotTextColor('${lotNumber}')}>`;
      
      // Replace the original text with the enhanced version
      modifiedContent = modifiedContent.replace(match[0], enhancedText);
    }
  }
  
  return modifiedContent;
}

function addGlassmorphismToPerimeter(svgContent) {
  // Find the perimeter path and preserve it as-is for now
  // We'll handle the backdrop blur effect at the component level instead
  const perimeterRegex = /<path\s+id="perimeter"([^>]*?)\s*\/>/g;
  
  return svgContent.replace(perimeterRegex, (match, attributes) => {
    // Just preserve the original perimeter path
    return match;
  });
}

function processGeneratedComponent(inputPath, outputPath) {
  try {
    
    // Read the generated component
    const generatedContent = fs.readFileSync(inputPath, 'utf8');
    

    
    // Try different patterns to extract SVG content
    let svgContent = null;
    
    // Pattern 1: Direct SVG return (current generated format)
    const directSvgMatch = generatedContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
    if (directSvgMatch) {
      svgContent = directSvgMatch[1];
    }
    
    // Pattern 2: Wrapped in div with return statement
    if (!svgContent) {
      const wrappedSvgMatch = generatedContent.match(/return\s*\(\s*<div[^>]*>[\s\S]*?<svg[^>]*>([\s\S]*?)<\/svg>[\s\S]*?<\/div>\s*\)/);
      if (wrappedSvgMatch) {
        svgContent = wrappedSvgMatch[1];
      }
    }
    
    // Pattern 3: Any SVG content
    if (!svgContent) {
      const anySvgMatch = generatedContent.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
      if (anySvgMatch) {
        svgContent = anySvgMatch[1];
      }
    }
    
    if (!svgContent) {
      return false;
    }
    
    // Remove large embedded images (base64 data)
    svgContent = removeEmbeddedImages(svgContent);
    
    // Add handlers and styling
    svgContent = addHandlersToLotGroups(svgContent);
    svgContent = addStylingToLotElements(svgContent);
    svgContent = addStylingToLotText(svgContent);
    svgContent = addGlassmorphismToPerimeter(svgContent);
    
    // Create the final component
    const finalComponent = TEMPLATE_HEADER + svgContent + TEMPLATE_FOOTER;
    
    // Write the enhanced component
    fs.writeFileSync(outputPath, finalComponent, 'utf8');

    return true;
    
  } catch (error) {
    console.error('Error processing component:', error);
    return false;
  }
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 1) {
    process.exit(1);
  }
  
  const inputPath = args[0];
  const outputPath = args[1] || inputPath.replace('.jsx', '-enhanced.jsx');
  
  if (!fs.existsSync(inputPath)) {
    console.error(`❌ Input file not found: ${inputPath}`);
    process.exit(1);
  }
  
  const success = processGeneratedComponent(inputPath, outputPath);
  
  if (success) {
    if (process.env.NODE_ENV === 'development') {
    console.log(`
🎉 Success! Your enhanced component is ready.

Next steps:
1. Review the generated component at: ${outputPath}
2. Move it to your components directory if needed
3. Import and use it in your application

The component now includes:
- Click handlers for all lot groups
- Dynamic styling based on lot availability
- Side panel integration
- Proper state management
    `);
    }
  } else {
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  processGeneratedComponent,
  addHandlersToLotGroups,
  addStylingToLotElements,
  addStylingToLotText
};

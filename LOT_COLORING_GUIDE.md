# Villa Armonia - Reactive Lot Coloring System

This guide explains how to implement reactive coloring for lots based on backend data in your Villa Armonia project.

## 🎨 Color System Overview

The lot map uses a reactive coloring system that changes lot colors based on their availability status:

- **🟢 Available**: Green (`#a9bbb2`) - Default color for available lots
- **🔴 Unavailable**: Red (`#ef4444`) - Lots that are not available for purchase
- **🟠 Reserved**: Orange (`#f59e0b`) - Lots that are reserved but not sold
- **⚫ Sold**: Gray (`#6b7280`) - Lots that have been sold

## 🚀 Quick Start

### 1. Basic Usage

```jsx
import LotMap from '@/components/Lotmap';

function MyPage() {
  const lotAvailability = {
    "1": "available",
    "2": "unavailable", // This lot will be red
    "3": "reserved",    // This lot will be orange
    "4": "sold",        // This lot will be gray
    // ... add all 58 lots
  };

  return (
    <LotMap 
      lotAvailability={lotAvailability}
      title="Villa Armonia Lot Map"
      desc="Interactive map showing lot availability"
    />
  );
}
```

### 2. With Backend Integration

```jsx
import { useState, useEffect } from 'react';
import LotMap from '@/components/Lotmap';
import { LotAvailabilityService } from '@/utils/lotAvailabilityService';

function MyPage() {
  const [lotAvailability, setLotAvailability] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await LotAvailabilityService.fetchLotAvailability();
        setLotAvailability(data);
      } catch (error) {
        console.error('Error fetching lot data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <LotMap 
      lotAvailability={lotAvailability}
      title="Villa Armonia Lot Map"
      desc="Interactive map showing lot availability"
    />
  );
}
```

## 🔧 Component Props

The `LotMap` component accepts the following props:

```jsx
<LotMap 
  lotAvailability={object}     // Required: Object with lot numbers as keys and status as values
  title={string}               // Optional: SVG title
  titleId={string}             // Optional: Title ID for accessibility
  desc={string}                // Optional: SVG description
  descId={string}              // Optional: Description ID for accessibility
  {...otherSvgProps}           // Optional: Any other SVG props
/>
```

### lotAvailability Object Structure

```javascript
{
  "1": "available",    // Lot 1 is available (green)
  "2": "unavailable",  // Lot 2 is unavailable (red)
  "3": "reserved",     // Lot 3 is reserved (orange)
  "4": "sold",         // Lot 4 is sold (gray)
  // ... continue for all 58 lots
}
```

## 🎯 Status Values

| Status | Color | Description | Clickable |
|--------|-------|-------------|-----------|
| `available` | Green | Lot is available for purchase | ✅ Yes |
| `unavailable` | Red | Lot is not available | ❌ No |
| `reserved` | Orange | Lot is reserved but not sold | ✅ Yes |
| `sold` | Gray | Lot has been sold | ❌ No |

## 🔄 Real-time Updates

### WebSocket Integration

```jsx
import { useEffect } from 'react';
import { LotAvailabilityService } from '@/utils/lotAvailabilityService';

function MyPage() {
  const [lotAvailability, setLotAvailability] = useState({});

  useEffect(() => {
    // Subscribe to real-time updates
    const ws = LotAvailabilityService.subscribeToUpdates((data) => {
      if (data.type === 'availability_update') {
        setLotAvailability(prev => ({
          ...prev,
          [data.lotNumber]: data.status
        }));
      }
    });

    // Cleanup on unmount
    return () => ws.close();
  }, []);

  return <LotMap lotAvailability={lotAvailability} />;
}
```

### Polling Fallback

```jsx
import { useEffect } from 'react';
import { LotAvailabilityService } from '@/utils/lotAvailabilityService';

function MyPage() {
  const [lotAvailability, setLotAvailability] = useState({});

  useEffect(() => {
    // Start polling every 5 seconds
    const cleanup = LotAvailabilityService.startPolling((data) => {
      setLotAvailability(data);
    }, 5000);

    // Cleanup on unmount
    return cleanup;
  }, []);

  return <LotMap lotAvailability={lotAvailability} />;
}
```

## 🛠️ Backend API Requirements

Your backend should provide the following endpoints:

### GET /api/lots/availability
Returns all lot availability data.

**Response:**
```json
{
  "1": "available",
  "2": "unavailable",
  "3": "reserved",
  "4": "sold",
  // ... all 58 lots
}
```

### PUT /api/lots/{lotNumber}/availability
Updates a specific lot's availability.

**Request Body:**
```json
{
  "status": "available" | "unavailable" | "reserved" | "sold"
}
```

**Response:**
```json
{
  "success": true,
  "lotNumber": "1",
  "status": "available"
}
```

### WebSocket: ws://your-api/lots/updates
For real-time updates.

**Message Format:**
```json
{
  "type": "availability_update",
  "lotNumber": "1",
  "status": "unavailable",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

## 🎨 Customizing Colors

To customize the colors, modify the color functions in `src/components/Lotmap.jsx`:

```jsx
// Function to get lot fill color based on availability
const getLotFillColor = (lotNumber) => {
  const availability = lotAvailability[lotNumber];
  
  switch (availability) {
    case 'available':
      return '#a9bbb2'; // Customize this color
    case 'unavailable':
      return '#ef4444'; // Customize this color
    case 'reserved':
      return '#f59e0b'; // Customize this color
    case 'sold':
      return '#6b7280'; // Customize this color
    default:
      return '#a9bbb2'; // Default color
  }
};
```

## 🔍 Interactive Features

### Click Behavior
- **Available/Reserved lots**: Clickable, opens side panel
- **Unavailable/Sold lots**: Not clickable, shows cursor-not-allowed

### Visual Feedback
- **Hover effects**: Available and reserved lots show opacity changes on hover
- **Disabled state**: Unavailable and sold lots are dimmed and non-interactive

## 📱 Demo Page

Visit `/lot-map` to see a working demo with:
- Interactive controls to change lot status
- Real-time color updates
- Legend showing all color meanings
- Current status display for all lots

## 🐛 Troubleshooting

### Common Issues

1. **Lots not changing color**: Ensure your `lotAvailability` object has the correct lot numbers as strings
2. **Click not working**: Check that the lot status is either "available" or "reserved"
3. **Colors not updating**: Make sure you're passing a new object reference when updating state

### Debug Mode

Add console logging to see what's happening:

```jsx
const handleLotClickWithAvailability = (lotNumber) => {
  const availability = lotAvailability[lotNumber];
  console.log(`Lot ${lotNumber} status:`, availability);
  
  if (availability === 'available' || availability === 'reserved') {
    handleLotClick(lotNumber);
  } else {
    console.log(`Lot ${lotNumber} is ${availability || 'not available'}`);
  }
};
```

## 📚 Additional Resources

- [Demo Page](/lot-map) - See the system in action
- [Service Utility](/src/utils/lotAvailabilityService.js) - Backend integration helpers
- [Component Source](/src/components/Lotmap.jsx) - Full component implementation

---

This reactive coloring system provides a powerful way to visualize lot availability in real-time, making it easy for users to understand which lots are available for purchase at Villa Armonia.

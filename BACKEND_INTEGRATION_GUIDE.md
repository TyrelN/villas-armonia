# Backend Integration Guide for Villa Armonia Lot System

This guide explains how to integrate the enhanced SidePanel with your backend database and Cloudinary for image storage.

## 🏗️ **Architecture Overview**

```
Frontend (Next.js) ←→ API Routes ←→ Backend Database
                    ↓
                Cloudinary (Images)
```

## 📋 **Database Schema**

### Lots Table
```sql
CREATE TABLE lots (
  id VARCHAR(10) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(500),
  availability ENUM('available', 'unavailable', 'reserved', 'sold') DEFAULT 'available',
  price DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  size VARCHAR(50),
  location VARCHAR(255),
  latitude DECIMAL(10,8),
  longitude DECIMAL(11,8),
  features JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Purchases Table
```sql
CREATE TABLE purchases (
  id VARCHAR(50) PRIMARY KEY,
  lot_id VARCHAR(10) NOT NULL,
  customer_id VARCHAR(50),
  status ENUM('pending', 'processing', 'completed', 'failed') DEFAULT 'pending',
  total_amount DECIMAL(10,2) NOT NULL,
  payment_method VARCHAR(50),
  customer_info JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (lot_id) REFERENCES lots(id)
);
```

## 🔧 **Environment Variables**

Create a `.env.local` file:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Cloudinary Configuration
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=villa-armonia-lots

# Database Configuration
DATABASE_URL=your-database-connection-string

# WebSocket (for real-time updates)
NEXT_PUBLIC_WS_URL=ws://localhost:3001
```

## 🖼️ **Cloudinary Setup**

### 1. Create Cloudinary Account
- Sign up at [cloudinary.com](https://cloudinary.com)
- Get your cloud name, API key, and secret

### 2. Configure Upload Preset
1. Go to Settings → Upload
2. Create a new upload preset named `villa-armonia-lots`
3. Set folder to `villa-armonia/lots`
4. Configure transformations for automatic optimization

### 3. Image Naming Convention
```
villa-armonia/lots/lot-{lotId}.jpg
```

## 🚀 **Backend API Endpoints**

### 1. Get Lot by ID
```http
GET /api/lots/{id}
```

**Response:**
```json
{
  "id": "1",
  "title": "Premium Lot 1",
  "description": "Exclusive corner lot with panoramic mountain views...",
  "image": "https://res.cloudinary.com/your-cloud/image/upload/v1/lots/lot-1.jpg",
  "availability": "available",
  "price": 95000,
  "currency": "USD",
  "size": "650 sqm",
  "features": ["Panoramic mountain views", "Direct road access"],
  "location": "Villa Armonia, Costa Rica",
  "coordinates": {
    "lat": 9.9281,
    "lng": -84.0907
  }
}
```

### 2. Update Lot Availability
```http
PUT /api/lots/{id}
Content-Type: application/json

{
  "availability": "reserved"
}
```

### 3. Process Purchase
```http
POST /api/lots/{id}/purchase
Content-Type: application/json

{
  "customerInfo": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890"
  },
  "paymentMethod": "credit_card",
  "totalAmount": 95000
}
```

### 4. Get All Lots Availability
```http
GET /api/lots/availability
```

**Response:**
```json
{
  "1": "available",
  "2": "reserved",
  "3": "sold",
  "4": "unavailable"
}
```

## 🔄 **Real-time Updates with WebSocket**

### WebSocket Server (Node.js)
```javascript
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const data = JSON.parse(message);
    
    if (data.type === 'subscribe' && data.channel === 'lot-updates') {
      // Subscribe to lot updates
      ws.lotUpdates = true;
    }
  });
});

// Broadcast lot updates
function broadcastLotUpdate(lotData) {
  wss.clients.forEach((client) => {
    if (client.lotUpdates && client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify({
        type: 'lot-update',
        lot: lotData
      }));
    }
  });
}
```

## 📱 **Frontend Integration**

### Using the Lot Service
```javascript
import lotService from '@/utils/lotService';

// Fetch lot data
const lotData = await lotService.getLotById('1');

// Update availability
await lotService.updateLotAvailability('1', 'reserved');

// Process purchase
const purchaseResult = await lotService.purchaseLot('1', {
  customerInfo: {
    name: 'John Doe',
    email: 'john@example.com'
  },
  paymentMethod: 'credit_card',
  totalAmount: 95000
});

// Subscribe to real-time updates
const unsubscribe = lotService.subscribeToLotUpdates((lot) => {
  console.log('Lot updated:', lot);
  // Update your UI here
});
```

### Enhanced SidePanel Usage
```javascript
// The SidePanel automatically fetches data using the lotNumber prop
<SidePanel 
  lotNumber="1" 
  onClose={() => setSelectedLot(null)} 
/>
```

## 🗄️ **Database Integration Examples**

### PostgreSQL with Prisma
```javascript
// prisma/schema.prisma
model Lot {
  id          String   @id
  title       String
  description String?
  imageUrl    String?
  availability String  @default("available")
  price       Decimal
  currency    String   @default("USD")
  size        String?
  location    String?
  latitude    Decimal?
  longitude   Decimal?
  features    Json?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

// API Route
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const { id } = params;
  
  const lot = await prisma.lot.findUnique({
    where: { id }
  });
  
  return NextResponse.json(lot);
}
```

### MongoDB with Mongoose
```javascript
// models/Lot.js
const lotSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: String,
  imageUrl: String,
  availability: {
    type: String,
    enum: ['available', 'unavailable', 'reserved', 'sold'],
    default: 'available'
  },
  price: { type: Number, required: true },
  currency: { type: String, default: 'USD' },
  size: String,
  location: String,
  coordinates: {
    lat: Number,
    lng: Number
  },
  features: [String]
}, { timestamps: true });

// API Route
import Lot from '@/models/Lot';

export async function GET(request, { params }) {
  const { id } = params;
  
  const lot = await Lot.findOne({ id });
  
  return NextResponse.json(lot);
}
```

## 🔐 **Authentication & Security**

### JWT Authentication
```javascript
// middleware/auth.js
import { verify } from 'jsonwebtoken';

export function authMiddleware(handler) {
  return async (req, res) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    try {
      const decoded = verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  };
}
```

### Rate Limiting
```javascript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

## 🧪 **Testing**

### API Testing with Jest
```javascript
// __tests__/api/lots.test.js
import { createMocks } from 'node-mocks-http';
import { GET, PUT } from '@/app/api/lots/[id]/route';

describe('/api/lots/[id]', () => {
  test('GET returns lot data', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: { id: '1' }
    });

    await GET(req, { params: { id: '1' } });

    expect(res._getStatusCode()).toBe(200);
    const data = JSON.parse(res._getData());
    expect(data.id).toBe('1');
  });
});
```

## 🚀 **Deployment**

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production
```env
NEXT_PUBLIC_API_URL=https://your-domain.com/api
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
DATABASE_URL=your-production-database-url
JWT_SECRET=your-secure-jwt-secret
```

## 📊 **Monitoring & Analytics**

### Error Tracking
```javascript
// utils/errorTracking.js
import * as Sentry from '@sentry/nextjs';

export function trackError(error, context = {}) {
  Sentry.captureException(error, {
    extra: context
  });
}
```

### Performance Monitoring
```javascript
// utils/performance.js
export function trackApiPerformance(endpoint, duration) {
  // Send to your analytics service
  console.log(`API ${endpoint} took ${duration}ms`);
}
```

## 🔄 **Migration from Mock Data**

1. **Replace API endpoints** in `src/utils/lotService.js`
2. **Update environment variables** with your actual credentials
3. **Test each endpoint** with real data
4. **Deploy incrementally** starting with read operations
5. **Monitor performance** and adjust as needed

## 📞 **Support**

For questions or issues with the backend integration:
- Check the API documentation
- Review the error logs
- Test endpoints with Postman or similar tools
- Contact the development team

---

This integration provides a complete solution for managing lot data, images, and purchases with real-time updates and comprehensive error handling.

// Service for managing lot availability data
// This file shows how to integrate with your backend API

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

export class LotAvailabilityService {
  // Fetch all lot availability data from backend
  static async fetchLotAvailability() {
    try {
      const response = await fetch(`${API_BASE_URL}/lots/availability`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching lot availability:', error);
      throw error;
    }
  }

  // Fetch availability for a specific lot
  static async fetchLotAvailabilityById(lotNumber) {
    try {
      const response = await fetch(`${API_BASE_URL}/lots/${lotNumber}/availability`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching lot ${lotNumber} availability:`, error);
      throw error;
    }
  }

  // Update lot availability status
  static async updateLotAvailability(lotNumber, status) {
    try {
      const response = await fetch(`${API_BASE_URL}/lots/${lotNumber}/availability`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error updating lot ${lotNumber} availability:`, error);
      throw error;
    }
  }

  // Subscribe to real-time updates (WebSocket example)
  static subscribeToUpdates(callback) {
    // Example WebSocket implementation
    const ws = new WebSocket(`${API_BASE_URL.replace('http', 'ws')}/lots/updates`);
    
    ws.onopen = () => {
      console.log('Connected to lot availability updates');
    };
    
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        callback(data);
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };
    
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    
    ws.onclose = () => {
      console.log('Disconnected from lot availability updates');
    };
    
    return ws;
  }

  // Polling fallback for real-time updates
  static startPolling(callback, interval = 5000) {
    const poll = async () => {
      try {
        const data = await this.fetchLotAvailability();
        callback(data);
      } catch (error) {
        console.error('Polling error:', error);
      }
    };
    
    // Initial poll
    poll();
    
    // Set up interval
    const intervalId = setInterval(poll, interval);
    
    // Return cleanup function
    return () => clearInterval(intervalId);
  }
}

// Example usage with React hooks
export const useLotAvailability = () => {
  const [lotAvailability, setLotAvailability] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await LotAvailabilityService.fetchLotAvailability();
        setLotAvailability(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const updateLot = async (lotNumber, status) => {
    try {
      await LotAvailabilityService.updateLotAvailability(lotNumber, status);
      setLotAvailability(prev => ({
        ...prev,
        [lotNumber]: status
      }));
    } catch (err) {
      setError(err.message);
    }
  };

  return { lotAvailability, loading, error, updateLot };
};

// Example backend API structure (for reference)
/*
GET /api/lots/availability
Response: {
  "1": "available",
  "2": "unavailable",
  "3": "reserved",
  "4": "sold",
  // ... all 58 lots
}

PUT /api/lots/{lotNumber}/availability
Body: { "status": "available" | "unavailable" | "reserved" | "sold" }
Response: { "success": true, "lotNumber": "1", "status": "available" }

WebSocket: ws://localhost:3001/api/lots/updates
Messages: {
  "type": "availability_update",
  "lotNumber": "1",
  "status": "unavailable",
  "timestamp": "2024-01-01T12:00:00Z"
}
*/

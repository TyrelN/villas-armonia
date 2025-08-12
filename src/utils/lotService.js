/**
 * Lot Service - Backend Integration
 * 
 * This service provides methods to interact with your backend API
 * for lot data, images, and purchase processing.
 * 
 * Replace the mock implementations with your actual backend calls.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

class LotService {
  /**
   * Fetch lot data by ID
   * @param {string} lotId - The lot ID
   * @returns {Promise<Object>} Lot data
   */
  async getLotById(lotId) {
    try {
      const response = await fetch(`${API_BASE_URL}/lots/${lotId}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch lot ${lotId}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching lot data:', error);
      throw error;
    }
  }

  /**
   * Fetch all lots with availability data
   * @returns {Promise<Object>} Object with lot IDs as keys and availability as values
   */
  async getAllLotsAvailability() {
    try {
      const response = await fetch(`${API_BASE_URL}/lots/availability`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch lot availability');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching lot availability:', error);
      throw error;
    }
  }

  /**
   * Update lot availability
   * @param {string} lotId - The lot ID
   * @param {string} availability - New availability status
   * @returns {Promise<Object>} Updated lot data
   */
  async updateLotAvailability(lotId, availability) {
    try {
      const response = await fetch(`${API_BASE_URL}/lots/${lotId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ availability }),
      });
      
      if (!response.ok) {
        throw new Error(`Failed to update lot ${lotId} availability`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error updating lot availability:', error);
      throw error;
    }
  }

  /**
   * Process lot purchase
   * @param {string} lotId - The lot ID
   * @param {Object} purchaseData - Purchase information
   * @returns {Promise<Object>} Purchase result
   */
  async purchaseLot(lotId, purchaseData) {
    try {
      const response = await fetch(`${API_BASE_URL}/lots/${lotId}/purchase`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(purchaseData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Purchase failed');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error processing purchase:', error);
      throw error;
    }
  }

  /**
   * Check purchase status
   * @param {string} lotId - The lot ID
   * @param {string} purchaseId - The purchase ID
   * @returns {Promise<Object>} Purchase status
   */
  async getPurchaseStatus(lotId, purchaseId) {
    try {
      const response = await fetch(`${API_BASE_URL}/lots/${lotId}/purchase?purchaseId=${purchaseId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch purchase status');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching purchase status:', error);
      throw error;
    }
  }

  /**
   * Upload lot image to Cloudinary
   * @param {File} imageFile - The image file to upload
   * @param {string} lotId - The lot ID for naming
   * @returns {Promise<string>} Cloudinary URL
   */
  async uploadLotImage(imageFile, lotId) {
    try {
      // Create form data
      const formData = new FormData();
      formData.append('file', imageFile);
      formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
      formData.append('public_id', `lots/lot-${lotId}`);
      formData.append('folder', 'villa-armonia/lots');

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  }

  /**
   * Get optimized image URL from Cloudinary
   * @param {string} imageUrl - Original Cloudinary URL
   * @param {Object} options - Image optimization options
   * @returns {string} Optimized image URL
   */
  getOptimizedImageUrl(imageUrl, options = {}) {
    if (!imageUrl || !imageUrl.includes('cloudinary.com')) {
      return imageUrl;
    }

    const {
      width = 400,
      height = 300,
      quality = 'auto',
      format = 'auto',
      crop = 'fill'
    } = options;

    // Transform Cloudinary URL
    const baseUrl = imageUrl.split('/upload/')[0] + '/upload/';
    const imagePath = imageUrl.split('/upload/')[1];
    
    const transformations = `w_${width},h_${height},q_${quality},f_${format},c_${crop}`;
    
    return `${baseUrl}${transformations}/${imagePath}`;
  }

  /**
   * Search lots by criteria
   * @param {Object} criteria - Search criteria
   * @returns {Promise<Array>} Array of matching lots
   */
  async searchLots(criteria = {}) {
    try {
      const queryParams = new URLSearchParams();
      
      Object.entries(criteria).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          queryParams.append(key, value);
        }
      });

      const response = await fetch(`${API_BASE_URL}/lots/search?${queryParams}`);
      
      if (!response.ok) {
        throw new Error('Failed to search lots');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error searching lots:', error);
      throw error;
    }
  }

  /**
   * Get lot statistics
   * @returns {Promise<Object>} Lot statistics
   */
  async getLotStatistics() {
    try {
      const response = await fetch(`${API_BASE_URL}/lots/statistics`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch lot statistics');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching lot statistics:', error);
      throw error;
    }
  }

  /**
   * Subscribe to lot availability updates (WebSocket)
   * @param {Function} callback - Callback function for updates
   * @returns {Function} Unsubscribe function
   */
  subscribeToLotUpdates(callback) {
    // WebSocket implementation for real-time updates
    const ws = new WebSocket(process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:3001');
    
    ws.onopen = () => {
      console.log('Connected to lot updates');
      ws.send(JSON.stringify({ type: 'subscribe', channel: 'lot-updates' }));
    };
    
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'lot-update') {
          callback(data.lot);
        }
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };
    
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    
    // Return unsubscribe function
    return () => {
      ws.close();
    };
  }
}

// Create singleton instance
const lotService = new LotService();

export default lotService;

// Export individual methods for convenience
export const {
  getLotById,
  getAllLotsAvailability,
  updateLotAvailability,
  purchaseLot,
  getPurchaseStatus,
  uploadLotImage,
  getOptimizedImageUrl,
  searchLots,
  getLotStatistics,
  subscribeToLotUpdates
} = lotService;

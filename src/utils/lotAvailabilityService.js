// Service for managing lot availability data

/**
 * Fetch all lot availability data from the database
 * @returns {Promise<Object>} Object with lot numbers as keys and status as values
 */
export async function fetchLotAvailability() {
  try {
    const response = await fetch('/api/lots');
    
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
 * Update a specific lot's availability
 * @param {string} lotNumber - The lot number to update
 * @param {string} status - The new status ('available', 'reserved', 'sold', 'unavailable')
 * @returns {Promise<Object>} Updated lot data
 */
export async function updateLotAvailability(lotNumber, status) {
  try {
    const response = await fetch(`/api/lots/${lotNumber}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ availability: status }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to update lot availability');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error updating lot availability:', error);
    throw error;
  }
}

/**
 * Get lot details by lot number
 * @param {string} lotNumber - The lot number to fetch
 * @returns {Promise<Object>} Lot details
 */
export async function getLotDetails(lotNumber) {
  try {
    const response = await fetch(`/api/lots/${lotNumber}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch lot details');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching lot details:', error);
    throw error;
  }
}

/**
 * Convert Prisma lot status to LotMap status
 * @param {string} prismaStatus - Status from Prisma database
 * @returns {string} Status for LotMap component
 */
export function convertPrismaStatusToLotMapStatus(prismaStatus) {
  switch (prismaStatus) {
    case 'AVAILABLE':
      return 'available';
    case 'RESERVED':
      return 'reserved';
    case 'SOLD':
      return 'sold';
    case 'PENDING_APPROVAL':
      return 'pending_approval'; // Show as pending approval with blue color
    default:
      return 'unavailable';
  }
}

/**
 * Convert LotMap status to Prisma status
 * @param {string} lotMapStatus - Status from LotMap component
 * @returns {string} Status for Prisma database
 */
export function convertLotMapStatusToPrismaStatus(lotMapStatus) {
  switch (lotMapStatus) {
    case 'available':
      return 'AVAILABLE';
    case 'reserved':
      return 'RESERVED';
    case 'sold':
      return 'SOLD';
    case 'unavailable':
      return 'AVAILABLE'; // Default to available
    default:
      return 'AVAILABLE';
  }
}

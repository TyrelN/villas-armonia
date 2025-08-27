// Utility function for managing lot status updates

/**
 * Update lot status based on pending requests
 * @param {Object} tx - Prisma transaction object
 * @param {string} lotId - The lot ID to check
 * @returns {Promise<boolean>} - Whether the lot status was updated
 */
export async function updateLotStatusIfNeeded(tx, lotId) {
  // Count pending requests for this lot
  const pendingRequestsCount = await tx.lotRequest.count({
    where: {
      lotId: lotId,
      status: 'PENDING'
    }
  });

  // If no pending requests remain, set lot back to AVAILABLE
  if (pendingRequestsCount === 0) {
    const currentLot = await tx.lot.findUnique({
      where: { id: lotId },
      select: { status: true }
    });

    // Only update if the lot is currently in PENDING_APPROVAL status
    if (currentLot && currentLot.status === 'PENDING_APPROVAL') {
      await tx.lot.update({
        where: { id: lotId },
        data: {
          status: 'AVAILABLE',
          updatedAt: new Date()
        }
      });
      return true; // Status was updated
    }
  }

  return false; // Status was not updated
}

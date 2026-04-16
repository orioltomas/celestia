import type { Id } from '@/core/types/id'
import type { ShipType } from '@/app/ship-type'

export interface CalculateTrip {
  destinationId: Id
  shipType: ShipType
}

import type { Destination } from '@/features/destination/destination'

import type { ShipType } from '@/app/ship-type'

export interface Trip {
  destination: Destination
  shipType: ShipType
  travelTime: number
  averageSpeed: number
}

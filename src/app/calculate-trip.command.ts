import type { CalculateTrip } from './calculate-trip'
import type { Command } from './command'
import type { Trip } from '@/app/trip'

export class CalculateTripCommand implements Command<CalculateTrip, Trip> {
    async execute(calculateTrip: CalculateTrip): Promise<Trip> {
      const response = await fetch('/api/calculate-trip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(calculateTrip),
      })

      if (!response.ok) {
        throw new Error('Failed to calculate trip')
      }

      return (await response.json()) as Trip
    }
}

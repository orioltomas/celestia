import type { CalculateTrip } from './calculate-trip'
import type { Trip } from '@/features/trip/trip'
import type { Command } from '@/core/use-cases/command'

export class CalculateTripCommand implements Command<CalculateTrip, Trip> {
    async handle(calculateTrip: CalculateTrip): Promise<Trip> {
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

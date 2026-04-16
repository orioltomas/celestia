import type { CalculateTrip } from '../domain/calculate-trip'
import type { Trip } from '@/features/trip/domain/trip'
import type { Command } from '@/core/use-cases/command'
import type { TripRepository } from '@/features/trip/domain/trip.repository'

export class CalculateTripCommand implements Command<CalculateTrip, Trip> {
  constructor(private readonly tripRepository: TripRepository) {}

  async handle(calculateTrip: CalculateTrip): Promise<Trip> {
    return await this.tripRepository.calculateTrip(calculateTrip)
  }
}

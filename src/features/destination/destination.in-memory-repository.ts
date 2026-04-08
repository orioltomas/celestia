import type { DestinationRepository } from '@/features/destination/destination.repository'
import type { Destination } from '@/features/destination/destination'
import type { CreateDestination } from '@/features/destination/destination-create/create-destination'
import { DestinationMother } from '@/features/destination/destination.mother'

export class DestinationInMemoryRepository implements DestinationRepository {
  data = [DestinationMother.europe()]
  async findAll(): Promise<Destination[]> {
    return this.data
  }

  async create(createDestination: CreateDestination): Promise<void> {
    this.data.push({ ...createDestination, id: (Math.random() * 1000).toString() })
  }
}
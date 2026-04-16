import type { DestinationRepository } from '@/features/destination/domain/destination.repository'
import type { Destination } from '@/features/destination/domain/destination'
import type { CreateDestination } from '@/features/destination/destination-create/domain/create-destination'
import { DestinationMother } from '@/features/destination/mothers/destination.mother'

export class DestinationInMemoryRepository implements DestinationRepository {
  data = [DestinationMother.europe()]
  async findAll(): Promise<Destination[]> {
    return this.data
  }

  async create(createDestination: CreateDestination): Promise<void> {
    this.data.push({ ...createDestination, id: (Math.random() * 1000).toString() })
  }
}
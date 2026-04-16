import type { DestinationRepository } from '@/features/destination/domain/destination.repository'
import type { Destination } from '@/features/destination/domain/destination'
import type { CreateDestination } from '@/features/destination/destination-create/domain/create-destination'
import type { HttpClient } from '@/core/http-client/http-client'

export class DestinationApiRepository implements DestinationRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async findAll(): Promise<Destination[]> {
    return this.httpClient.get<Destination[]>('destinations')
  }

  async create(createDestination: CreateDestination): Promise<void> {
    await this.httpClient.post<CreateDestination>('destinations', createDestination)
  }
}
import type { CreateDestination } from "../domain/create-destination"
import type { Command } from '@/core/use-cases/command'
import type { DestinationRepository } from '@/features/destination/domain/destination.repository'

export class CreateDestinationCommand implements Command<CreateDestination> {
    constructor(private readonly destinationRepository: DestinationRepository) {
    }

    async handle(createDestination: CreateDestination): Promise<void> {
      this.destinationRepository.create(createDestination)
    }
}

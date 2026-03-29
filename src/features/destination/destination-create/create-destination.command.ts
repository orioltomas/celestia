import type { CreateDestination } from "./create-destination"
import type { Command } from '@/core/use-cases/command'

export class CreateDestinationCommand implements Command<CreateDestination> {
    async handle(createDestination: CreateDestination): Promise<void> {
      const response = await fetch('/api/destinations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(createDestination),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to add destination')
      }
    }
}

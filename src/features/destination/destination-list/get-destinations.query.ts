import type { Destination } from "../destination";
import type { Query } from '@/core/use-cases/query'


export class GetDestinationsQuery implements Query<Destination[]> {
    async handle(): Promise<Destination[]> {
        const response = await fetch('/api/destinations')
        if (!response.ok) {
          throw new Error('Failed to fetch destinations')
        }
        const data = await response.json()
        console.log('data', data)
        return data;
    }
}
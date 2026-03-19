import type { Destination } from "./destination";
import type { Query } from "./query";

export class GetDestinationsQuery implements Query<Destination[]> {
    async execute(): Promise<Destination[]> {
        const response = await fetch('/api/destinations')
        if (!response.ok) {
          throw new Error('Failed to fetch destinations')
        }
        const data = await response.json()
        console.log('data', data)
        return data;
    }
}
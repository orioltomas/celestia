import { UseCaseService } from '@/app/use-case.service'
import { CalculateTripCommand } from '@/app/calculate-trip.command'
import { CreateDestinationCommand } from '@/app/create-destination.command'
import { GetDestinationsQuery } from '@/app/get-destinations.query'

export const createDestinationCommand = new CreateDestinationCommand()
export const getDestinationsQuery = new GetDestinationsQuery()
export const calculateTripCommand = new CalculateTripCommand()

export const useCaseService = new UseCaseService()
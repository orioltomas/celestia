import { UseCaseService } from '@/core/use-cases/use-case-service'
import { CalculateTripCommand } from '@/features/trip/calculate-trip.command'
import { CreateDestinationCommand } from '@/features/destination/destination-create/create-destination.command'
import { GetDestinationsQuery } from '@/features/destination/destination-list/get-destinations.query'
import { LoggerMiddleware } from '@/core/middlewares/logger.middleware'

export const createDestinationCommand = new CreateDestinationCommand()
export const getDestinationsQuery = new GetDestinationsQuery()
export const calculateTripCommand = new CalculateTripCommand()

export const useCaseService = new UseCaseService([new LoggerMiddleware()])
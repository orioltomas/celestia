import { UseCaseService } from '@/core/use-cases/use-case-service'
import { CalculateTripCommand } from '@/features/trip/application/calculate-trip.command'
import { CreateDestinationCommand } from '@/features/destination/destination-create/application/create-destination.command'
import { GetDestinationsQuery } from '@/features/destination/destination-list/application/get-destinations.query'
import { LoggerMiddleware } from '@/core/use-cases/middlewares/logger.middleware'
import { EmptyMiddleware } from '@/core/use-cases/middlewares/empty.middleware'
import { ErrorMiddleware } from '@/core/use-cases/middlewares/error.middleware'
import { EventEmitter } from '@/core/event-emitter/event-emitter'
import { DestinationApiRepository } from '@/features/destination/infrastructure/destination.api-repository'
import { TripApiRepository } from '@/features/trip/infrastructure/trip.api-repository'
import { HttpClient } from '@/core/http-client/http-client'

export const httpClient = new HttpClient(process.env['NEXT_PUBLIC_BASE_API_URL']!)

export const destinationApiRepository = new DestinationApiRepository(httpClient)
export const createDestinationCommand = new CreateDestinationCommand(destinationApiRepository)
export const getDestinationsQuery = new GetDestinationsQuery(destinationApiRepository)

export const tripApiRepository = new TripApiRepository(httpClient)
export const calculateTripCommand = new CalculateTripCommand(tripApiRepository)
export const eventEmitter = new EventEmitter()

export const useCaseService = new UseCaseService([new LoggerMiddleware(), new ErrorMiddleware(eventEmitter), new EmptyMiddleware()])
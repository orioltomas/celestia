import { describe, expect, it } from 'vitest'
import { GetDestinationsQuery } from '@/features/destination/destination-list/application/get-destinations.query'
import type { DestinationRepository } from '@/features/destination/domain/destination.repository'
import { DestinationMother } from '@/features/destination/mothers/destination.mother'
import { instance, mock, when } from '@typestrong/ts-mockito'

describe('GetDestinationQuery', () => {
  it('should get destinations', async () => {
    const destinationRepository = mock<DestinationRepository>()
    when(destinationRepository.findAll()).thenResolve([DestinationMother.europe()])
    const getDestinationsQuery = new GetDestinationsQuery(instance(destinationRepository))

    const result = await getDestinationsQuery.handle()

    expect(result).toEqual([DestinationMother.europe()])
  })
})
import type { Middleware } from '@/core/middlewares/middleware'
import type { UseCase } from '@/core/use-cases/use-case'


export class LoggerMiddleware implements Middleware {
  intercept(params:unknown, useCase:UseCase<unknown, unknown>):Promise<unknown> {
    console.log('Logging use case:', useCase.constructor.name)
    console.log('Logging params:', params)
    return useCase.handle(params)
  }
}
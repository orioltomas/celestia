import type { Middleware } from '@/core/middlewares/middleware'
import type { UseCase } from '@/core/use-cases/use-case'


export class LoggerMiddleware implements Middleware {
  intercept(params:unknown, useCase:UseCase<unknown, unknown>):Promise<unknown> {
    console.error('Logging use case:', useCase.constructor.name)
    console.error('Logging params:', params)
    return useCase.handle(params)
  }
}
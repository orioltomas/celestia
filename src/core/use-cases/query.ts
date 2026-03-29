import type { UseCase } from "./use-case"

export type Query<Out, In = void> = UseCase<In, Out>

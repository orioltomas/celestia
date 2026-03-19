import type { UseCase } from "./use-case"

export type Command<In, Out = void> = UseCase<In, Out>

import { CounterSchema } from "entities/Counter/model/types/counterSchema";
import { UserSchema } from "entities/User/model/types/user";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema
}
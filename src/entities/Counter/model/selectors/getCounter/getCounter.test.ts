import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { getCounter } from "./getCounter";

type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

describe("getCounter", () => {
    test("getCounter return object with value: 10", () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 }
        }
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
    })
})
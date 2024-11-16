// const Summa = require("./Summa")
import { Summa } from "./Summa"


describe("summa", () => {
    test("test", () => {
        expect(Summa(1, 4)).toBe(3)
    })
})
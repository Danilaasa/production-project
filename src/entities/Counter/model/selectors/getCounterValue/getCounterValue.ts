import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "entities/Counter/model/selectors/getCounter/getCounter";
import { CounterSchema } from "entities/Counter/model/types/counterSchema";

export const getCounterValue = createSelector(getCounter, (counter:CounterSchema) => counter.value)
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "entities/Counter/model/slice/counterSlice";
import { getCounterValue } from "entities/Counter/model/selectors/getCounterValue/getCounterValue";


export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)

    const OnIncrement = () => {
        dispatch(increment())
    }

    const OnDecrement = () => {
        dispatch(decrement())
    }


    return(
        <>
            <h1>{counterValue}</h1>
            <button onClick={OnIncrement} >increment</button>
            <button onClick={OnDecrement} >decrement</button>
        </>
    )
}
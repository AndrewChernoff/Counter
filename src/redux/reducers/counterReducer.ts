
type CounterType = {
    maxValue: number
    minValue: number
    counterValue: number
}

type IncType = ReturnType<typeof incrementAC>
type ResType = ReturnType<typeof resetCounterValueAC>
type SetMaxType = ReturnType<typeof setMaxValueAC>
type SetMinType = ReturnType<typeof setMinValueAC>
type SetCounterValueType = ReturnType<typeof setCounterValueAC>

type ActionType =  IncType | ResType | SetMaxType | SetMinType | SetCounterValueType

const initialState: CounterType = {
    maxValue: 5,
    minValue: 0,
    counterValue: 0
}

const counterReducer = (state=initialState, action: ActionType): CounterType => {
    switch (action.type) {
        case 'INC':
            return {...state, counterValue: action.payload}
        case 'RES':
            return {...state, counterValue: action.payload}
        case 'SET_MAX':
            return {...state, maxValue: action.payload}
        case 'SET_MIN':
            return {...state, minValue: action.payload}
        case 'SET_COUNTER_VALUE':
            return {...state, counterValue: action.payload}
        default:
            return state;
      }
}


export const setMaxValueAC = (payload: number) => ({type: 'SET_MAX', payload}) as const
export const setMinValueAC = (payload: number) => ({type: 'SET_MIN', payload}) as const
export const incrementAC = (payload: number) =>({ type: 'INC', payload }) as const
export const resetCounterValueAC = (payload: number) => ({type:'RES', payload}) as const
export const setCounterValueAC = (payload: number) => ({type:'SET_COUNTER_VALUE', payload}) as const

export default counterReducer
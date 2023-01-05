import s from '../App.module.css';

type CounterProps = {
    value: number
    maxValue: number
}

const Counter = ({value, maxValue} : CounterProps) => {
 
    const isNumberReached = value === maxValue ? 'Max number is reached' : null

 return <div className={s.value}>
        <div className={s.valueNumber}>{value}</div>
        <div className={s.reached}>{isNumberReached}</div>
    </div>
}

export default Counter;
import React, { ChangeEvent, useState } from 'react';
import s from'./App.module.css';
import Counter from './components/Counter';
import Button from './components/Button';
import Settings from './components/Settings/Settings';
import { useSelector } from 'react-redux';
import { AppStoreType } from './redux/store';
import { useDispatch } from 'react-redux';
import { incrementAC, resetCounterValueAC, setMaxValueAC, setMinValueAC } from './redux/reducers/counterReducer';

function App() {

  const [isSet, setIsSet] = useState<boolean>(false);
  const dispatch = useDispatch()
  const maxValue = useSelector<AppStoreType, number>(state => state.counter.maxValue)
  let minValue = useSelector<AppStoreType, number>(state => state.counter.minValue)

  let counterValue = useSelector<AppStoreType, number>(state => state.counter.counterValue)  

   const onIncrement = () => {
    if (minValue < maxValue) {
    let newValue: number = counterValue+1
    dispatch(incrementAC(newValue))
    } 
  } 
   
   const onReset = () => dispatch(resetCounterValueAC())
   const onSetClick = () => setIsSet(!isSet);

   const onSetMaxValue = (e: ChangeEvent<HTMLInputElement>) => dispatch(setMaxValueAC(Number(e.currentTarget.value)))
   const onSetMinValue = (e: ChangeEvent<HTMLInputElement>) => dispatch(setMinValueAC(Number(e.currentTarget.value)))

   const setValues = (max: number, min: number) => {
      dispatch(setMaxValueAC(max))
      dispatch(setMinValueAC(min))
   }   
   
  return (
    <div className={s.counter}>
      {isSet ? <Settings maxValue={maxValue} minValue={minValue}
      setValues={setValues}
      setMaxValue={onSetMaxValue} setMinValue={onSetMinValue} onSetClick={onSetClick}/>
      : <>
      <Counter value={counterValue} maxValue={maxValue}/>
      <div className={s.buttons}>
        <Button title={'inc'} callback={onIncrement} isDisabled={counterValue === maxValue ? true : false}/>
        <Button title={'reset'} callback={onReset} isDisabled={counterValue === 0 ? true : false}/>
        <Button title={'set'} callback={onSetClick} />
      </div>
      </>
      }
    </div>
  );
}

export default App;

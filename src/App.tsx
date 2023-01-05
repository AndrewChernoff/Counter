import React, { useState } from 'react';
import s from'./App.module.css';
import Counter from './components/Counter';
import Button from './components/Button';
import Settings from './components/Settings/Settings';

function App() {

  const [isSet, setIsSet] = useState<boolean>(false);
  let [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem('maxSettings')) || 5);
  let [minValue, setMinValue] = useState<number>(Number(localStorage.getItem('minSettings')) || 0);
  //let [counterValue, setCounterValue] = useState<number>(0);

   const onIncrement = () => {
    if (minValue < maxValue) {
    setMinValue(minValue + 1);
    } 
  } 
   
   const onReset = () => setMinValue(Number(localStorage.getItem('minSettings')));
   const onSetClick = () => setIsSet(!isSet);

   const onSetMaxValue = (e: any) => setMaxValue(Number(e.currentTarget.value));
   const onSetMinValue = (e: any) => setMinValue(Number(e.currentTarget.value));

   const setValues = (max: number, min: number) => {
      setMaxValue(max)
      setMinValue(min)
   }

   console.log(maxValue + ' ' + minValue)
   
   
  return (
    <div className={s.counter}>
      {isSet ? <Settings maxValue={maxValue} minValue={minValue}
      setValues={setValues}
      setMaxValue={onSetMaxValue} setMinValue={onSetMinValue} onSetClick={onSetClick}/> 
      : <>
      <Counter value={minValue} maxValue={maxValue}/>
      <div className={s.buttons}>
        <Button title={'inc'} callback={onIncrement} isDisabled={minValue === maxValue ? true : false}/>
        <Button title={'reset'} callback={onReset} isDisabled={minValue === 0 ? true : false}/>
        <Button title={'set'} callback={onSetClick} />
      </div>
      </>
      }
      
    </div>
  );
}

export default App;

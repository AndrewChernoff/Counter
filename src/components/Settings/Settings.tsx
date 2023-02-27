import { ChangeEvent, useEffect, useState } from 'react';
import s from './Settings.module.css';
import Button from '../Button';
import { useSelector } from 'react-redux';
import { AppStoreType } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { setCounterValueAC, setMaxValueAC, setMinValueAC } from '../../redux/reducers/counterReducer';

type SettingsProps = {
    onSetClick: () => void
    setMaxValue: (e: ChangeEvent<HTMLInputElement>) =>  void
    setMinValue: (e: ChangeEvent<HTMLInputElement>) =>  void
    setValues: (max: number, min: number) => void
    maxValue: number
    minValue: number
}

const Settings = ({onSetClick, setValues} : SettingsProps) => {
    const dispatch = useDispatch()
    const max = useSelector<AppStoreType, number>(state => state.counter.maxValue)
    const min = useSelector<AppStoreType, number>(state => state.counter.minValue)
    
    const onMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(Number(e.currentTarget.value)))
    }

    const onMinChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueAC(Number(e.currentTarget.value)))

    }

    const isDisabled = () => {
        if (max < 0 || min < 0 || max < min || max === min) {
            return true
        } else {
            return false
        }
    }

    const isErrorForMin = min < 0 || max < min || max === min ? s.errorInput : s.input
    const isErrorForMax = max < 0 || max < min || max === min ? s.errorInput : s.input

    return <div className={s.settings}>
        <label>Max value </label>
         <input className={isErrorForMax} value={max} onChange={onMaxChange} type={'number'} />
        <br></br>        
        <label>Min value </label>
         <input className={isErrorForMin} value={min} onChange={onMinChange} type={'number'} />
        <div className={s.settingsBtn}>
            
        <Button title={'set'} isDisabled={isDisabled()} callback={() => {
            setValues(max, min)
            dispatch(setCounterValueAC(min))
            onSetClick()
        }} />
        </div>
    </div>
}

export default Settings;
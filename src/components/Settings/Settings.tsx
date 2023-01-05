import { useEffect, useState } from 'react';
import s from './Settings.module.css';
import Button from '../Button';

type SettingsProps = {
    onSetClick: () => void
    setMaxValue: (e: any) =>  void
    setMinValue: (e: any) =>  void
    setValues: (max: number, min: number) => void
    maxValue: number
    minValue: number
}

const Settings = ({onSetClick, setValues} : SettingsProps) => {

    let [max, setMax] = useState<number>(Number(localStorage.getItem('maxSettings')) || 5);
    let [min, setMin] = useState<number>(Number(localStorage.getItem('minSettings')) || 0);
    const [error, setError] = useState<boolean>(false); ///make button disabled

    useEffect(() => {
        let maxValue = localStorage.getItem('maxSettings'); 
        let minValue = localStorage.getItem('minSettings');

        if (maxValue) {
            setMax(JSON.parse(maxValue))
        }

        if (minValue) {
            setMin(JSON.parse(minValue))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('maxSettings', JSON.stringify(max));
        localStorage.setItem('minSettings', JSON.stringify(min));
    }, [max, min])

    
    const onMaxChange = (e: any) => {
        setMax(Number(e.currentTarget.value))
        localStorage.setItem('maxSettings', JSON.stringify(max));
    }

    const onMinChange = (e: any) => {
        setMin(Number(e.currentTarget.value))
        localStorage.setItem('minSettings', JSON.stringify(min));
    }

    
    let disabled = max < 0 || min < 0 || max < min || max === min 

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
            onSetClick()
        }} />
        </div>
    </div>
}

export default Settings;
import { AppStoreType } from "./redux/store"

export const loadState = () => {
    try {
        const serializeState = localStorage.getItem('state')
        if (serializeState === null) {
            return undefined
        }
        return JSON.parse(serializeState)
    } catch (err){
        return undefined
    }
}

export const saveState = (state:AppStoreType) => {
    try {
        const serializeState = JSON.stringify(state)
        localStorage.setItem('state', serializeState)
    } catch (err) {
        
    }
}
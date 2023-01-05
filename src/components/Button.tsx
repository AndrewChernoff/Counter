type ButtonType = {
    title: string
    callback: () => void
    isDisabled?: boolean
}

const Button = ({title, callback, isDisabled} : ButtonType) => {
    return <button onClick={callback} disabled={isDisabled} style={{background: `${!isDisabled? '#9393ce' : 'red' }`}}>{title}</button>
}

export default Button;
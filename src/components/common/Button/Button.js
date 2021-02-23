import './Button.scss'

function Button({onClick, value, className}) {
    return <button onClick={onClick} className={className}>{value ? value : ''}</button>
}

export default Button;
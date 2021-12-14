import s from './Dialog.module.css'

function Dialog(props) {
    return (
        <div className={s.dialog}>
            <h2>{props.user}</h2>
            <p>{props.mess}</p>
        </div>
    )
}

export default Dialog;
import s from './Messsages.module.css'
import Dialog from './dialog/Dialog'
function Messsages(props) {
    return (
        <div className={s.content}>
            <div className="dialogs">
                <Dialog user='Misha' mess='Hello' />
                <Dialog user='Daria' mess='Whate are you' />
                <Dialog user='Viktor' mess='Please give my phone' />
                <Dialog user='Anna' mess='Jone is stupid' />
            </div>
        </div>

    )
}

export default Messsages;
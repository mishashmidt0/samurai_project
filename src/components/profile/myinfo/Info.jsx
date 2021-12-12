
import s from './Info.module.css'

function Info() {
    return (
        <div className={s.profile}>
            <h2>Mikhail Shmidt</h2>
            <p>status</p>
            <hr />
            <div className={s.info}>
                <p>Languages: Russia</p>
            </div>
            <hr />
        </div>
    )
}



export default Info;
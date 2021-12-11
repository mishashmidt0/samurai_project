
import Nav from './Navigation';
import Photo from './Photo';
import Profile from './Profile';
import s from '../style/Conteiner.module.css'

function Conteiner() {
    return (
        <div className={s.conteiner}>
            <Nav />
            <Photo />
            <Profile />
        </div>
    )
}

export default Conteiner;
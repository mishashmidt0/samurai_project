
import Nav from '../navigation/Navigation';
import Photo from '../photo/Photo';
import Profile from '../profile/Profile';
import s from './Conteiner.module.css'

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
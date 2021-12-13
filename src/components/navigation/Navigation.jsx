import s from './Navigation.module.css'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className={s.nav}>
            <ul>
                <li><Link to='/profile'>My profile</Link></li>
                <li><Link to='/news'>News</Link></li>
                <li><Link to='/messages'>Messenger</Link></li>
                <li><Link to='/calls'>Calls</Link></li>
                <li><Link to='/friends'>Friends</Link></li>
                <li><Link to='/communities'>Communities</Link></li>
                <li><Link to='/photos'>Photos</Link></li>
                <li><Link to='/music'>Music</Link></li>
                <li><Link to='/videos'>Videos</Link></li>
                <li><Link to='/clips'>Clips</Link></li>
                <li><Link to='/setting'>Setting</Link></li>
                <hr />
                <li>Mini Apps</li>
                <li>Jobs</li>
                <hr />
                <li>Setting</li>
            </ul>
        </nav >
    )
}
export default Nav;
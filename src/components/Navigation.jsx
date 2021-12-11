import s from '../style/Navigation.module.css'

function Nav() {
    return (
        <nav className={s.nav}>
            <ul>
                <li>My profile</li>
                <li>News</li>
                <li>Messenger</li>
                <li>Calls</li>
                <li>Friends</li>
                <li>Communities</li>
                <li>Photos</li>
                <li>Music</li>
                <li>Videos</li>
                <li>Clips</li>
                <li>Setting</li>
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
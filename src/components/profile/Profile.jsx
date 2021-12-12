import s from './Profile.module.css'
import CreatePost from './Posts/CreatePosts'
import Post from './Posts/Post/Post'
import Info from './myinfo/Info'

function Profile() {
    return (
        <div className={s.content}>
            <Info />
            <CreatePost />
            <Post />
        </div>
    )
}

export default Profile;
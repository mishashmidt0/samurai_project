import s from './Profile.module.css'
import CreatePost from './Posts/CreatePosts'
import Post from './Posts/Post/Post'
import Info from './myinfo/Info'

function Profile() {
    return (
        <div className={s.content}>
            <Info status="I like a dog" />
            <CreatePost />
            <Post messages="Hello it's my first post" />
            <Post messages="How are you?" />
            <Post messages="I am play chess" />
        </div>
    )
}

export default Profile;
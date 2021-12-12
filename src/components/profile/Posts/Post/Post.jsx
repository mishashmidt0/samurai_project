
import s from './Post.module.css'

function Post() {
    return (
        <section className={s.post}>
            <article className={s.container}>
                <img src="https://vk.com/images/camera_200.png" alt="logo" width={30} height={30} />
                <p className={s.text}>Hello my name is Misha</p>
            </article>
        </section>
    )
}



export default Post;
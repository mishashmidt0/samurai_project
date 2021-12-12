
import s from './Post.module.css'

function Post(props) {
    return (
        <section className={s.post}>
            <article className={s.container}>
                <img src="https://vk.com/images/camera_200.png" alt="logo" width={30} height={30} />
                <p className={s.text}>{props.messages}</p>
            </article>
        </section>
    )
}



export default Post;
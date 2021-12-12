import s from './CreatePosts.module.css'

function CreatePost() {
    return (
        <section className={s.createPost}>
            <img src="https://vk.com/images/camera_200.png" alt="logo" width={30} height={30} />
            <textarea name="Posts" id="Posts" cols="30" rows="10" placeholder='  What`s new?'></textarea>
            <div>
                <button>Create</button>
                <button>Remove</button>
            </div>

        </section>
    )
}
export default CreatePost;
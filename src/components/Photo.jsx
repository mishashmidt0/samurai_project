import s from '../style/Photo.module.css'

function Photo() {
    return (
        <div className={s.photo}>
            <a href="https://vk.com/images/camera_200.png"> <img src="https://vk.com/images/camera_200.png" alt="my_photo" /></a>
            <button>Edit</button>
        </div>

    )
}

export default Photo;
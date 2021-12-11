import s from '../style/Profile.module.css'


function Profile() {
    return (
        <div className={s.content}>
            <div className={s.profile}>
                <h2>Mikhail Shmidt</h2>
                <p>status</p>
                <hr />
                <div className={s.info}>
                    <p>Languages: Russia</p>
                </div>
                <hr />
            </div>

            <section className={s.posts}>
                <article className={s.posts1}>
                    <p className={s.post}></p>
                </article>
                <article className={s.posts2}>
                    <p className={s.post}></p>
                </article>
            </section>

        </div>
    )
}

export default Profile;
import React from 'react';

import style from './Photo.module.css';

type photoType = {
    photo: string
}

function Photo(props: photoType) {
    return (
        <div className={style.photo}>
            <a href={props.photo}> <img src={props.photo} alt="my_photo" height={220}/></a>
            <button>Edit</button>
        </div>

    )
}

export default Photo;

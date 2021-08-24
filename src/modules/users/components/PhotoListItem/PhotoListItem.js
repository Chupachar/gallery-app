import React from 'react';
import s from './PhotoListItem.module.css'
import { useDispatch} from "react-redux";

function PhotoListItem({onDelete, item}) {

    // function deletePhotos() {
    //     dispatch(onDelete(item.id));
    // }

    function deletePhoto() {
        onDelete(item.id)
    }

    return (
        <>
            {
                <li className={s.list__item} key={item.id}>
                    <img src={`${item.urls.small}`}/>
                    <button onClick={deletePhoto} className={s.photo__delete}>delete photo</button>
                </li>
            }
        </>
    )
}

export default PhotoListItem;



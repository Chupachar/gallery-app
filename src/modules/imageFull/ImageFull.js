import React, {useEffect, useState} from 'react';
import {getFullSizePhoto} from "../../api";
import s from './ImageFull.module.css';
import { useHistory } from 'react-router-dom';

function ImageFull() {

    const history = useHistory();

    function onBackClick() {
        history.goBack();
    }

    const [photo, setPhoto] = useState([]);

    useEffect(() => {getFullSizePhoto().then(setPhoto)}, []);

    return (
        <>
            <button onClick={onBackClick} className={s.button}>
                <span>Back</span>
            </button>
            {
                photo ? (
                <ul>
                    {photo.map((item) =>
                    <li className={s.list__item} key={item.id}>
                        <img src={`${item.urls.regular}`} alt='img'/>
                    </li>)}
                        </ul>
                ) : (
                    <span>Loading...</span>
                )
            }
        </>
    )
}

export default ImageFull;
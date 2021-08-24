import React from 'react';
import s from './PhotoList.module.css';
import { useState, useEffect } from 'react';
import PhotoListItem from '../PhotoListItem/PhotoListItem';
import { getPhotos, deletePhotoItem } from '../../../../api';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { increment } from '../../../../store/actions/actions';
import  like  from './like.png';
import FormList from '../FormList/FormList';

function PhotoList({tableInfo, onDeleteItem, addNewData}) {

    const { likes } = useSelector(state => ({
        likes: state.likes,
    }));

    const dispatch = useDispatch();

    function handleInc() {
        dispatch(increment());
    }

    const [photos, setPhotos] = useState([]);

    function deletePhoto(id) {
        deletePhotoItem(id);
        const onDelete = photos.filter((item) => item.id !== id);
        setPhotos(onDelete);
    }

    const history = useHistory();

    function onBackClick() {
        history.goBack();
    }

    useEffect(() => {getPhotos().then(setPhotos)}, []);

    const [addForm, setAddForm] = useState(false);

    function add() {
        setAddForm(true);
    }

    function hide() {
        setAddForm(false);
    }


    return (
        <div>
            <button onClick={onBackClick} className={s.button}>
                <span>Back</span>
            </button>
            <ul>
                <div>
                    {addForm ? (
                        <FormList hide={hide} tableInfo={tableInfo} onDeleteItem={onDeleteItem} addNewData={addNewData}/>
                    ) : (
                        <button onClick={add} className={s.add__form__btn}>add Form</button>
                    )
                    }
                    <div className={s.like__count}>{likes}</div>
                    <img className={s.like} src={like} onClick={handleInc} alt="" />
                    <span className={s.like__info}>Like this gallery!</span>
                </div>
                {photos ? (
                 photos.map((item) => <PhotoListItem item={item} key={item.id} onDelete={deletePhoto} photos={photos}/>)
                    ) : (
                    <span>Loading...</span>
                    )
                }
            </ul>
        </div>
    )
}



export default PhotoList;


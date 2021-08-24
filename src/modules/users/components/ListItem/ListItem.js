import React from 'react';
import s from './ListItem.module.css';
import {Link} from 'react-router-dom';

function ListItem({tableInfo, onDeleteItem, item}) {

    function onDeleteClick() {
        onDeleteItem(item.id)
    }

    return (
        <>
            <tr>
                <th className={s.contacts__info}>
                    Name:
                <li className={s.contacts__infoItem}><Link className={s.contacts__name} to={`/ImageFull/` + item.id} >{tableInfo.name}</Link></li></th>
                <th className={s.contacts__info}>
                    Username:
                    <li className={s.contacts__infoItem}>{tableInfo.username}</li></th>
                <th className={s.contacts__info}>
                    Email:
                    <li className={s.contacts__infoItem}>{tableInfo.email}</li></th>
                <th>
                    <button className={s.contacts__btn} onClick={onDeleteClick}>Delete</button>
                </th>
            </tr>
        </>
    );
}


export default ListItem;
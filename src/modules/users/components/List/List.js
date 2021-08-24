import React from 'react';
import ListItem from './../ListItem/ListItem';
import s from './List.module.css';

function List({tableInfo, onDeleteItem}) {

    return (
        <>
            <table className={s.list}>
                <tbody>
                    <ul>
                        {tableInfo.map((item) => <ListItem key={item.id} item={item} tableInfo={item} onDeleteItem={onDeleteItem}/>)}
                    </ul>
                </tbody>
            </table>
        </>
    );
}

export default List;
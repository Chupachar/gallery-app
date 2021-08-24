import React from 'react';
import PhotoList from "./components/PhotoList/PhotoList";

function UsersModule({tableInfo, onDeleteItem, addNewData}) {
    return (
        <>
            <PhotoList tableInfo={tableInfo} onDeleteItem={onDeleteItem} addNewData={addNewData}/>
        </>
    )
}

export default UsersModule;

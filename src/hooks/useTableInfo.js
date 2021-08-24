import { useState, useEffect } from 'react';
import { getList, deleteList, createList } from '../api'

export default function useTableInfo() {

    const [tableInfo, setTableInfo] = useState([]);

      useEffect(() => {
        getList().then(setTableInfo);
  }, []);

    function onDeleteItem(id) {
      deleteList(id);
      const deleteItem = tableInfo.filter((item) => item.id !== id);
      setTableInfo(deleteItem)
    }

    function addNewData(newData) {
      const createNewData = ({...newData});
      createList(createNewData).then((data) => setTableInfo([...tableInfo, data]))
    }

    return { tableInfo, onDeleteItem, addNewData };

}



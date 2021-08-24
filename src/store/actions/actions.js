import { deleteList as deleteRemoteList } from '../../api';
import { createList as createAddList } from '../../api';


export const ACTION_CREATE_LIST = 'ACTION_CREATE_LIST';
export function createList(newData) {
    return { type: ACTION_CREATE_LIST, payload: newData };
}
export const ACTION_DELETE_LIST = 'ACTION_DELETE_LIST';
export function deleteList(id) {
    return { type: ACTION_DELETE_LIST, payload: id };
}

export const ACTION_INCREMENT = 'ACTION_INCREMENT';
export function increment() {
    return { type: ACTION_INCREMENT };
}
export const ACTION_DELETE = 'ACTION_DELETE';
export function deletePhoto(id) {
    return { type: ACTION_DELETE,  payload: id};
}

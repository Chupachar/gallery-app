const API_URL = 'https://api.unsplash.com/photos/?client_id=fXb8emiWV-vgtbJvgi7IBSSQZGJuEKLPiNlmYQ9Z2xU';
const LIST_URL = 'https://jsonplaceholder.typicode.com/users';


export function getList() {
    return fetch(LIST_URL).then(resp => resp.json())
}
export function createList(newData) {
    fetch(LIST_URL, {
        method: 'POST',
        body: JSON.stringify(newData),
        headers: {'Content-Type': 'application/json'},
    }).then((resp) => resp.json())
}
export function deleteList(id) {
    fetch(`${LIST_URL}/${id}`, {
        method: 'DELETE',
    }).then((resp) => resp.json())
}


export function getPhotos() {
    return fetch(API_URL)
        .then(resp => resp.json()
    );
}
export function getFullSizePhoto() {
    return fetch(API_URL)
        .then(resp => resp.json()
    );
}
export function deletePhotoItem(id) {
    return fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    }).then(resp => resp.json());
}
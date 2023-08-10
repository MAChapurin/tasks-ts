"use strict";
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
const getData = (url) => {
    return fetch(url).then(res => res.json());
};
getData(COMMENTS_URL)
    .then((data) => {
    return data.map(({ id, email }) => {
        return { id, email };
    });
}).then((pickedPropertyComments) => {
    pickedPropertyComments.forEach(({ id, email }) => console.log(`ID: ${id}, Email: ${email}`));
}).catch(console.log);
/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */ 

import { db } from '../../config/Database';

export const addItem =  (item) => {
    db.ref('/items').push({
        name: item
    });
}
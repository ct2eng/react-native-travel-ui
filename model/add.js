import { db } from '../config/db';

export const addItem =  (item) => {
    db.ref('/travelList/adam/list').push({
        location: item.location,
        temperature: item.temperature,
        title: item.title,
        description: item.description,
        rating: item.rating,
        reviews: item.reviews
    });
}
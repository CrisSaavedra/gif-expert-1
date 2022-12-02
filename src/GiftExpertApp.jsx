import { useState } from 'react';
import {AddCategory, GifGrid} from './components'


export const GiftExpertApp = () => {

    const [categories, setCategories] = useState([]);


    const addCategory = (category) => {
        if (validateCategory(category)) {
            setCategories([category,...categories ])
        } else {
            window.alert('categoria ya agregada');
        }

    }

    const validateCategory = (categoryName) => {
        if (categories.includes(categoryName)) return false;
        return true;
    };

    return (
        <>
            <div>
                <h1>GifExpertApp</h1>
            </div>
            {/* Inoput */}
            <AddCategory addCategory={addCategory} />

            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }




        </>
    )
}

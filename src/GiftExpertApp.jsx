import {useState} from 'react';
import {AddCategory, GifGrid} from "./components";

export const GiftExpertApp = () => {
/*cuando la informacion cambiara el html necesitamos un hook para mantener el estado*/
    const [categories, setCategories] = useState(['Cat']);

    const onAddCategory = (newCategory) => {
        if(categories.includes( newCategory)) return; //validar que solo exista un elemento
        //si la categoria ya existe no hará nada pero si no existe se insertará

        //categories.push('Mrriau')

        //agregar un elemento nuevo al useState
        setCategories([newCategory, ...categories])
        //setCategories(cat => [...cat, 'Ñam']);
    }

    return (
        <>
            <h1>GiftExpertApp</h1>

            <AddCategory
                //setCategories={setCategories}
                onNewCategory = {(value) => onAddCategory(value)}
            />

                {/*duplicar el elemento*/}
                {categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}/>
                    )
                )}

        </>
    )
}
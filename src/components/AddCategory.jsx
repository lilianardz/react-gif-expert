import {useState} from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return; /*si la condicion se cumple se puede escribir un return*/

        //setCategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim());
        setInputValue('') /*limpiar la caja de texto*/
    }

    return(
        /*los elementos siempre deben de tener un padre*/
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
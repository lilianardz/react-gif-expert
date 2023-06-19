
import {GifItem} from './GifItem';
import {useFetchGifs} from '../hooks/useFetchGifs.js';

/*cuando react detecta un cambio en el componente lo vuelve a ejecutar para redibujarlo*/


export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category); //custom hook
    //no colocar console.log en functional component porque se vuelve a ejecutar varias veces

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>) //if corto (and logico)
            }
            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}//esparciendo las propiedades que se encuentran en el arreglo de image para asi recibir los parametros de la imagen como props

                        />

                    ))
                }
            </div>

        </>
    )
}
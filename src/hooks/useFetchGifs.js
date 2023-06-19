import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs.js";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState([true]);

    /*no se debe de colocar una funcion o la ejecucion de una funcion directamente en un functional component*/

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }
    /*el useEffect se utiliza para disparar efectos secundarios*/
    useEffect(() =>{
        /*
        getGifs(category)
            .then(newImages => setImages(newImages));*/
            getImages();
        }, []);

    /*si retornamos algo, un hook no es mas que una funcion que regresa algo*/
    return{
        images,
        isLoading
    }
}
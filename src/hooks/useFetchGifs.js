import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const copyImages = async () => {
      const imgs = await getGift(category); // await por que getgift devuelve una promesa!!
      setImages(imgs);
        setIsLoading(false);
    }
  
    useEffect(() => {
      copyImages();
  
    }, [])

    return{
        images,
        isLoading
    }
}

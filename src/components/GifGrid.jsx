
//import { useEffect, useState } from "react";
//import { getGift } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs";
import { CardDisplay } from "./CardDisplay";


export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>
      {
        isLoading && (<h2>Cargando...</h2>) //if cortito
      }
      <ol>
        <div className='card-grid'>
          {
            images.map((image) => ( //es lo mismo que lo de arriba
              //(<li key={id}> {title} </li>)
              <CardDisplay key={image.id} { ...image} />
            ))
          }
        </div>
      </ol>

       {/* {
          images.map(img => {
            const { id, title } = img;
            console.log(id);
            return (<li key={id}>{title}</li>)
          })
        } */}



    </>
  )
}

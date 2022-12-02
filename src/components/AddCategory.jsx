import { useState } from 'react'

export const AddCategory = ({addCategory}) => {
    
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }
    //CPF para construir funciones de flecha
    const onSubmit = (event)=>{
        event.preventDefault();
        if(inputValue.trim().length <=1) return; 
        addCategory(inputValue.toUpperCase());
        setInputValue('');
    }
  

    return (
      <form onSubmit={onSubmit}>
          <input type="text" 
              placeholder="Buscar Gifs"
              value={inputValue}
              onChange ={onInputChange}
          />
      </form>  
  )
}

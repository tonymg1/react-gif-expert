import{useState} from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = (e)=>
    setInputValue(e.target.value)

    const onSubmit = (event)=>{
        event.preventDefault();
    //Si el el valor es menor a 1 hay return para salirme de la función
        if(inputValue.trim().length <=1) return;

        // setCategories(categories => [inputValue, ...categories])
    //Una vez que lo inserto se borra el valor del input
        onNewCategory(inputValue.trim());
        setInputValue("")
        
    }

    
  return (
    <form action="" onSubmit={onSubmit}>
         <input 
            type="text" 
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={(onInputChange)}
          />
    </form>
   
  )
}


import {useState} from 'react';
import {AddCategory, GifGrid} from './components';


export const GIfExpertApp = () => {

    const [categories, setCategories] = useState(["One Punch"]);

    const onAddCategory = (newCategory) => {
    //Si categories incluye new Category no hagas nada
        if(categories.includes(newCategory)) return
        setCategories([newCategory, ...categories])
        // categories.push(newCategory)
    }

   



  return (
    <>
        {/* título */}
        <h1>GIfExpertApp</h1>

        {/* input */}
        <AddCategory
        
            onNewCategory={onAddCategory}
        />
        {/* Listado de Gif */}
       
    
        {categories.map((category) => (
                   <GifGrid key={category}
                   category={category}/>
        ))}
      
            {/* Gif Item */}

    </>
  )
}

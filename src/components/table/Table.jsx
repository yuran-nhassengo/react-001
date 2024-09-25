import React, { useState } from 'react'
import Item from './Item'

const Table = () => {

    const [editar,setEditar] = useState(false);

    const [produtos,setProdutos] = useState([
        {
          id:1,
          name:"Bernina",
          qt:11,
          qa:11,
          motivo:""
        },
        {
          id:2,
          name:"2M Lata",
          qt:17,
          qa:17,
          motivo:""
        },
        {
          id:3,
          name:"Heineken Mini",
          qt:21,
          qa:21,
          motivo:""
        },
        {
          id:4,
          name:"Castle Lite",
          qt:24,
          qa:24,
          motivo:""
        },
    ])

    const handleEditar = ()=>{
        
        if(!editar){

         alert("Produtos Alterados com Sucesso!")
        };
        
        setEditar(!editar);
    
    }

  return (
    <div>
      <div className='flex justify-center items-start'>
            <button onClick={handleEditar} className='w-auto border-2 px-2 text-white border-blue-300 bg-blue-400 rounded'>
                {editar?"Editar":"Salvar"}
            </button>
      </div>
      <div>
        {console.log("Tabela Produtos: "+JSON.stringify(produtos))}
        {produtos.map( item => { return <Item key={item.id} produto={item} disable={editar} setProdutos={setProdutos}/> } )}
        
        
      </div>
    </div>
  )
}

export default Table

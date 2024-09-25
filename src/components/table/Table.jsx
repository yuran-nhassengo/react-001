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
      <div className="border-2 border-black">
      <ul className="grid grid-cols-8 justify-center space-x-8 items-center">
        <li className='w-auto  '>ID</li>
        <li className="h-full col-span-3 border-l-4 ">PRODUTOS</li>
        <li className=" border-l-4 ">Quantidade Atual</li>
        <li className=" border-l-4 ">Quantidade Existente</li>
        <li className="h-full border-l-4 ">Motivos</li>
      </ul>
    </div>
        {console.log("Tabela Produtos: "+JSON.stringify(produtos))}
        {produtos.map( item => { return <Item key={item.id} produto={item} disable={editar} setProdutos={setProdutos}/> } )}
        
        
      </div>
    </div>
  )
}

export default Table

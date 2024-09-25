import React, { useState } from 'react'
import Item from './Item'

const Table = () => {

    const [editar,setEditar] = useState(false);

    const produtos = [
        {
          id:1,
          name:"Bernina",
          qt:10,
          qa:10,
          motivo:""
        },
        {
          id:1,
          name:"2M Lata",
          qt:10,
          qa:10,
          motivo:""
        },
        {
          id:1,
          name:"Heineken Mini",
          qt:10,
          qa:10,
          motivo:""
        },
        {
          id:1,
          name:"Castle Lite",
          qt:10,
          qa:10,
          motivo:""
        },
    ]

  return (
    <div>
      <div className='flex justify-center items-start'>
            <button onClick={()=>setEditar(!editar)} className='w-auto border-2 px-2 text-white border-blue-300 bg-blue-400 rounded'>
                {editar?"Editar":"Salvar"}
            </button>
      </div>
      <div>

        {produtos.map( item => { return <Item produto={item} disable={editar}/> } )}
        
        
      </div>
    </div>
  )
}

export default Table

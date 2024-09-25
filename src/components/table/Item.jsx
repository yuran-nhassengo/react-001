import React, { useState } from 'react'

const Item = ({disable, produto:{id,name,qt,qa,motivo} }) => {

        const [qAtual,setQAtual] = useState(qa)

  return (
    <div className="border-2 border-black">
      <ul className="grid grid-cols-8 justify-center space-x-8 items-center">
        <li className='w-auto border-l-2 border-black'>{id}</li>
        <li className="col-span-3 border-l-4 ">{name}</li>
        <li className='justify-center items-center border-l-4'>
            {qt}
        </li>
        <li >
            <input onChange={(e)=>setQAtual(e.target.value)} className={`border-l-4  w-full ${!disable ? "hover:border-blue-700" : ""}`} 
            disabled={disable} type="text" value={qAtual} placeholder="Quantidade Existente" />
        </li>
        <li className="border-l-4 w-full justify-center items-center">
            <select className=' justify-center items-center' disabled={disable} name="" id="">
                <option value="">Selecione...</option>
                <option value="falha">Falha de Registo</option>
                <option value="quebra">Quebra de Stock</option>
                <option value="acerto">Acerto de stock</option>
                <option value="outros">Outros</option>
            </select> 
            </li>
      </ul>
    </div>
  )
}

export default Item

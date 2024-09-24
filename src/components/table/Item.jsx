import React from 'react'

const Item = () => {
  return (
    <div className="border-2 border-black">
      <ul className="grid grid-cols-8 justify-center space-x-8 items-center">
        <li className='w-auto border-l-2 border-black'>Id</li>
        <li className="col-span-3 border-l-4 ">Producto</li>
        <li><input className="border-l-4" type="text"  value="Quantidade Atual" /></li>
        <li><input className="border-l-4"  type="text" value="Quantidade Existente" /></li>
        <li className="border-l-4  justify-center items-center">
            <select className='justify-center items-center' name="" id="">
                <option value="">Selecione...</option>
                <option value="opcao1">Falha de Registo</option>
                <option value="opcao2">Quebra de Stock</option>
                <option value="opcao3">Acerto de stock</option>
                <option value="opcao4">Outros</option>
            </select> 
            </li>
      </ul>
    </div>
  )
}

export default Item

import './App.css';

// components

// hooks
import { useState, useRef } from 'react';


class ItemLista {
  constructor(id, shouldPay, valueFees, valueDebitBalance) {
    this.id = id
    this.shouldPay = shouldPay
    this.valueFees = valueFees
    this.valueDebitBalance = valueDebitBalance
  }
}

function App() {

  const [debitBalance, SetDebitBalance] = useState(0);
  let [numberInstallment, SetNumberInstallment] = useState(0);
  const [ratePercentual, SetRatePercentual] = useState();
  const [listItems, SetListItems] = useState([]);
  
  const calculateAmortization = () => {
    const currentListaItems = []
    console.log("calculando...")

    let debitValor = debitBalance

    // amortizacao 3000
    const amortization = debitBalance / numberInstallment

    for (let index = 0; index < numberInstallment; index++) {
      let valueFees = debitValor * ratePercentual
      
      let shouldPay = amortization + valueFees

      debitValor = debitValor - amortization

      let Item = new ItemLista(index, shouldPay, valueFees, debitValor)

      currentListaItems.push(Item)
      
    }

    SetListItems(currentListaItems)

  }

  return (
    <div className='App'>
      <div className="h-screen w-screen bg-gray-300">
        <div className="container h-screen mx-auto flex justify-center items-center p-2 md:p-0">
          <div className="border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div className="grid grid-cols-1 gap-2 border border-gray-200 p-2 rounded">
                <p className="p-2">Valor financiado</p>
                <div className="flex border rounded bg-gray-300 items-center p-2 ">
                  <input type="number" placeholder="Ex: R$30.000"
                      className="bg-gray-300 max-w-full focus:outline-none text-gray-700" onChange={(e) => SetDebitBalance(e.target.value)} />
                </div>
              </div>
            </div>
              <div className="grid grid-cols-1 gap-2 border border-gray-200 p-2 rounded">
                <p className="p-2">Número de Parcelas</p>
                <div className="flex border rounded bg-gray-300 items-center p-2 ">
                  <input type="number" placeholder="Ex: 10"
                    className="bg-gray-300 max-w-full focus:outline-none text-gray-700" onChange={(e) => SetNumberInstallment(e.target.value) } />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-2 border border-gray-200 p-2 rounded">
                <p className="p-2">Taxa Percentual de Juros</p>
                <div className="flex border rounded bg-gray-300 items-center p-2 ">
                  <input type="number" placeholder="Ex: 3%"
                      className="bg-gray-300 max-w-full focus:outline-none text-gray-700" onChange={(e) => SetRatePercentual(e.target.value / 100)} />
                </div>
              </div>
            <div>
              <select className="border p-2 rounded">
                <option>Sistema Price - PRICE</option>
                <option>Sistema de Amortização Misto - SAM</option>
                <option>Sistema de Amortização Constante - SAC</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button onClick={calculateAmortization} className="p-2 border w-1/4 rounded-md bg-gray-800 text-white">Calcular</button>
            </div>
            <ul>
              {listItems.map((item) => (
                <li>
                  {item.id} - {item.shouldPay} - {item.valueFees}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

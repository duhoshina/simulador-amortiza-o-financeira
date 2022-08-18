import './App.css';

// components

// hooks
import { useState } from 'react';

function App() {

  // valor presente - valor que eu peguei emprestado
  const [presentValue, SetPresentValue] = useState('');
  // numero de parcelas para pagar mensalmente
  const [numberInstallment, SetNumberInstallment] = useState('');
  // preço das parcelas
  const [priceInstallment, SetPriceInstallment] = useState('');
  // taxa porcentual
  const [ratePercentual, setRatePercentual] = useState('');
  // juros
  const [fees, SetFees] = useState('');
  // amortizações
  const [amortization, SetAmortization] = useState('');

  const calculateAmortization = (e) => {
    e.preventDefault();
    console.log("calculando...")
  }
  return (
    <div className="App bg-gray-800 h-screen flex justify-center flex-col">
      <a className="text-slate-400 uppercase" href="#home">gostou do projeto? fale comigo.</a>
      <h1 className="text-slate-100 font-bold">Simulador para Amortização Financeira 2022</h1>
      <form className="flex flex-col" onSubmit={calculateAmortization} >
        <label className="text-gray-400">
          Quanto você pegou emprestado?
          <input type="number" name="presentValue"></input>
        </label>
        <label className="text-gray-400">
          Para serem pagos em quantas parcelas?
          <input type="number" name="numberInstallment"></input>
        </label>
        <label className="text-gray-400">
          Qual foi a taxa de juros mensalmente?
          <input type="number" name="ratePercentual"></input>
        </label>
        <input type="submit" value="Calcular" className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'/>
      </form>
      <div>
        <ul>

        </ul>
      </div>
    </div>
  );
}

export default App;

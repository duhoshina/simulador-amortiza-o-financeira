import React from "react";

export default function Modal({numberInstallment, listItems, calculateAmortization}) {
  const [showModal, setShowModal] = React.useState(false);

  const activateBtn = () => {
    setShowModal(true)
    calculateAmortization()
  }

  const visitLinkedIn = () => {
    setShowModal(false)
    window.open('https://www.linkedin.com/in/duhoshina/', '_blank')
  }

  return (
    <>
      <button
        className="bg-blue-500 text-white active:bg-blue-600 font-medium uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110"
        type="button"
        onClick={activateBtn}
      >
        calcular
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Simulação Realizada
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {/* conteudo */}
                  <table className='text-center border-collapse border border-slate-400'>
                    <thead>
                      <tr className='border border-slate-300'>
                        <th scope='col' className='border-collapse border border-slate-400 px-5'>Parcela</th>
                        <th scope='col' className='border-collapse border border-slate-400'>Preço</th>
                        <th scope='col' className='border-collapse border border-slate-400'>Juros</th>
                        <th scope='col' className='border-collapse border border-slate-400'>Saldo Devedor</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listItems.map((item) => (
                        <tr>
                          <th scope='row' className='border border-slate-300'>{item.id + 1}</th>
                          <td className='border border-slate-300 px-5'>R${item.shouldPay}</td>
                          <td className='border border-slate-300 px-5'>R${item.valueFees.toFixed()}</td>
                          <td className='border border-slate-300 px-5'>R${item.valueDebitBalance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fechar Janela
                  </button>
                  <button
                    className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => visitLinkedIn()}
                  >
                    conheça o desenvolvedor
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
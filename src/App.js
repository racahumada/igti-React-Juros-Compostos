import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Installments from './components/Installments';

export default function App() {
  const [capInicial, setCapInicial] = useState(0);
  const [txJuros, setTxJuros] = useState(0);
  const [qtdMes, setQtdMes] = useState(0);
  const [arrayParcelas, setArrayParcelas] = useState([]);

  const changeCapInicial = (value) => {
    setCapInicial(value);
  };
  const changeTxJuros = (value) => {
    // value = value / 100;
    setTxJuros(value);
  };
  const changeQtdmes = (value) => {
    setQtdMes(value);
  };

  useEffect(() => {
    const calcJurosComp = (valueCap, valueTx, valueQtd) => {
      const arrayJuros = [];
      if (valueQtd !== 0 && valueCap !== 0) {
        let montante = valueCap,
          difValue = 0,
          percDif = 0;
        for (let i = 0; i < valueQtd; i++) {
          montante += montante * (valueTx / 100);
          difValue = montante - valueCap;
          percDif = (difValue * 100) / valueCap;
          arrayJuros.push({
            total: montante,
            difTotal: difValue,
            percent: percDif,
          });
        }
      }
      return arrayJuros;
    };

    setArrayParcelas(calcJurosComp(capInicial, txJuros, qtdMes));
    return () => {
      setArrayParcelas([]);
    };
  }, [capInicial, txJuros, qtdMes]);

  return (
    <div className="container">
      <h3>React Hooks - Juros Compostos</h3>
      <Form
        changeCap={changeCapInicial}
        changeTJ={changeTxJuros}
        changeQM={changeQtdmes}
      />
      <Installments parcelas={arrayParcelas} />
    </div>
  );
}

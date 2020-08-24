import React from 'react';

export default function Form({ changeCap, changeTJ, changeQM }) {
  const handleCapInit = ({ target }) => {
    const value = Number(target.value);
    changeCap(value);
  };

  const handleTJ = ({ target }) => {
    const value = Number(target.value);
    changeTJ(value);
  };

  const handleQM = ({ target }) => {
    const value = Number(target.value);
    changeQM(value);
  };
  return (
    <div className="row">
      <label className="col l4">
        Capital Inicial
        <input
          type="number"
          defaultValue="0"
          max="100000"
          step="100"
          onChange={handleCapInit}
        />
      </label>
      <label className="col l4">
        Taxa de juros Mensal
        <input
          type="number"
          defaultValue="0"
          min="-12"
          max="12"
          step="0.01"
          onChange={handleTJ}
        />
      </label>
      <label className="col l4">
        Período (Mensal)
        <input
          type="number"
          defaultValue="0"
          min="0"
          max="36"
          onChange={handleQM}
        />
      </label>
    </div>
  );
}

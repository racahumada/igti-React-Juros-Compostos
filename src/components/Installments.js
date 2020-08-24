import React from 'react';
import Installment from './Installment';
// import { useState, useEffect } from 'react';

export default function Installments({ parcelas }) {
  return (
    <div className="row ">
      {parcelas.map((parcela, index) => {
        const { total, difTotal, percent } = parcela;
        return (
          <Installment
            key={index}
            instKey={index + 1}
            total={total}
            difTotal={difTotal}
            percent={percent}
          />
        );
      })}
    </div>
  );
}

import React from 'react';
import css from './installment.module.css';

import { formatMoney, formatPercent } from './Helpers/format';
export default function Installment({ instKey, total, difTotal, percent }) {
  const percFormat = formatPercent(percent) + '%';
  const cssBox = `${css.installment} default-flex-row col s6 l2`;
  const cssValues = `default-flex-col padding`;
  const cssPercent =
    percent < 0 ? `${css.percRedNumber}` : `${css.percGreenNumber}`;
  return (
    <div className={cssBox}>
      <div>{instKey}</div>
      <div className={cssValues}>
        <span>{formatMoney(total)}</span>
        <span>{formatMoney(difTotal)}</span>
        <span className={cssPercent}>{percFormat}</span>
      </div>
    </div>
  );
}

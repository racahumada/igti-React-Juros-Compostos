function formatMoney(value) {
  return value.toLocaleString('pt-BR', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  });
}
function formatPercent(value) {
  return value.toLocaleString('pt-BR', {
    minimumFrationDigits: 2,
    maximumFractionDigits: 2,
  });
}
export { formatMoney, formatPercent };

const sortChange = (currencyChange, amount) => {
  let filter = [];
  let counter = 0;
  let finalResult = [];
  for (let t = 0; t < currencyChange.length; t++) {
    filter.push(currencyChange.filter((value) => value == amount[counter]));
    counter++;
  }
  filter = filter.filter((value) => value.length > 0);
  for (let r = 0; r < filter.length; r++) {
    finalResult.push([filter[r][0][0], (filter[r][0][1] *= filter[r].length)]);
  }
  return finalResult;
};

const findChange = (monedasDisponiblesParaElCambio, change, amount) => {
  let currencyChange = [];
  let restanteEnCaja = 0;
  for (let l = 0; l < monedasDisponiblesParaElCambio.length; ) {
    if (
      change >= amount[l][1] &&
      monedasDisponiblesParaElCambio[l][1] >= amount[l][1]
    ) {
      //restar el monto a debitar de cada moneda a la caja
      monedasDisponiblesParaElCambio[l][1] =
        monedasDisponiblesParaElCambio[l][1] - amount[l][1];
      currencyChange.push(amount[l]);
      // modificar el cambio restando las monedas utilizadas
      change = (change - amount[l][1]).toFixed(2);
      // guardar el restante en caja
      restanteEnCaja += monedasDisponiblesParaElCambio[l][1];
      // sino cumple la condicion pasa a la siguiente moneda
    } else {
      l++;
    }
  }
  return [currencyChange, restanteEnCaja, change];
};
const findCurrencyLowerOrEqual = (currC, cid) => {
  let monedasDisponiblesParaElCambio = [];
  let amount = [];
  let cajaIni = 0;
  for (let i = currC.length - 1; i >= 0; i--) {
    for (let j = cid.length - 1; j >= 0; j--) {
      //si encuentra la moneda que se necesita en la cid guardar un nuevo array (monedasDisponiblesParElCambio) con las monedas y sus respectivos montos
      if (currC[i][0] == cid[j][0]) {
        monedasDisponiblesParaElCambio.push(cid[j]);
        //guardar en otro array el monto de cada moneda a debitar
        amount.push(currC[i]);
        //conocer el valor total en caja antes de dar el cambio de las monedasDisponiblesParaElCambio
        cajaIni += cid[j][1];
      }
    }
    //si la cajaInicialmente tiene un monto menor que el cambio a dar:
  }
  return [monedasDisponiblesParaElCambio, amount, cajaIni];
};

const checkCashRegister = (price, cash, cid) => {
  //Amount per currency
  const currency = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100],
  ];

  //encontrar el cambio a dar al cliente
  let change = cash - price;

  // encontrar las monedas menores e iguales al cambio a dar.
  let currC = currency.filter((value) => value[1] <= change);

  //encontrar las currency change que se necesitan en la cid
  let [monedasDisponiblesParaElCambio, amount, cajaIni] =
    findCurrencyLowerOrEqual(currC, cid);
  //si la cajaInicialmente tiene un monto menor que el cambio a dar:
  if (cajaIni < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };

    //si es igual:
  }
  if (cajaIni == change) {
    return { status: "CLOSED", change: cid };
  }
  // si es mayor o igual:
  let [currencyChange, restanteEnCaja, changeAfterDrawing] = findChange(
    monedasDisponiblesParaElCambio,
    change,
    amount
  );
  change = changeAfterDrawing;

  // uniendo los billetes en un solo array
  let finalResult = sortChange(currencyChange, amount);

  // si el restante en caja es mayor al cambio:
  if (restanteEnCaja > change) {
    return { status: "OPEN", change: finalResult };
  }
};
console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

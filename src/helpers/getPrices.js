import { companies, shipping } from "../helpers/shipping";

export default function getPrices(units) {
  Object.keys(companies).forEach((company) => {
    shipping.setStrategy(companies[company]);
    const price = shipping.calculate(units);
    document.getElementById(company).innerHTML = `$${parseFloat(price).toFixed(
      2
    )}`;
  });
}

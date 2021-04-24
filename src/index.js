import "./styles.css";
import getPrices from "./helpers/getPrices";

document.getElementById("app").innerHTML = `
  <h1>Strategy</h1>
  <span>Units to order</span>
  <input type="number" id="units" name="units" min="1" max="100" value="0">
  <h3>Cost</h3>
  <span>Fedex: <i id="fedex"></i></span>
  <br>
  <span>UPS: <i id="ups"></i></span>
  <br>
  <span>DHL: <i id="dhl"></i></span>
`;

document.getElementById("units").addEventListener("change", (e) => {
  getPrices(e.target.value);
});

function Fedex() {
  this.calculate = (units) => {
    return units * 1;
  };
}

function UPS() {
  this.calculate = (units) => {
    return units * 1.5;
  };
}

function DHL() {
  this.calculate = (units) => {
    return units * 2;
  };
}

function Shipping() {
  this.company = undefined;
  this.setStrategy = (company) => {
    this.company = company;
  };
  this.calculate = (units) => {
    return this.company.calculate(units);
  };
}

const fedex = new Fedex();
const ups = new UPS();
const dhl = new DHL();
export const shipping = new Shipping();

export const companies = { fedex, ups, dhl };

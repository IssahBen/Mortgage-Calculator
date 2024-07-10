import { useState } from "react";

import Header from "./Components/Header";
import Amount from "./Components/Amount";
import Term from "./Components/Term";
import Rate from "./Components/Rate";
import Type from "./Components/Type";
import Evaluate from "./Components/Evaluate";
import EvalError from "./Components/EvalError";

export default function App() {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [typeError, setTypeError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [rateError, setRateError] = useState(false);
  const [termError, setTermError] = useState(false);
  const [evalError, setEvalError] = useState(false);
  const [ionly, setIonly] = useState(null);
  const [mpayments, setMpayments] = useState(null);
  const [total, setTotal] = useState(0);
  function Clear() {
    setAmount("");
    setTerm("");
    setRate("");
    setType("");
    setIonly(null);
    setMpayments(null);
    setTotal(0);
  }
  const isNumber = (string) => {
    return /^(\d)*(\.)?([0-9]{1,})?$/gm.test(string);
  };
  function Compute() {
    if ((type || amount || term || rate) === "") {
      if (type === "") {
        setTypeError(true);
      }
      if (term === "") {
        setTermError(true);
      }
      if (amount === "") {
        setAmountError(true);
      }
      if (rate === "") {
        setRateError(true);
      }
      return;
    }
    if (!(isNumber(amount) && isNumber(term) && isNumber(rate))) {
      setEvalError(true);
    } else {
      if (type === "interest") {
        const loan = Number(amount);
        const irate = Number(rate) / 100;
        const monthly = (irate * loan) / 12;
        setIonly(monthly);
      } else {
        const loan = Number(amount);
        const irate = Number(rate) / (100 * 12);
        const months = Number(term) * 12;
        const payment =
          (loan * irate * Math.pow(1 + irate, months)) /
          (Math.pow(1 + irate, months) - 1);
        setMpayments(payment);
        setTotal(payment * months);
      }
    }
  }
  return (
    <div className="w-screen h-screen  bg-slate-100 md:last:flex md:items-center md:justify-center  ">
      <div className="h-screen w-screen overflow-auto md:w-10/12 md:h-2/3 bg-white flex flex-col md:flex-row md:rounded-r-[28px] ">
        <div className="bg-white w-full h-full mb-14 md:mb-0 p-8">
          <div
            className="flex w-full h-full
         flex-col space-y-8"
          >
            {evalError && <EvalError setError={setEvalError} />}
            <Header clear={Clear} />
            <Amount
              amount={amount}
              setAmount={setAmount}
              error={amountError}
              setError={setAmountError}
            />
            <Term
              term={term}
              setTerm={setTerm}
              error={termError}
              setError={setTermError}
            />
            <Rate
              rate={rate}
              setRate={setRate}
              error={rateError}
              setError={setRateError}
            />
            <Type
              type={type}
              setType={setType}
              error={typeError}
              setError={setTypeError}
            />
            <Evaluate compute={Compute} />
          </div>
        </div>

        <div className="bg-slate-900 w-full h-full  md:rounded-r-[28px] md:rounded-bl-[85px] ">
          men
        </div>
      </div>
    </div>
  );
}

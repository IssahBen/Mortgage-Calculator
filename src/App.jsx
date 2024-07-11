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
        if (mpayments !== null) {
          setMpayments(null);
        }
        const loan = Number(amount);
        const irate = Number(rate) / 100;
        const monthly = (irate * loan) / 12;
        setIonly(monthly.toFixed(1));
      } else {
        if (ionly !== null) {
          setIonly(null);
        }
        const loan = Number(amount);
        const irate = Number(rate) / (100 * 12);
        const months = Number(term) * 12;
        const payment =
          (loan * irate * Math.pow(1 + irate, months)) /
          (Math.pow(1 + irate, months) - 1);
        setMpayments(payment.toFixed(1));
        setTotal((payment * months).toFixed(1));
      }
    }
  }
  return (
    <div className="w-screen h-screen  bg-slate-100 md:last:flex md:items-center md:justify-center  ">
      <div className="h-screen w-screen overflow-auto md:w-10/12 md:h-2/3 bg-white flex flex-col md:flex-row md:rounded-r-[28px] ">
        <div className="bg-white w-full h-full mb-5 md:mb-0 p-8">
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

        <div className="bg-cyan-950 py-10 w-full h-full  md:rounded-r-[28px] md:rounded-bl-[85px] ">
          {mpayments === null && ionly === null ? <Image /> : ""}
          {mpayments === null && ionly === null ? <Instruction /> : ""}
          {mpayments !== null ? <Info /> : ""}
          {mpayments !== null ? (
            <Results payments={mpayments} total={total} />
          ) : (
            ""
          )}
          {ionly !== null ? <Info /> : ""}
          {ionly !== null ? <Iresults payments={ionly} /> : ""}
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="flex justify-center items-center w-full">
      <img src="image.svg" alt="" />;
    </div>
  );
}

function Instruction() {
  return (
    <div className="flex flex-col space-y-5  mt-5 w-full justify-center items-center">
      <p className="text-white font-bold text-2xl plus700">
        Results shown here
      </p>
      <p className="font-light text-slate-100 text-center px-8 plus500 tracking-tighter">
        Complete the form and click "calculate repayments" to see what your
        montly repayments would be.
      </p>
    </div>
  );
}
function Info() {
  return (
    <div className="flex px-5 flex-col space-y-4   w-full  items-start">
      <p className="text-white font-bold text-2xl plus700">Your results</p>
      <p className="font-light text-slate-400    tracking-widest">
        Your results are shown below based on the information provided.To adjust
        the form,edit the form and click "calculate repayments " again.
      </p>
    </div>
  );
}

function Results({ payments, total }) {
  return (
    <div className="px-5 mt-5 w-full">
      <div className="w-full  py-8 px-5 bg-slate-900 border-t-8 border-t-lime flex flex-col items-start rounded-2xl space-y-4">
        <p className="font-thin text-slate-400 tracking-wide">
          Your montly repayments
        </p>
        <p className="text-5xl text-lime">${payments}</p>
        <div className=" w-full border-t-2 border-t-slate-400"></div>
        <p className="font-thin text-slate-400 tracking wide">
          Total you will repay over the term
        </p>
        <p className="text-5xl text-lime">${total}</p>
      </div>
    </div>
  );
}
function Iresults({ payments }) {
  return (
    <div className="px-5 mt-5 w-full">
      <div className="w-full  py-8 px-5 bg-slate-900 border-t-8 border-t-lime flex flex-col items-start rounded-2xl space-y-4">
        <p className="font-thin text-slate-400 tracking-wide">
          Your montly repayments
        </p>
        <p className="text-5xl text-lime">${payments}</p>
      </div>
    </div>
  );
}

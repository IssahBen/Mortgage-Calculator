import { useState } from "react";
import Calculate from "./Components/Calculate";
import Header from "./Components/Header";
import Amount from "./Components/Amount";
import Term from "./Components/Term";
import Rate from "./Components/Rate";
import Type from "./Components/Type";

export default function App() {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  function Clear() {}
  function Calculate() {}
  return (
    <div className="w-screen h-screen bg-slate-100 md:last:flex md:items-center md:justify-center ">
      <div className="h-screen w-screen md:w-10/12 md:h-2/3 bg-white flex flex-col md:flex-row md:rounded-r-[28px] ">
        <div className="bg-white w-full h-full p-8">
          <div
            className="flex w-full h-full
         flex-col space-y-8"
          >
            <Header Clear={Clear} />
            <Amount setAmount={setAmount} />
            <Term setTerm={setTerm} />
            <Rate setRate={setRate} />
            <Type type={type} setType={setType} />
            <Calculate Calculate={Calculate} />
          </div>
        </div>

        <div className="bg-slate-900 w-full h-full  md:rounded-r-[28px] md:rounded-bl-[85px] ">
          men
        </div>
      </div>
    </div>
  );
}

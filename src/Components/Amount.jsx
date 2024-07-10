import Error from "./Error";

export default function Amount({ error, setError, amount, setAmount }) {
  return (
    <div className="flex flex-col space-y-2 items-start">
      <h3 className="font-normal text-slate-400">Mortgage Amount</h3>
      <div
        className={`flex w-full border-[1px] rounded-md ${
          amount !== ""
            ? "border-lime"
            : error
            ? "border-red-500"
            : "border-slate-400"
        }`}
      >
        <div
          className={`flex justify-center items-center p-2 w-1/12 ${
            amount !== "" ? "bg-lime" : error ? "bg-red-500" : "bg-blue-100"
          }  font-bold text-slate-500 text-2xl`}
        >
          $
        </div>
        <input
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          type="text"
          className=" pl-5 w-full text-xl font-normal text-slate-700 "
        />
      </div>
      {error && <Error setError={setError} />}
    </div>
  );
}

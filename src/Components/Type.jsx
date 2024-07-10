import Error from "./Error";

export default function Type({ error, setError, type, setType }) {
  const onOptionChange = (e) => {
    setType(e.target.value);
  };
  return (
    <div className="flex flex-col space-y-2 items-start">
      <h3 className="font-normal text-slate-400">Mortgage Type</h3>
      <div className="flex  flex-col space-y-2 w-full ">
        <div
          className={` ${
            type === "replacement" ? "bg-green-100 " : ""
          } p-4 flex border-[1px] rounded-md ${
            type === "replacement" ? "border-lime" : "border-slate-400"
          }`}
        >
          <input
            type="radio"
            name="hs-default-radio"
            className="shrink-0 mt-1 w-5 h-5 border-gray-200 rounded-full checked:border-lime checked:bg-lime disabled:opacity-50 disabled:pointer-events-none"
            id="hs-default-radio"
            value="replacement"
            checked={type === "replacement"}
            onChange={onOptionChange}
          />
          <label
            htmlFor="hs-default-radio"
            className="text-lg font-semibold text-slate-700 ms-3"
          >
            Repayment
          </label>
        </div>

        <div
          className={` ${
            type === "interest" ? "bg-green-100 " : ""
          } p-4 flex border-[1px] rounded-md ${
            type === "interest" ? "border-lime" : "border-slate-400"
          }`}
        >
          <input
            type="radio"
            name="hs-default-radio"
            className="shrink-0 mt-1 w-5 h-5  border-gray-200  checked:border-lime rounded-full checked:bg-lime disabled:opacity-50 disabled:pointer-events-none"
            id="hs-checked-radio"
            value="interest"
            checked={type === "interest"}
            onChange={onOptionChange}
          />
          <label
            htmlFor="hs-checked-radio"
            className="text-lg font-semibold text-slate-700 ms-3 "
          >
            Interest Only
          </label>
        </div>
      </div>
      {error && <Error setError={setError} />}
    </div>
  );
}

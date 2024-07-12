import Error from "./Error";

export default function Term({ error, setError, term, setTerm }) {
  return (
    <div className="flex flex-col space-y-2 items-start">
      <h3 className="font-normal text-slate-400">Mortgage Term</h3>
      <div
        className={`flex w-full border-[1px] rounded-md ${
          error ? "border-red-500" : "border-slate-400"
        }`}
      >
        <input
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          type="text"
          className=" pl-5 w-5/6 text-xl font-normal text-slate-900"
        />
        <div
          className={`flex justify-center items-center p-1 w-1/6 ${
            error ? "bg-red-500" : "bg-blue-100"
          }  font-normal text-slate-500 text-2xl md:text-lg`}
        >
          years
        </div>
      </div>
      {error && <Error setError={setError} />}
    </div>
  );
}

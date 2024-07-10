export default function Term({ setTerm }) {
  return (
    <div className="flex flex-col space-y-2 items-start">
      <h3 className="font-normal text-slate-400">Mortgage Term</h3>
      <div className="flex w-full border-[1px] rounded-md border-slate-400">
        <input
          type="text"
          className=" pl-5 w-5/6 text-xl font-normal text-slate-900"
        />
        <div className="flex justify-center items-center p-2 w-1/6 bg-blue-100  font-normal text-slate-500 text-2xl">
          years
        </div>
      </div>
    </div>
  );
}

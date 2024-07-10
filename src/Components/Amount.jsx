export default function Amount({ setAmount }) {
  return (
    <div className="flex flex-col space-y-2 items-start">
      <h3 className="font-normal text-slate-400">Mortgage Amount</h3>
      <div className="flex w-full border-[1px] rounded-md border-slate-400">
        <div className="flex justify-center items-center p-2 w-1/12 bg-blue-100  font-bold text-slate-500 text-2xl">
          $
        </div>
        <input
          type="text"
          className=" pl-5 w-full text-xl font-normal text-slate-700"
        />
      </div>
    </div>
  );
}

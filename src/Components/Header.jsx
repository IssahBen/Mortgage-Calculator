export default function Header({ Clear }) {
  return (
    <div className="flex flex-col space-y-2 items-start">
      <h1 className="text-2xl plus700 text-slate-700">Mortage Calculator</h1>
      <button className="text-slate-400 underline underline-offset-4">
        Clear All
      </button>
    </div>
  );
}

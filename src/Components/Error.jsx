function Error({ setError }) {
  function HandleDismiss() {
    setError(false);
  }
  return (
    <div className="flex items-center space-x-1">
      <p className="text-red-500 font-light">This field is required</p>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg p-1.5  inline-flex items-center justify-center h-8 w-8"
        data-dismiss-target="#alert-3"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          onClick={HandleDismiss}
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
}

export default Error;

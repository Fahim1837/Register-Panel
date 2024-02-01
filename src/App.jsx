import FormPage from "./FormPage";

function App() {
  return (
    <div className="h-screen bg-slate-400 flex items-center justify-center">
      <div className="bg-slate-100 p-5 flex flex-col items-center justify-center space-y-3 rounded-xl shadow-lg ">
        <h1 className="font-bold text-purple-800 text-2xl ">Register</h1>
        <form className="space-y-2">
          <FormPage />
          <FormPage />
          <FormPage />
          <FormPage />
          <FormPage />
          <div className="flex justify-center">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

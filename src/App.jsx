import FormPage from "./FormPage";

function App() {
  return (
    <div className="cont">
      <div className="card">
        <h1 className="register">Register</h1>
        <form className="space-y-3 ">
          <FormPage />
          <FormPage />
          <FormPage />
          <FormPage />
          <FormPage />
          <div className="flex justify-center pt-3">
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

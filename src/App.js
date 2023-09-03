import "./App.css";
import SummaryItems from "./summaryItems";

function App() {
  return (
    <div className="card">
      <div className="card-container">
        <section className="resault">
          <h3>Your Resault</h3>
          <div className="circle">
            <h1>76</h1>
            <p>of 100</p>
          </div>
          <b>Great</b>
          <p className="info">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </section>
        <section className="summary">
          <SummaryItems />
          <button className="btn">Continue</button>
        </section>
      </div>
    </div>
  );
}

export default App;

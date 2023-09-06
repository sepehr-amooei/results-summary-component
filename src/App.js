import "./App.css";
import SummaryItems from "./summaryItems";

function App() {
  return (
    <div className="card">
      <div className="card-container">
        <section className="resault">
          <h3>Your Resault</h3>
          <div className="circle">
            <h1 style={{ fontSize: "50px" }}>76</h1>
            <p style={{ fontSize: "15px" }}>of 100</p>
          </div>
          <b style={{ fontSize: "25px" }}>Great</b>
          <p className="info">
            You scored higher than 65% of <br /> the people who have taken
            <br /> these tests.
          </p>
        </section>
        <section className="summary">
          <h3>summary</h3>
          <SummaryItems />
          <button className="btn">Continue</button>
        </section>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import SummarySection from "./summarySection";
import ResaultSection from "./resaultSection";

function App() {
  return (
    <div className="card">
      <div className="card-container">
        <ResaultSection />
        <SummarySection />
      </div>
    </div>
  );
}

export default App;

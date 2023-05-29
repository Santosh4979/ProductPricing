import './App.css';
import UploadForm from './components/UploadForm';
import PricingTable from './components/PricingTable';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <p>
         <strong>Upload CSV Pricing Data and Edit if needed </strong>.
        </p>
        <UploadForm/>
        <PricingTable/>
      </div>
    </div>
  );
}

export default App;

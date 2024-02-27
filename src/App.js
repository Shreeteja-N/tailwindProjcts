
import './App.css';
import RevenueCard from './components/RevenueCard';

function App() {
  return (
    <div className='grid grid-cols-4'>
    <RevenueCard amount={"1000000"} tittle={"Amount Pending"} orderCount={23}></RevenueCard>
    </div>
  );
}

export default App;

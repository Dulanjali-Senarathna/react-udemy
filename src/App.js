import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
    {id: 1, title:'Toilet paper', amount : 296.67, date: new Date()},
    {id: 2,title:'Car insurance', amount : 296.67, date: new Date()},
    {id: 3,title:'New Desk wooden', amount : 296.67, date: new Date()},
    {id: 4,title:'PEn Holder', amount : 296.67, date: new Date()}
  ]
  return (
    <div>
      <NewExpense/> 
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

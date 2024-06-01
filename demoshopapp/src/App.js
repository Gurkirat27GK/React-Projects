import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
  const response = {
    itemName: "Ghadi",
    itemDate: "30",
    itemMonth: "May",
    itemYear: "2000"
  }

  return (
    <div>
      <Item name="Nirma">
      Hello Jee mai hu apki first item
      </Item>
      <ItemDate day="20" month="June" year="1998"></ItemDate>

      <Item name="SurfExcel"></Item>
      <ItemDate day="22" month="July" year="1999"></ItemDate>

      <Item name={response.itemName}></Item>
      <ItemDate day={response.ItemDate} month={response.itemMonth} year={response.itemYear}></ItemDate>
      <div className="App">Hello World!</div>
    </div>
  );
}

export default App;

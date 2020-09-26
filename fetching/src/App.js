import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import PrintCards from './PrintCards'

const Url = 'https://jsonplaceholder.typicode.com/users';



function App() {


  const onpressNext = () => {
      console.log("Yess");
  }

const [data, setData] = useState({});

const [count, setCount] = useState(0);
useEffect(() => {
  setData(0);

  getData().catch(
    console.log("error getting data")
  );
}, []);

const getData = async () => {
  const response = await axios.get(Url);

  setData(response.data);
  console.log(response.data);
}; 

  return (
    <div className="App">
    <h1>User Information</h1>
      <h3>Fetching data from {Url}</h3>
       {
         data[0] !== undefined ?
         <PrintCards users={data} counter ={count} />
          : <p>Fetching data</p>
       }
       <button onClick={() => onpressNext()} className="btn waves-effect waves-light" type="submit" name="action">Next
       </button>
       <a className="waves-effect waves-light btn-small">Previous</a>

    </div>
  );
}

export default App;

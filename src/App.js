import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    {name: "Gucci sunglass", price: "$500"},
    {name: "Prada bag", price:"$1000"},
    {name:"CK jacket", price:"$200"},
    {name:"Ralph loren coat", price:"$500"}
  ]
  const heros =[
    {name: "Manna", price: "$300" },
    {name: "Salman Shah", price:"$350"},
    {name: "Sakib khan", price:"$400"}

  ];
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <div>{
          products.map(product => <Products product={product}></Products>)
          }</div>
      </header>
    </div>
  );
}
function Users(){
 const [users, setUsers] = useState([])
useEffect(() =>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data))
},[])
 const userStyle ={
  color: 'white',
  backgroundColor:'teal',
  width:'300px',
  height:'250px',
  margin:'10px',
  padding:'10px',
  float: 'left'

 }
  return (
   <div>
    <h4>Users: {users.length}</h4>
    {users.map(usr =>(
    <div style={userStyle}>
      
       <p>Name:{usr.name}</p>
       <p>phone{usr.phone}</p>
       <p>Email: {usr.email}</p>
    </div>
))}
   </div>
  )
}
function Counter(){
  const [count,setCount] = useState(0)
  const handleIncrease = () => {
    const increase = count + 1;
    setCount(increase);
  }
  const handleDecrease = () =>{
    const decrease = count -1;
    setCount(decrease);
  }
  return(
    <div>
    <h1>Count: {count}</h1>
    <button onClick={handleIncrease}>Increase</button>
    <button onClick={handleIncrease}>Decrease</button>
    </div>
  )
}
function Products(props){
  const productStyle={
    color:'white',
    backgroundColor: 'lightgrey',
    width:'300px',
    height:'250px',
    padding:'10px',
    margin:'10px',
    float:'left'
  }
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h4>Price:{props.product.price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

export default App;

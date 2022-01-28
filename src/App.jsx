import logo from "./logo.svg";
import "./App.css";

function App() {
  const user = [{Name:"Gopala",age:"26"},{Name:"Aman", age:"25"}]
  return (
    <div className="App">
      {user.map((e) => {
        return <Userdata Name={e.Name} age={e.age}/>
      })}
    </div>
  );
}

//componenets

function Userdata(props){
  return (<div>
    <h1>Hello Name is: {props.Name}</h1>
    <p>your age is: {props.age}</p>
  </div>)
}

export default App;

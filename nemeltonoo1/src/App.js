import './App.css';
import { useState} from "react";

 const App =() =>{
    const [time,setTime] = useState(0);

    const getTime = () =>{
        fetch('http://utils.mandakh.org:8000/utils/',{
        method: "POST",
        headers: {
            'Content-type' : 'application/json',
        },
        body: JSON.stringify({
            action:"gettime"
        }),
    })
    .then((resp) => resp.json())
    .then((data) => {
        setTime(data["data"]["time"]);
    })
    .catch((err) => {
        console.log(err.message);
    })
 }
return(
  <div>
    <button className="py-6 px-12 sm:w-[60%] my-8"  onClick={() => {getTime()}}>SERVERIIN TSAG HARAH</button>
    <div>{time}</div>
  </div>
)
 }
export default App;
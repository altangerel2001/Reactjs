import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";
import { useState , useEffect} from "react";

export default function Home() {

  const [datas, setDatas] = useState();
  const urlLookup = "http://btax.mandakh.org:8000/lookup/";
  useEffect(() => {
    const bodyChiglel = {
      action: "chiglel",
    };
    sendRequest(urlLookup, bodyChiglel),then ((data) => setDatas(data));
  }, []);
  
  const DisplayData = datas && datas.data.map((naruto) => {
    return(
      <p>
      <button onClick={() => console.log(naruto.chigleldaraalal)}>{naruto.chiglelname}</button>
      </p>
    )
  }
   )

 

  return (
    <>
     {DisplayData}
    <text>{data && JSON.stringify(datas)}</text>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";
import { useState , useEffect} from "react";
import {hariu} from "../../getdata/dummy"
// import {sendRequest, urlLookup} from "../../settings/Settings"
// import { Button, Divider, notification, Space } from 'antd';
// const Context = React.createContext({
//   name: 'Default',
// });

export default function Home() {

  // const [datas, setDatas] = useState();
  // const [api, contextHolder] = notification.useNotification();

  // useEffect(() => {
  //   const bodyChiglel = {
  //     action: "aimagsum",
  //   };
  //   sendRequest(urlLookup, bodyChiglel).then((data) => setDatas(data));
  // },[]);
  
  // const openNotification = (desc) => {
  //   notification.open({
  //     message: 'аймгийн нэр',
  //     description:
  //     desc,
  //     onClick: () => {
  //       console.log('notif darsan!');
  //     },
  //   });
  // };

  // const DisplayData = datas && datas.data.map((amg) =>{
  //   return (
  //     <p key ={amg.aimagdaraalal} >
  //       <Button type="dashed" key ={amg.aimagdaraalal} onClick={() => openNotification(amg.aimagname)}>{amg.aimagname}</Button>
        
  //     </p>
  //   )
  // });
  return (
    <>
     {/* {DisplayData}
    {<p>{data && JSON.stringify(datas)}</p>} */}
      <Topbar ilgeesen = {hariu}/>
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
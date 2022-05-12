import {useEffect, useState} from "react"
import Adlist from "./components/adlist";
import Modal from "./components/modal";
import {sb} from "./utils/index.js"
function App() {
  let [ads, setAds] = useState([])
  let [display, setDisplay] = useState("none")

  useEffect( ()=> {
    let r = (async ()=>{
      let allAds = await sb.getCars()
      console.log(allAds)
      setAds([...allAds.data])
    })()

}, [])
  return (
    <div>
      <div 
      style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:"7%"
      }}
      >
        <div>
          <h1>
          Auto Mart 🚗
          </h1>
        </div>
        <div>
          <button style={{
            backgroundColor:"green",
            color:"white",
            outline:"none",
            border:"none",
            borderRadius:"5px"
          }} onClick={()=> setDisplay("block")}>Post Ad</button>
          <Modal display={display} setDisplay={setDisplay}  />
        </div>
      </div>

      <div>
        {ads.map(function(ad, i){
          return <Adlist key={i} id={ad["_id"]} name={ad.name} description={ad.description} />
        })}
      </div>
    </div>
  );
}

export default App;

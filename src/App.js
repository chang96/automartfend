import {useEffect, useState} from "react"
import Adlist from "./components/adlist";
import Modal from "./components/modal";

function App() {
  let [ads, setAds] = useState([])

  useEffect(()=> {
   setAds([{name: "$ford", description:["hereh is er"]}])
}, [])
  return (
    <div>
      <div>
        <div>
          Auto Mart
        </div>
        <div>
          Post Ad
          <Modal />
        </div>
      </div>

      <div>
        {ads.map(function(ad, i){
          return <Adlist key={i} name={ad.name} description={ad.description} />
        })}
      </div>
    </div>
  );
}

export default App;

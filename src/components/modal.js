import {useState, useEffect} from "react"
import {sb} from "../utils/index"
export default function Modal({display, setDisplay}) {
    let [descriptions, setDescription] = useState([ 
        {name: 0, value:""}, {name: 1, value:""}
     ])
    let [carName, setCarName] = useState("")

    const handleNameChange = (e)=>{
        const {value} = e.target
        setCarName(value)
    }
  const handleChange =(index, e)=>{
    const {name, value} = e.target
    let theDescriptions = [...descriptions]
    theDescriptions[index]["value"] = value
    setDescription(theDescriptions)

  }




  const submitAd = async (e)=>{
      e.preventDefault()
    console.log(carName, descriptions)
    let option = {
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body:JSON.stringify({
            name: carName,
            description: descriptions.map(d=> d.value)
        })

    }

    let postad = await sb.postAds(option)
    if(postad.response === "saved"){
        alert("Ad saved")
    } else {
        alert("Error Occured")
    }
  }
  return (
    <div style={{
    display: display,// props.display, /* Hidden by default */
    position: "fixed", /* Stay in place */
    zIndex: 1, /* Sit on top */
    left: 0,
    top: 0,
    width: "100%", /* Full width */
    height: "100%", /* Full height */
    overflow: "auto", /* Enable scroll if needed */
    backgroundColor: "white", /* Fallback color */
        }}>
       <button
          style={{
            color: "black",
            backgroundColor: "",
            borderRadius: "4px",
            fontSize: "16px",
            lineHeight: "28px",
            fontWeight: 600,
            padding: "4px 16px",
            border: "none",
            cursor: "pointer",
            marginBottom: "12px",
            marginTop: "16px",
          }}
          onClick={() => setDisplay("none")}
        >
          <img alt="" /> ◁Back
        </button>
    <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent:"space-around"}}>
      <div style={{}}>
          {<form>
              <div><input name="name" onChange={(e)=> handleNameChange(e)} placeholder="Car Name" /></div>
              <hr />
              <div>
                  <div>
                          <input name={`0`} placeholder="description"  onChange={(e)=> handleChange(0, e)} />
                    </div>
                    <div>
                          <input name={`1`} placeholder="description" onChange={(e)=> handleChange(1, e)} /> 
                    </div>
              </div>
             <div><button onClick={(e)=> submitAd(e)}>Submit</button></div>
        </form>}
         
      </div>
    </div>
    </div>
  );
}

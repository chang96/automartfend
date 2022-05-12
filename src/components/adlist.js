import {sb} from "../utils/index"


function Adlist({name, description, id}) {
    const deleteAd = async function(id){
        let deleting = await sb.deleteAds(id)
        if(deleting.response === "deleted"){
            alert("Ad deleted")
        }
    }
    return (
      <div
      style={{
        border:"1px solid black",
        borderRadius:"15px",
        marginBottom:"1rem",
        height:"120px",
        width:"100%",
        padding:"1rem"
    }}>
      
        <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between"
        }}>
            <div><h5> {name} </h5></div>
            <div  > <button style={{
                backgroundColor:"red",
                color:"white",
                border:"none",
                outline:"none",
                width:"60px",
                height:"20px"
            }} onClick={()=> deleteAd(id)} id={id}> delete </button></div>
        </div>
        <div>
            {description.map(function(element, i){
                return <li style={{fontFamily:"monospace"}} key={i}>{element}</li>
            })}
        </div>
      </div>
    );
  }
  
  export default Adlist;
  
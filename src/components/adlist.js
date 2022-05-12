function Adlist({name, description}) {
    return (
      <div>
        <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between"
        }}>
            <div>{name} </div>
            <div>delete</div>
        </div>
        <div>
            {description.map(function(element, i){
                return <li key={i}>{element}</li>
            })}
        </div>
      </div>
    );
  }
  
  export default Adlist;
  
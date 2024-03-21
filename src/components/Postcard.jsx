const Postcard = (props)=>{
    return (
        <div className="post-card">
            <h3>Name: {props.name}</h3>
            <p>Email: {props.email}</p>
            <div className="image"><span>Photo:</span><br></br><br></br>
            <img src={props.image} alt=" not available"></img>
            </div>
           
        </div>
    )
}



export default Postcard;
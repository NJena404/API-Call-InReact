import React  from 'react'

const RandomUserCard = (props) =>
{
    
    return (
        <div className='post-card'>
            <img src={props.data.picture.large}/>
            <h3>Name: {props.data.name.first} </h3>
            <p>Location:  {props.data.location.city} ,  {props.data.location.state} </p>
            <button style={{color:'grey', borderBlockColor:'red'}} onClick={props.buttonClickHandler}>Refresh</button>
        </div>
    )
}

export default RandomUserCard;
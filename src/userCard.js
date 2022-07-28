import React, {useState} from 'react'
import './index.css';

function UserCard(props) {
    const [isHidden, setHide] = useState(true)
    
    return (
        <li>
            <img src={props.img_url} alt="users"  ></img>
            <h3>{props.name}</h3>
            
            {isHidden ?(<div>
             <button onClick={() => {isHidden ? setHide(false) : setHide(true)}}>Show Details</button>  
            </div>) : (<div>
                <h4>{props.email}</h4>
                <h4>{props.location}</h4>
                <button onClick={() => {isHidden ? setHide(false) : setHide(true)}}>Hide Details</button> 
                </div>)}
           
          
        </li>
    )
}
export default UserCard
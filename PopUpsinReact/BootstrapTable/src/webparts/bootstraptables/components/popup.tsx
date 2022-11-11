import * as React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
  
export default function PopupGfg(props:any){
  return(
   <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    nested
  >
   <h1>Anubhav shukla</h1>
   <div>
                  <div>
                      <label>Name:</label>
        <input type='text'  value={props.id} placeholder='Enter Name'/>
                  </div>
                   
                  <div  >
            <label>Email:</label>
        <input type='text'  placeholder='Enter Email'/>
        </div>
        <div >
            <label>Designation:</label>
        <input type='text' placeholder='Enter Designation'/>
        </div>
        <div>
        <label>Phone Number:</label>
        <input type='text'  placeholder='Enter Phone Number'/>
        </div>
        <button type='button'>Save</button>
            <span>  </span>
            <button >Cancel</button>
                  </div>
  </Popup>
  )
};
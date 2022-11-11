import * as React from 'react';
import {FaTimes} from  'react-icons/fa';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Tooltip from '../popup';

function AddStructure() {

    return(
        <span>
             <Popup
            trigger={ <span><button type='button' style={{background:"#000066",color:"white"}}>+ Add Structure</button></span> }
            position="center center"
            modal
            nested
            contentStyle={{ width: '50%' , height:'30%', top: "-24%"}}
          >
            {(close: React.MouseEventHandler<HTMLButtonElement>) => (
            <div >
              <div >
               <span> <label style={{color:"#000066"}}><strong style={{fontSize:"x-large"}}>Create Component</strong></label></span>
               <div style={{position:"absolute",top:"7px"}}>
               <div style={{position: 'fixed',left: '65%'}} ><Tooltip/></div>
    
    <button type='button' className='button' style={{ position: 'fixed', left: '68%',fontSize: "15px",background: "none",border: "none"}} onClick={close}><FaTimes/>
    </button>
               </div>
              
           <div style={{paddingBlock:'2%',background: '#f5f5f5'}}>
              <label>Title</label>
              <input style={{width:"99%",height:'21px', fontSize:'11pt'}} placeholder='Enter Component Title...'></input>
           </div>
              
              <div style={{    position: "relative",left: "66%",marginTop:"8px"}}>
              <span><button type='button' disabled style={{background:"#000066",color:"white",height: "42px"}}>Create & Open Popup</button></span>
              <span>  </span>
              <span><button type='button' disabled style={{background:"#000066",color:"white",height: "42px"}} >Create</button></span>
              </div>
              </div>
            </div>
            )}
          </Popup>
            
          </span>
    )}

export default AddStructure;
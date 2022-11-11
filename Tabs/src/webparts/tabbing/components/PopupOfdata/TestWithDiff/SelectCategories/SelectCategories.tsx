import * as React from 'react';
import {FaRegEdit, FaRegWindowRestore, FaTimes} from  'react-icons/fa';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Tooltip from '../../../popup';
function SelectCategories() {
    return(
        <div>
            <Popup
            trigger={<button className='button' type='button' style={{position: "absolute",
            left: "75%",
            top: "274px",background: "none",border: "none"}}> <FaRegWindowRestore /> </button>}
            modal
            nested
            contentStyle={{ width: '80%' , height:'100%',top: "0%"}}
          >
                {(close: React.MouseEventHandler<HTMLButtonElement>) => (
            <div style={{color:"green"}}>
                 <div>
                <div style={{fontSize: "x-large"}}>
                <strong>Select Categories</strong>
                <div style={{position:"absolute",top:"7px"}}>
                       <div style={{position: 'fixed',left: '80%'}} ><Tooltip/></div>
            
            <button type='button' className='button' style={{ position: 'fixed', left: '83%',fontSize: "15px",background: "none",border: "none"}} onClick={close}><FaTimes/>
            </button>
                       </div>
                       </div>
            </div>
    
            <div >
    
            </div>
    
    
            </div>
            )}
             </Popup>    
             </div>
    
    
            )}
    


export default SelectCategories;
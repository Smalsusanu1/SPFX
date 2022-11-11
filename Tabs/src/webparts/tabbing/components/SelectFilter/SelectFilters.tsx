import * as React from 'react';
import {FaRegSun,FaTimes} from  'react-icons/fa';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Tooltip from '../popup';
import { useMultiselect } from './Hooks';


const data = ["Title", "ItemRank", "AdminStatus", "DueDate", "Background","ValueAdded","Comments"];

function SelectFilter() {
    const { selected,setSelected, onChange } = useMultiselect([]);
    const [isCheckAll, setIsCheckAll] = React.useState(false);
 

    const handleSelectAll = () => {
        setIsCheckAll(!isCheckAll);
        setSelected(data.map(li => li));
        if (isCheckAll) {
            setSelected([]);
        }
      };
    return (
        <span>
             <Popup
            trigger={ <span><FaRegSun/></span> }
            position="center center"
            modal
            nested
            contentStyle={{ width: '50%' , height:'46%', top: "-24%"}}
          >
         {(close: React.MouseEventHandler<HTMLButtonElement>) => (
            <div >
                <div>
              <div >
               <span> <label style={{color:"#000066"}}><strong style={{fontSize:"x-large"}}>Select Filter</strong></label></span>
               <div style={{position:"absolute",top:"7px"}}>
               <div style={{position: 'fixed',left: '66%'}} ><Tooltip/></div>
    
    <button type='button' className='button' style={{ position: 'fixed', left: '68%',fontSize: "15px",background: "none",border: "none"}} onClick={close}><FaTimes/>
    </button>
               </div>
               </div>
            <div>
            <div>
                <p> <input
              value={"Select All"}
              type="checkbox"
              onChange={handleSelectAll}
            /><span >Select All</span></p>
      
      <ul style={{ listStyleType: "none" }}>
        {data.map((value) => (
          <li key={value}>
            <input
              id={value}
              type="checkbox"
              value={value}
            //   checked={isSelected(value)}
              onChange={onChange}
            />
            <label htmlFor={value}>{value}</label>
          </li>
        ))}
      </ul>
      <div>Selected: {selected.join()}</div>
    </div>
            </div>
              
              
              <div style={{    position: "relative",left: "77%"}}>
              <span><button type='button' style={{background:"#000066",color:"white"}}>Apply</button></span>
              <span>  </span>
              <span><button type='button' onClick={close} >Cancel</button></span>
              </div>
              </div>
            </div>
            )}
          </Popup>
            
          </span>
    )}

export default SelectFilter;
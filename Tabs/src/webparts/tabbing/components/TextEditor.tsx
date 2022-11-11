import * as React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FaBars , FaTimes,FaRegEdit} from "react-icons/fa";
import Tooltip from './popup';
import EditorConvertToHTML from './mynexttext';
import './textbutoont.css';
export default function PopupGfg(props:any){
  return(
   <Popup
    trigger={<button className='button' type='button'> <FaRegEdit/> </button>}
    modal
    nested
    contentStyle={{ width: '85%' , height:'86%'}}
  > 
        {(close: React.MouseEventHandler<HTMLButtonElement>) => (
    <div>
       <div>
        <div style={{fontSize: "x-large"}}>
        <strong>Edit Page</strong>
        <div style={{position:"absolute",top:"7px"}}>
               <div style={{position: 'fixed',left: '83%'}} ><Tooltip/></div>
    
    <button type='button' className='button' style={{ position: 'fixed', left: '86%'}} onClick={close}><FaTimes/>
    </button>
               </div>
               </div>

       <div style={{background:'#f5f5f5'}}>
        <div>
        <strong>Name</strong>
        <br></br>
        <input style={{width: '25%', height:'10%'}} value={"Component-Portfolio"} disabled/>
        <span>.aspx</span>
        <div style={{position: 'fixed', top: '13%', left: '40%' }}>
        <strong>Title</strong>
        <br></br>
        <input   style={{width: '237%', height:'10%'}} defaultValue={"Component-Portfolio"}/>
        </div>


        <div style={{position: 'fixed', top: '13%', left: '74%'}}>
        <strong>Item Rank</strong>
        <br></br>
        <select style={{width: '190%', height:'10%'}} id="item-Rank">
  <option value="Top">(7) Top Highlights</option>
  <option value="Featured">(6) Featured Item</option>
  <option value="Key">(5) Key Item</option>
  <option value="Relevant" >(4) Relevant Item</option>
  <option value="Featured">(3) Unsure</option>
  <option value="Relevant" >(2) to be verified</option>
  <option value="Featured">(1) Archieve</option>
  <option value="Key">(0) No Show</option>
</select>
</div>
        </div>
       
       </div>
       <div>
        <EditorConvertToHTML/>
                {/* <Editor
         toolbarClassName="toolbarClassName"
         wrapperClassName="wrapperClassName"
         editorClassName="editorClassName"
         wrapperStyle={{ width: '100%', border: "2px solid black", height:'50%' }}
      /> */}
      </div>
     <div>
      <div  style={{position: 'absolute',top: '80%'}}>
        <p>Created 16/09/2022 by <a href="#">Anubhav Shukla</a></p>
        <p>Last Modified --- by <a href="#">....</a></p>
        <p><FaTimes/><a href="#">Delete this item</a></p>
      </div>
      <div    style={{ position: 'absolute',left: '79%',top: '80%'}}>
        <p style={{position: 'absolute',left: '-104%',top: '22%'}} > <a href="#">Open out-of-the-box form </a></p>
        <button>Save</button>
        <button onClick={close}>Cancel</button>
      </div>
     </div>
              
    </div>
    </div>
        )}

  </Popup>
  )
};



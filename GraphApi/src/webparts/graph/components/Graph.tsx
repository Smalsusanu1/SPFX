import * as React from 'react';
import styles from './Graph.module.scss';
import { IGraphProps } from './IGraphProps';
import * as jquery from 'jquery';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { NeutralColors } from '@fluentui/theme';
import {useEffect, useState} from 'react';
import {SearchBoxs} from './Search';
import {SearchBoxcolumn} from './ColumnSearchBox';
import {
  TextField,
  PrimaryButton,
  Button,
  DialogFooter,
  DialogContent,
  Spinner,
  SpinnerSize
} from 'office-ui-fabric-react';

import { getTheme } from '@fluentui/react';

const theme = getTheme();
const style = {
  root: [
    {
      background: theme.palette.themePrimary,
      display: 'none',
      selectors: {
        ':hover': {
          background: theme.palette.themeSecondary,
        },
        '&.isExpanded': {
            display: 'block'
        },
        '&:hover .childElement': {
            color: 'white'
        }
      }
    }
  ]
};


export interface IGraphState{  
  items:[  
        {  
          "Title": "", 
          "PhoneNumber": "", 
          "Designation":"",
          "Email":"",
        }]  
}  
const[data, setData] = useState([]);
const[searchApiData, setSearchApiData] = useState([]);
const[filterVal, setFilterVal] = useState('');

export default class Graph extends React.Component<IGraphProps,IGraphState, {}> {
  
  public constructor(props: IGraphProps, state: IGraphState){  
    super(props); 
   

    this.state = {  
      items: [  
        {  
          "Title": "", 
          "PhoneNumber": "", 
          "Designation":"",
          "Email":"",
         
        }  
      ]  
    };  
  }  
  
public componentDidMount() {
     setInterval(
      () => this.fetchDatafromSharePointList(),
      1000
    );
  }

private fetchDatafromSharePointList()
{
    var reactHandler = this;
  
    var getRequest = new XMLHttpRequest();
    getRequest.open('GET', "https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Anubhav/_api/lists/getbyid('7abd66f6-8c75-46bf-ae12-fb6cc05effb9')/items?$select=Id,Title,Email,Designation,PhoneNumber&$filter=(Email ne null)", true);
    getRequest.setRequestHeader("Accept", "application/json");
      
    getRequest.onreadystatechange = function () {
  
      if (getRequest.readyState === 4 && getRequest.status === 200) {
        var result = JSON.parse(getRequest.responseText);
        
  
        reactHandler.setState({
          items: result.value
          
          
        });
      }
      else if (getRequest.readyState === 4 && getRequest.status !== 200) {
        console.log('Error Occurred !');
      }
    };
    getRequest.send();
  }
  
  
  public render(): React.ReactElement<IGraphProps> {
   
  
    return (  
  

<div className='ms-Grid' dir='ltr'>
  <SearchBoxs/>
 
  <div className='ms-Grid-row'>
  <div style={{background: theme.palette.themePrimary, color: theme.palette.white }} className='ms-Grid-col ms-sm6 ms-md6 ms-lg3'>Name<SearchBoxcolumn/></div>
  <div style={{background: theme.palette.themePrimary, color: theme.palette.white }} className='ms-Grid-col ms-sm6 ms-md6 ms-lg3'>Email<SearchBoxcolumn/></div>
  <div style={{background: theme.palette.themePrimary, color: theme.palette.white }} className='ms-Grid-col ms-sm6 ms-md6 ms-lg3'>Designation<SearchBoxcolumn/></div>
  <div style={{background: theme.palette.themePrimary, color: theme.palette.white }} className='ms-Grid-col ms-sm6 ms-md6 ms-lg3'>PhoneNumber<SearchBoxcolumn/></div>
</div>
   {this.state.items.map(function(item,key){
  return(
<div className='ms-Grid-row' key={key}>
  <div  style={{background: theme.palette.neutralSecondaryAlt, color: theme.palette.white }} className='ms-Grid-col ms-sm6 ms-md6 ms-lg3'>{item.Title}</div>
  <div style={{background: theme.palette.neutralSecondaryAlt, color: theme.palette.white }} className='ms-Grid-col ms-sm6 ms-md6 ms-lg3'>{item.Email}</div>
  <div style={{background: theme.palette.neutralSecondaryAlt, color: theme.palette.white }} className='ms-Grid-col ms-sm6 ms-md6 ms-lg3'>{item.Designation}</div>
  <div style={{background: theme.palette.neutralSecondaryAlt, color: theme.palette.white }} className='ms-Grid-col ms-sm6 ms-md6 ms-lg3'>{item.PhoneNumber}</div>
</div>

  )})}

</div>




    );  
  }
}

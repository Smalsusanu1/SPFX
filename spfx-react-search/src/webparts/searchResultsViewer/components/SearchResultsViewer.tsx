import * as React from 'react';
// import styles from './SearchResultsViewer.module.scss';
import {ISearchResultsViewerState} from './ISearchResultsViewerState'
import { ISearchResultsViewerProps } from './ISearchResultsViewerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import './TextField.Examples.scss'; 

import './TextField.Examples.scss'; 


export default class SearchResultsViewer extends React.Component<ISearchResultsViewerProps,ISearchResultsViewerState, {}> {
  

  constructor(props:ISearchResultsViewerProps,state:ISearchResultsViewerState){
    super(props);
  }
  public render(): React.ReactElement<ISearchResultsViewerProps> {
    const[data, setData] = React.useState([]);
    const[searchApiData,setSearchApiData] = React.useState([]);
    const [filterVal, setFilterVal] = React.useState('');
    React.useEffect(()=>{
        const fetchData=()=>{
            fetch(`https://smalsusinfolabs.sharepoint.com/sites/Dashboard/Anubhav/_api/lists/getbyid('7abd66f6-8c75-46bf-ae12-fb6cc05effb9')/items?$select=Id,Title,Email,Designation,PhoneNumber&$filter=(Email ne null)`)
            .then(response=>response.json())
            .then(json =>{
                setData(json)
                setSearchApiData(json)
            })
        }
        fetchData();
    },[])
    const handleFilter=(e:any)=>{
        if(e.target.value == ''){
            setData(searchApiData)

        }else{
           const filterResult= searchApiData.filter(item=> item.name.toLowerCase().include(e.target.value.toLowerCase()))
           if(filterResult.length>0){
            setData(filterResult)
           }else{
            setData([{"name":"No Result"}])
           }
           
        }
        setFilterVal(e.target.value)
            
    }
    return(
        <div>
            <div>
                <input placeholder='Search' value={filterVal} onInput={(e)=>handleFilter(e)}></input>
            </div>
            <table>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>
                    Phone
                </th>
                {
                    data.map(item=>{
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
  }
}

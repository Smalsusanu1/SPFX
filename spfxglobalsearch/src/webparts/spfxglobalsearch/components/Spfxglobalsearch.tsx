import * as React from 'react';
import styles from './Spfxglobalsearch.module.scss';
import { ISpfxglobalsearchProps } from './ISpfxglobalsearchProps';
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBInput } from 'mdb-react-ui-kit';


export interface ISpfxglobalsearchPropsState{    
  items:[    
        {    
          "EmployeeName": "",    
          "EmployeeId": "",    
          "Designation":"",    
          "Email":""  ,
          "Title":"",
          "PhoneNumber":"",
        }]    
}    
export default class Spfxglobalsearch extends React.Component<ISpfxglobalsearchProps,ISpfxglobalsearchPropsState, {}> {
  public constructor(props: ISpfxglobalsearchProps, state: ISpfxglobalsearchPropsState){    
    super(props);    
    this.state = {    
      items: [    
        {    
          "EmployeeName": "",    
          "EmployeeId": "",    
          "Designation":"",    
          "Email":""  ,
          "Title":"",
          "PhoneNumber":"",
        }    
      ]    
    };    
  }

  public componentDidMount(){    
    this.GetListData();
}   


GetListData() {
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


  public render(): React.ReactElement<ISpfxglobalsearchProps> {
    return (
      <div className="container" >

      <div className="text-center mb-3">
       <h1>Employee List Data</h1>
          </div>
          <input
            type="text"
            // value={this.props.data.Value}
            // onChange={this._onChange}
            />

<MDBInput label='Example label' id='form1' type='text' />  

        <table className="table table-striped table-bordered table-sm">
          <thead>
            <tr>
              <th><input placeholder="Global Search" type='text'/></th>
              <th className="th-sm">EmployeeName</th>
              <th className="th-sm">Email</th>
              <th className="th-sm">Designation</th>
              <th className="th-sm">Mobile Number</th>
            </tr>
          </thead>
      
          {this.state.items.map(function (item, key) {
      
            return (
              <tbody>
                <tr>
                  <td>{item.Title}</td>
                  <td>{item.Email}</td>
                  <td>{item.Designation}</td>
                  <td>{item.PhoneNumber}</td>
                </tr>
              </tbody>
           
            );
          })}
          </table>
      
      
      </div>
            
      );
    }}

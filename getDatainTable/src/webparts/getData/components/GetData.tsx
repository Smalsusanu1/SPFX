import * as React from 'react';
import { IGetDataProps } from './IGetDataProps';
import { Input } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.min.css";  




export interface IGetDatastate{    
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

export default class GetData extends React.Component<IGetDataProps, IGetDatastate,{}> {
  public constructor(props: IGetDataProps, state: IGetDatastate){    
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



  

  public render(): React.ReactElement<IGetDataProps> {
   
    return (


//       <div>
//       <Table  bordered hover size="sm">
//   <thead>
//     <tr>
//       <th >Student Name</th>
//       <th>Reg.no</th>
//       <th >Course</th>
//       <th >City Name</th>
//       <th >Percentage</th>
 
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>Rakesh</td>
//       <td>1123</td>
//       <td>CSE</td>
//       <td>Mumbai</td>
//       <td>86.9%</td>
 
//     </tr>
//     </tbody>
//     </Table>

// </div>

      
      <div className="container" >

      <div className="text-center mb-3">
       <h1>Employee List Data</h1>
          </div>
      
        <table className="table table-striped table-bordered table-sm">
          <thead>
            <tr>
      
              <th className="th-sm">EmployeeName</th>
              <th className="th-sm">Email</th>
              <th className="th-sm">Designation</th>
              <th className="th-sm">Mobile Number</th>
            </tr>
          </thead>
      
          {this.state.items.map(function (item, key) {
      
            return (
              <tbody>
                <tr className="striped bordered hover">
                  <td >{item.Title}</td>
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
  }
}
 
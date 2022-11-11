import * as React from 'react';
import styles from './Reactpopups.module.scss';
import { IReactpopupsProps } from './IReactpopupsProps';
import {IReactpopupsState} from './IReactpopupsState';
import { DefaultButton } from 'office-ui-fabric-react/lib';
import {MYModal} from "./testpopup"
import Postdata from "./postdata";
export default class Reactpopups extends React.Component<IReactpopupsProps,IReactpopupsState, {}> {

  constructor(props: IReactpopupsProps, state: IReactpopupsState) {
    super(props);
    this.state = {
      callchildcomponent:false,
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
    this.handler = this.handler.bind(this);
    this.Buttonclick = this.Buttonclick.bind(this);
  }
    handler() {
      this.setState({
        callchildcomponent: false
      })
    }
    private Buttonclick(e:any) {
      e.preventDefault();

     this.setState({ callchildcomponent:true });


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
  

  public render(): React.ReactElement<IReactpopupsProps> {
    return (
      <div className="container" >

<div className="text-center mb-3">
 <h1>Employee List Data</h1>
    </div>



    <td><div>

<DefaultButton onClick={(e) =>this.Buttonclick(e) } text="ADD" />
{ this.state.callchildcomponent && <MYModal   myprops={this.state} handler = {this.handler}/>}
 {/* { this.state.callchildcomponent && <MYModal test={this.props.test} description={this.props.description} myprops={this.state} handler = {this.handler}/>} */}
</div></td>

    
  <table className="table table-striped table-bordered table-sm">
    <thead>
      <tr>
         
        <th className="th-sm">EmployeeName</th>
        <th className="th-sm">Email</th>
        <th className="th-sm">Designation</th>
        <th className="th-sm">Mobile Number</th>
        <th className="th-sm">Action</th>
      </tr>
    </thead>


    {/* if (this.state.items) {
  var recipes =this.state.items.map((recipe, i) => {
    return <div key={i} className="col-8 offset-col-1 f-l relative m-t-10">
      <div className="col-6 f-l">
        <p className="col-8 f-l">{recipe.Title}</p>
        <td><DefaultButton onClick={(e) =>this.Buttonclick(e) } text="Edit" /></td>
      </div>
    </div>;
  });
} */}






    {this.state.items.map(function (item, key)  {

      return (
      <div>
        <tbody>
          <tr>
            <td>{item.Title}</td>
            <td>{item.Email}</td>
            <td>{item.Designation}</td>
            <td>{item.PhoneNumber}</td>
            <td><DefaultButton onClick={(e) =>this.Buttonclick(e) } text="Edit" />
          
            </td>
          </tr>
        </tbody>
        </div>
      
      );
    })
    }
   
    </table>

    <Postdata/>
    </div>
    
  )}}
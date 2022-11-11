import * as React from 'react';
import styles from './Gettingdata.module.scss';
import { IGettingdataProps } from './IGettingdataProps';
import { IGettingdataState } from './IGettingdataState';
import "bootstrap/dist/css/bootstrap.min.css";
import { Input } from "semantic-ui-react";
import { MYModal } from "./testpopup"
import { MYModals } from './testpopup1';
import { DefaultButton } from 'office-ui-fabric-react/lib';



export default class Gettingdata extends React.Component<IGettingdataProps, IGettingdataState, {}> {
  public constructor(props: IGettingdataProps, state: IGettingdataState) {
    super(props);
    this.state = {
      callchildcomponent: false,
      callchildcomponents: false,
      // ids: [{ id: 50 }, { id: 52 }, { id: 54 }, { id: 55 }],
      items: [
        {
          "EmployeeName": "",
          "EmployeeId": "",
          "Designation": "",
          "Email": "",
          "Title": "",
          "PhoneNumber": "",
          "Id": "",

        }
      ]
    };
    this.handler = this.handler.bind(this);
    this.Buttonclick = this.Buttonclick.bind(this);
    this.handlers = this.handlers.bind(this);
    this.Buttonclicks = this.Buttonclicks.bind(this);
  }


  handler() {
    this.setState({
      callchildcomponent: false
    })
  }

  private Buttonclick(e: any) {
    e.preventDefault();

    this.setState({ callchildcomponent: true });


  }

  handlers() {
    this.setState({
      callchildcomponents: false
    })
  }
  private Buttonclicks(e: any) {
    e.preventDefault();

    this.setState({
      callchildcomponents: true,


    });


  }


  public componentDidMount() {
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



  public render(): React.ReactElement<IGettingdataProps> {

    return (
      <div className="container" >

        <div className="text-center mb-3">
          <h1>Employee List Data</h1>
        </div>



        <td><div>

          <DefaultButton onClick={(e) => this.Buttonclick(e)} text="ADD" />

          {this.state.callchildcomponent && <MYModal test={this.props.test} description={this.props.description} myprops={this.state} handler={this.handler} />}
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

          {this.state.items.map(function (item, key) {

            return (
              <tbody>
                <tr>
                  <td>{item.Title}</td>
                  <td>{item.Email}</td>
                  <td>{item.Designation}</td>
                  <td>{item.PhoneNumber}</td>
                  <td><DefaultButton onClick={(e) => this.Buttonclicks(e)} text="Edit" /></td>
                </tr>
              </tbody>

            );
          })}

        </table>
    
      </div>

    );
  }
}

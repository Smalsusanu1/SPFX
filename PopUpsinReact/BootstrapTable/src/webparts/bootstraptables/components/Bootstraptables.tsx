import * as React from 'react';
// import styles from './Bootstraptables.module.scss';
import { IBootstraptablesProps } from './IBootstraptablesProps';
// import {IBootstraptablesStates} from './IBootstraptablesStates';
import { escape } from '@microsoft/sp-lodash-subset';
import BootstrapTable from 'react-bootstrap-table-next';
import { SPComponentLoader } from '@microsoft/sp-loader';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import PopupGfg from './popup';

//schema of the data 
const empTablecolumns = [
  {
    dataField: "Title",
    text: "Employee Name",
    headerStyle: { backgroundColor: '#1367ed' },
    sort: true,
    filter: textFilter()
  },
  {
    dataField: "Email",
    text: "Email",
    headerStyle: { backgroundColor: '#1367ed' },
    sort: true,
    filter: textFilter()
  },
  {
    dataField: "Designation",
    text: "Designation",
    headerStyle: { backgroundColor: '#1367ed' },
    sort: true,
    filter: textFilter()
  },
  {
    dataField: "PhoneNumber",
    text: "PhoneNumber",
    headerStyle: { backgroundColor: '#1367ed' },
    sort: true,
    filter: textFilter()
  },
  {
    dataField: "follow",
    text: "Follow",
    formatter: () => {
      return (
        <button
          className="btn btn-primary" onChange={()=>Buttonclick(1)}>
          Edit
        </button>
      );
    },
  }
  
];


export interface IBootstraptablesStates {
  employeeList: any[]
}



export default class Bootstraptables extends React.Component<IBootstraptablesProps,IBootstraptablesStates, {}> {
  constructor(props: IBootstraptablesProps, state: IBootstraptablesStates) {
    super(props);
    this.state = {
      employeeList: []
    }
    
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
          employeeList: result.value
        });
      }
      else if (getRequest.readyState === 4 && getRequest.status !== 200) {
        console.log('Error Occurred !');
      }
    };
    getRequest.send();
  }

  public componentDidMount() {
    this.GetListData();
  }
  public render(): React.ReactElement<IBootstraptablesProps> {
    let cssURL = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
    SPComponentLoader.loadCss(cssURL);


    return (
      <div >   
        {/* className={styles.table} */}
        <div >
          {/* <div >
            <div >
              <span >Welcome to SharePoint!</span>
              <p >List items in react-bootstrap-table-next.</p>
            </div>
            <div>
              <ToolkitProvider
                keyField="id"
                data={this.state.employeeList}
                columns={empTablecolumns}
                search
              >
                {
                  props => (
                    <div>
                      <h3>Input something at below input field:</h3>
                      <SearchBar {...props.searchProps} />
                      <hr />
                      <BootstrapTable
                        keyField='id' data={this.state.employeeList} columns={empTablecolumns} filter={filterFactory()} headerClasses="header-class" />
                    </div>
                  )
                }
              </ToolkitProvider>
            </div>





          </div> */}
          <PopupGfg/>
          <BootstrapTable keyField='id' data={this.state.employeeList} columns={empTablecolumns} filter={filterFactory()} headerClasses="header-class" />
        </div>
      </div>

    );
  }
}
function Buttonclick(props:any) {
  return (
    <PopupGfg/>
  ) 
}


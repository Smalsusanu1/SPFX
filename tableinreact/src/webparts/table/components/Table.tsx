import * as React from 'react';
import styles from './Table.module.scss';
import { ITableProps } from './ITableProps';
import BootstrapTable from 'react-bootstrap-table-next';
import { SPComponentLoader } from '@microsoft/sp-loader';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';



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
  }];


export interface ITableStates {
  employeeList: any[]
}


export default class Table extends React.Component<ITableProps, ITableStates, {}> {
  constructor(props: ITableProps, state: ITableStates) {
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
  public render(): React.ReactElement<ITableProps> {
    let cssURL = "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css";
    SPComponentLoader.loadCss(cssURL);


    return (
      <div className={styles.table}>
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
          <BootstrapTable keyField='id' data={this.state.employeeList} columns={empTablecolumns} filter={filterFactory()} headerClasses="header-class" />
        </div>
      </div>

    );
  }
}

import * as React from 'react';
import styles from './GetCall.module.scss';
import { IGetCallProps } from './IGetCallProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { IGetCallstate } from './GetCallState';
import { SPOperations } from '../../Services/SPservices';
import {Dropdown, IDropdownOption} from "office-ui-fabric-react";


export default class GetCall extends React.Component<IGetCallProps, IGetCallstate,{}> {
  public _spOps: SPOperations;
  constructor(props:IGetCallProps){
    super(props);
    this._spOps = new SPOperations();
    this.state={listTitles:[]};
  }
  public componentDidMount(): void {
    this._spOps.GetAllList(this.props.context)
    .then((result:IDropdownOption[])=>{
      this.setState({listTitles:result});
    })
  }

  public render(): React.ReactElement<IGetCallProps> {
     let option: IDropdownOption[]=[]
    return (
     <section>
      <h1>My First get request file.</h1>
      <div id='dv_parent'>
           <Dropdown options={this.state.listTitles}></Dropdown>
           <table></table>
      </div>
     </section>
    );
  }
}

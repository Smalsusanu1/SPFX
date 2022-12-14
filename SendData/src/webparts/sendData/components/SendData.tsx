import * as React from 'react';    
import styles from './SendsData.module.scss';
import { ISendDataProps } from './ISendDataProps';  
import { IDataSenderWpState } from './IDataSenderWpState';  
import IEventData from '../../RxJsEventEmitter/IEventData';  
import { RxJsEventEmitter } from '../../RxJsEventEmitter/RxJsEventEmitter';  
  
export default class DataSenderWp extends React.Component<ISendDataProps, IDataSenderWpState> {  
  
  private readonly eventEmitter: RxJsEventEmitter = RxJsEventEmitter.getInstance();  
  
  public constructor(props:ISendDataProps, state:IDataSenderWpState){  
    super(props);  
    this.state = {  
      userName: "",  
      password : ""  
    };  
  }  
  
  public render(): React.ReactElement<ISendDataProps> {  
    return (  
      <div className={styles.dataSenderWp}>  
        <h2>Sender Web Part</h2>  
        <div>User Name:</div>  
        <div>  
          <input type="text" value={this.state.userName} onChange={this._onChangeUserName.bind(this)} />  
        </div>  
        <div>Password:</div>  
        <div>  
          <input type="text" value={this.state.password} onChange={this._onChangePassword.bind(this)} />  
        </div>  
      </div>  
    );  
  }  
  
  private _onChangeUserName(event: any)  
  {  
    this.setState({  
      userName : event.target.value  
    });  
    this.sendData(event.target.value, this.state.password);  
  }  
  
  private _onChangePassword(event: any)  
  {  
    this.setState({  
      password : event.target.value  
    });  
    this.sendData(this.state.userName, event.target.value);  
  }  
  
  private sendData(userName:string, password:string): void   
  {  
    var eventBody = {  
      sharedUserName: userName,  
      sharedUserPassword:password  
    } as IEventData;  
  
    this.eventEmitter.emit("shareData", eventBody);  
  }  
}  
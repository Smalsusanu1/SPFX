import * as React from 'react';  
import styles from './DataSenderWp.module.scss';  
import { IDataSenderWpProps } from './IDataSenderWpProps';  
  
import { escape } from '@microsoft/sp-lodash-subset';  
  
import { IDataSenderWpState } from './IDataSenderWpState';  
// import IEventData from '../../RxJsEventEmitter/IEventData';  
// import { RxJsEventEmitter } from '../../RxJsEventEmitter/RxJsEventEmitter';  
  
export default class DataSenderWp extends React.Component<IDataSenderWpProps, IDataSenderWpState> {  
  
 
  public render(): React.ReactElement<IDataSenderWpProps> {  
    return (  
    <div></div>
    );  
  }  
  
}
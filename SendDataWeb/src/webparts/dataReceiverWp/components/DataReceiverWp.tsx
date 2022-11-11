import * as React from 'react';  
// import styles from './DataReceiverWp.module.scss';  
import { IDataReceiverWpProps } from './IDataReceiverWpProps';  
import { escape } from '@microsoft/sp-lodash-subset';  
  
import { IDataReceiverWpState } from './IDataReceiverWpState';  
import ContactSearch from './ContactSearch';
// import IEventData from '../../RxJsEventEmitter/IEventData';  
// import {RxJsEventEmitter} from '../../RxJsEventEmitter/RxJsEventEmitter';  
  
export default class DataReceiverWp extends React.Component<IDataReceiverWpProps, IDataReceiverWpState>   
{  

  public render(): React.ReactElement<IDataReceiverWpProps> {  
    return (  
     <div>
      <ContactSearch/>
     </div>
    );  
  }  
  
}  
import * as React from 'react';
import { IThirdWebPProps } from './IThirdWebPProps';
import EditEmployeeContact from '../../firstWebP/components/EditEmployeeContact';

export default class ThirdWebP extends React.Component<IThirdWebPProps, {}> {
  public render(): React.ReactElement<IThirdWebPProps> {
   
 
    return (
       <div>
        webpart 3
        <EditEmployeeContact id={7}/>
       </div> 
    ); 
  }
}

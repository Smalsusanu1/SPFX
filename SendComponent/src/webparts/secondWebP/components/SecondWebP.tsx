import * as React from 'react';
// import styles from './SecondWebP.module.scss';
import { ISecondWebPProps } from './ISecondWebPProps';
import '../../foundation.scss';
import Popupss from './Popups';

export default class SecondWebP extends React.Component<ISecondWebPProps, {}> {
  public render(): React.ReactElement<ISecondWebPProps> {
    
 
    return (
    <div>
      webpart 2
     {/* < EmployeeDetails/> */}
     <Popupss/>
    </div>
    );
  }
}

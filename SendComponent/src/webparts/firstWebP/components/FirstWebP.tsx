import * as React from 'react';
// import styles from './FirstWebP.module.scss';
import { IFirstWebPProps } from './IFirstWebPProps';
import EmployeeDetails from './EditPopUp';

export default class FirstWebP extends React.Component<IFirstWebPProps, {}> {
  public render(): React.ReactElement<IFirstWebPProps> {
   

    return (
      <div>
        webpart 1
        <EmployeeDetails/>
      </div>
    );
  }
}

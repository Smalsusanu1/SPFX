import * as React from 'react';
// import styles from './Testtaiil.module.scss';
import { ITesttaiilProps } from './ITesttaiilProps';
import { escape } from '@microsoft/sp-lodash-subset';
import MyTable from './Tailwindc';
import './../../../tailwind.css';


export default class Testtaiil extends React.Component<ITesttaiilProps, {}> {
  public render(): React.ReactElement<ITesttaiilProps> {
    
    return (
        <MyTable/>
    );
  }
}

import * as React from 'react';
// import styles from './Tabbing.module.scss';
import { ITabbingProps } from './ITabbingProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Groupby from './GroupBy';

export default class Tabbing extends React.Component<ITabbingProps, {}> {
  public render(): React.ReactElement<ITabbingProps> {
   
    return (
     <div>
      <Groupby/>
     </div>
      );
  }
}

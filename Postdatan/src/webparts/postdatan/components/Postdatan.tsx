import * as React from 'react';
// import styles from './Postdatan.module.scss';
import { IPostdatanProps } from './IPostdatanProps';
import Table from './Postdatan';
// import { Getdatas } from './getdatas';
export default class Postdatan extends React.Component<IPostdatanProps, {}> {
  public render(): React.ReactElement<IPostdatanProps> {
    return (
      <div>
    <h1>GetData</h1>
    {/* <Getdatas/> */}
     </div>
    );
  }
}



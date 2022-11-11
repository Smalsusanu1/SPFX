import * as React from 'react';
import styles from './Editpopup.module.scss';
import { IEditpopupProps } from './IEditpopupProps';
import PopupEdit from "./editpopups"

export default class Editpopup extends React.Component<IEditpopupProps, {}> {
  public render(): React.ReactElement<IEditpopupProps> {

    return (
      <div>
        <h1>Employee Details List</h1>

        <PopupEdit />
      </div>
    );
  }
}

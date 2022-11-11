import * as React from 'react';
import styles from './BootAnubhav.module.scss';
import { IBootAnubhavProps } from './IBootAnubhavProps';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { escape } from '@microsoft/sp-lodash-subset';

export default class BootAnubhav extends React.Component<IBootAnubhavProps, {}> {
  public render(): React.ReactElement<IBootAnubhavProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <section className={`${styles.bootAnubhav} ${hasTeamsContext ? styles.teams : ''}`}>
        {/* <div className={styles.welcome}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
        </div> */}
        <div>
        <table className='table table-dark'>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Anubhav</td>
          <td>Shukla</td>
          <td>@anubhav</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Hitesh</td>
          <td>Varshanay</td>
          <td>@hitesh</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Vivek</td>
          <td>Raj</td>
          <td>@vivek</td>
        </tr>
      </tbody>
    </table>
      </div>
      </section>
    );
  }
}

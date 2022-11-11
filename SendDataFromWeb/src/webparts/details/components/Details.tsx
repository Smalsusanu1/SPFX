import * as React from 'react';
import styles from './Details.module.scss';
import { IDetailsProps } from './IDetailsProps';

export default class Details extends React.Component<IDetailsProps, {}> {
  public render(): React.ReactElement<IDetailsProps> {
    return (
      <div className={styles.details}>
        <div className={styles.container}>
          <div className={styles.title}>{this.props.description} Webpart</div>
          <div className={styles.submenuItemActive}>
            {
              this.props.needsConfiguration &&
              <button onClick={() => this.props.onConfigure()}>Configure</button>
              || (this.props.product == '' && "Select Product from menu" || "You have selected: " + this.props.product)
            }
          </div>
        </div>
      </div>
    );
  }
}
import * as React from 'react';
// import styles from './Profile.module.scss';
import { IProfileProps } from './IProfileProps';
import * as $ from 'jquery';
import Groupby from '../../../../node_modules/portfolio-profiles/lib/webparts/portfolioProfiles/components/GroupBys';
import Tooltip from '../../../../node_modules/portfolio-profiles/lib/webparts/portfolioProfiles/components/popup';
import Diff from '../../../../node_modules/portfolio-profiles/lib/webparts/portfolioProfiles/components/PopupOfdata/TestWithDiff/Difff';
import CreateContact from './CreateContact';
export default class Profile extends React.Component<IProfileProps, {}> {
  public render(): React.ReactElement<IProfileProps> {
    return (
    <div>
      {/* <Tooltip/>
      <Diff/> */}  
      <CreateContact/>
      {/* <Groupby/> */}
    </div>
    );
  }
}

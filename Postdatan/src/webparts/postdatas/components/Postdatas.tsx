import * as React from 'react';
// import styles from './Postdatas.module.scss';
import * as utils from './utils';
import { IPostdatasProps } from './IPostdatasProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {PostRequestHooks} from './postdata';
import {IPostdProps} from './IPostd';
export default class Postdatas extends React.Component<IPostdatasProps, {}> {
  private _addLink(link:IPostdatasProps){
    let _spLink={
      Title:link.title,
      Email:link.description,
      Designation:link.url,
    }
    console.log("parent component", JSON.stringify(link));
  }
  public render(): React.ReactElement<IPostdatasProps> {
  
    return (
      <div>
        <PostRequestHooks handleAddLink={(link: IPostdatasProps)=>this._addLink(link)}/>
        <h1>Post Data</h1>
        </div>

    );
  }
}

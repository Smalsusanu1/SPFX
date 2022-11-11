import * as React from 'react';
import styles from './Postdata.module.scss';
import { IPostdataProps } from './IPostdataProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { SPHttpClient, ISPHttpClientOptions, SPHttpClientResponse } from '@microsoft/sp-http';

export default class Postdata extends React.Component<IPostdataProps, {}> {
  myRef: React.RefObject<unknown>;
  constructor(props:IPostdataProps) {
    super(props);
    this.myRef = React.createRef();
  }
onFocus() {
  this.myRef.current.value ="focus"
}

onBlur() {
  this.myRef.current.value = "blur"
}

  public render(): React.ReactElement<IPostdataProps> {
   

    return (
      <div>
        <input
          {ref= {this.myRef}}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
        />
      </div>
    );
  }
}


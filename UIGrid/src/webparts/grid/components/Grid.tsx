import * as React from 'react';
import styles from './Grid.module.scss';
import { IGridProps } from './IGridProps';
import { escape } from '@microsoft/sp-lodash-subset';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Accordion } from "@pnp/spfx-controls-react/lib/Accordion";
import {
  TextField,
  PrimaryButton,
  Button,
  DialogFooter,
  DialogContent,
  Spinner,
  SpinnerSize
} from 'office-ui-fabric-react';


export default class Grid extends React.Component<IGridProps, {}> {
  public render(): React.ReactElement<IGridProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
      <div>
       <div className='ms-Grid' dir='ltr'>
        <div className='ms-Grid-row'>
          <div className='ms-Grid-col ms-sm6 ms-md4 ms-lg6'>This is a responsive Grid , That we use.</div>
          <div className='ms-Grid-col ms-sm6 ms-md8 ms-lg6'>Life is for couragous people, not for crul. </div>
          <div className='ms-Grid-row'>
          <div className='ms-Grid-col ms-sm6 ms-md4 ms-lg6'>Fluent UI Text Box</div>
          <div className='ms-Grid-col ms-sm6 ms-md8 ms-lg6'><TextField></TextField> </div>
          </div>
          <div className='ms-Grid-row'>
          <div className='ms-Grid-col ms-sm6 ms-md4 ms-lg6'>Fluent UI Button</div>
          <div className='ms-Grid-col ms-sm6 ms-md8 ms-lg6'><Button text='fluentUI'></Button></div>
          </div>
          <div className='ms-Grid-row'>
          <div className='ms-Grid-col ms-sm6 ms-md4 ms-lg6'>Primary Button </div>
          <div className='ms-Grid-col ms-sm6 ms-md8 ms-lg6'><PrimaryButton text='primary button'>My Primary button</PrimaryButton></div>
          </div>
          <div className='ms-Grid-row'>
          <div className='ms-Grid-col ms-sm6 ms-md4 ms-lg6'>Spinner</div>
          <div className='ms-Grid-col ms-sm6 ms-md8 ms-lg6'><Spinner> load data</Spinner> </div>
          </div>
          <div className='ms-Grid-row'>
          <div className='ms-Grid-col ms-sm6 ms-md4 ms-lg6'>DialogContent</div>
          <div className='ms-Grid-col ms-sm6 ms-md8 ms-lg6'><DialogContent > this content is DialogContent</DialogContent></div>
        </div>
        </div>

       </div>




      <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
        <TextField label="Disabled" disabled defaultValue="I am disabled" />
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
        <TextField label="Standard" />
        </div>
        <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
        <TextField label="Required " required />
        </div>
      </div>
      <Accordion title="Section 1" defaultCollapsed={false}  key='1'>
        <div >
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-md6 ms-lg4">
                    <TextField label="Disabled" disabled defaultValue="I am disabled" />
                </div>
            </div>
        </div>
    </Accordion>
            </div>
        
    );
  }
}

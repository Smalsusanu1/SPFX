import * as React from 'react';
// import styles from './TextEditor.module.scss';
import { ITextEditorProps } from './ITextEditorProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Editor from './texte';
export default class TextEditor extends React.Component<ITextEditorProps, {}> {
  public render(): React.ReactElement<ITextEditorProps> {
    
    return (
      <div>
        <Editor/>
      </div>
    );
  }
}

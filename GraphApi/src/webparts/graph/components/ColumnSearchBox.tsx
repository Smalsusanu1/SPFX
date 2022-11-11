import * as React from 'react';
import { SearchBox } from '@fluentui/react/lib/SearchBox';
import { IIconProps } from '@fluentui/react/lib/Icon';

const filterIcon: IIconProps = { iconName: 'Filter' };

export const SearchBoxcolumn = () => 
<SearchBox placeholder="Filter" iconProps={filterIcon}   
   onEscape={ev => {
    console.log('Custom onEscape Called');
  }}
  onClear={ev => {
    console.log('Custom onClear Called');
  }} 
   onChange={(_, newValue) => console.log('SearchBox onChange fired: ' + newValue)}

   onSearch={newValue => alert('SearchBox onSearch fired: ' + newValue)} />;

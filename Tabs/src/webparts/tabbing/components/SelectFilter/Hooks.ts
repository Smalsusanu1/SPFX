import * as React from 'react';

export const useMultiselect = (initialValue: string[]) => {
  const [selected, setSelected] = React.useState<string[]>(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const index = selected.indexOf(value);
    if (index > -1) {
      setSelected([...selected.slice(0, index), ...selected.slice(index + 1)]);
    } else {
      setSelected([...selected, ...[value]]);
    }
  };

  

  return { selected,setSelected, onChange };
};

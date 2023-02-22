import React from 'react';
import {icons, TIcon} from '../icons';

type Props = {
  name: TIcon;
};

export const Icon = ({name}: Props) => {
  const Component = icons[name];
  return <Component fill="#ffffff" />;
};

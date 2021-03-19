import React from 'react';

import * as BsIcons from 'react-icons/bs';
import Activity from './pages/activity';
import Pending from './pages/pending';

export const SidebarData = [
  {
    title: 'Create Activity',
    icon: <BsIcons.BsFillPersonPlusFill />,
    cName: 'nav-text'
  },
  
  {
    title: 'Pending Activities',
    icon: <BsIcons.BsFillPersonFill />,
    cName: 'nav-text'
  },
  {
    title: 'Completed Activities',
    icon: <BsIcons.BsFillPersonCheckFill />,
    cName: 'nav-text'
  },
];
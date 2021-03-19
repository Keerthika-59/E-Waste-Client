import React from 'react';

import * as BsIcons from 'react-icons/bs';


export const SidebarData = [
  {
    title: 'Create Activity',
    path: '/UserDash',
    icon: <BsIcons.BsFillPersonPlusFill />,
    cName: 'nav-text'
  },
  {
    title: 'Pending Activities',
    path: '/pending',
    icon: <BsIcons.BsFillPersonFill />,
    cName: 'nav-text'
  },
  {
    title: 'Completed Activities',
    path: '/completed',
    icon: <BsIcons.BsFillPersonCheckFill />,
    cName: 'nav-text'
  },
];
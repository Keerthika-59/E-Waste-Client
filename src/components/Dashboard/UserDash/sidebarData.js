import React from 'react';

import * as BsIcons from 'react-icons/bs';
import Activity from './pages/activity';
import Pending from './pages/pending';

export const SidebarData = [
  {
    title: 'Create Activity',
    path: '/UserDash',
    icon: <BsIcons.BsFillPersonPlusFill />,
    handleButton: function () {
      return (
        <Activity/>
      )
    },
    cName: 'nav-text'
  },
  
  {
    title: 'Pending Activities',
    // path: '/pending',
    handleButton : function () {
      return(
        <Pending/>
      )
    },
    icon: <BsIcons.BsFillPersonFill />,
    cName: 'nav-text'
  },
  {
    title: 'Completed Activities',
    // path: '/completed',
    handleButton: function () {
      console.log('I am completed');
    },
    icon: <BsIcons.BsFillPersonCheckFill />,
    cName: 'nav-text'
  },
];
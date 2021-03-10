import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io5';

export const SidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Projects',
      path: '/projects',
      icon: <IoIcons.IoAlbums />,
      cName: 'nav-text'
    }
  ];
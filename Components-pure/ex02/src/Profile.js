import {Header} from './Header.js'
import { Avatar } from './Avatar.js';
import Panel from './Panel.js';
import React from 'react';

export default function Profile({ person }) {
  
  return (
    <Panel>
      <Header person={person}/>
      <Avatar person={person}/>
    </Panel>
  )
}
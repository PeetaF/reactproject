import React from "react";

/* import AppHeader from '../organisms/AppHeader';
import AppHeader from '../organisms/AppFooter'; */

import { AppHeader, AppFooter} from '../organisms';

export default function Default(props) {
  return (
    <div className="wrapper"> 
      <AppHeader />
      {props.children}
      <AppFooter />     
    </div>
  );
}
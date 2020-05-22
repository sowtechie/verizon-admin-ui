import React from "react";
import './AppHeaderLayout.scss';
import AppHeader from "./AppHeader";

export class AppHeaderLayout extends React.Component {
  render() {
    return (
      <div className="header-layout-wrapper">
        <div className="header-wrapper">
          <AppHeader />
        </div>
      </div>
    )
  }
}
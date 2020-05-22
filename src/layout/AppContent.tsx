import React from "react";
import './AppContent.scss';
import Namespaces from "../components/Namespaces";
import EditNamespace from "../components/EditNamespace";

export class AppContent extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        <div>
          <Namespaces />
        </div>

        <div>
          <EditNamespace />
        </div>
      </div>
    )
  }
}

import React, { forwardRef } from "react";
import "./Namespaces.scss";
import MaterialTable, { Column } from 'material-table';

export default class Namespaces extends React.Component {

    render() {
        const httpParameters = [
            {
                "key": "http.accept.ranges",
                "displayName": "Accept Ranges in bytes/kilobytes",
                "Type": "Header",
                "HttpParameterName": "Accept-Ranges",
                "namespace": "HTTP"
            },
            {
                "key": " http.cachecontrol",
                "displayName": "cache control in Max-age Ex:2592000",
                "Type": "cookie",
                "HttpParameterName": "cache-control",
                "namespace": "generic"
            }
        ];

        return (
            <div className="content-wrapper">
                <h2 className="header">
                    Namespaces
                </h2>
                <hr></hr>
                <div>
                    <MaterialTableDemo />
                </div>
            </div>
        )
    }
}

class RowData {
    key: string;
    displayName: string = '';

    constructor(dn: string) {
        this.key = '';
        this.displayName = dn;
    }
}

  interface TableState {
    columns: Array<Column<RowData>>; //Column[]
    data: Array<RowData>;
    //data: RowData[];
  }
  
  
  export function MaterialTableDemo() {
    // const myRow = new Row('Accept Ranges in bytes/kilobytes');
    const [state, setState] = React.useState<TableState>({
      columns: [
        { title: 'Key', field: 'key' },
        { title: 'Namespace', field: 'displayName' },
      ],
      data: [
        {
            "key": "http.accept.ranges",
            "displayName": "Accept Ranges in bytes/kilobytes",
        },
        {
            "key": " http.cachecontrol",
            "displayName": "cache control in Max-age Ex:2592000"
        }
      ],
    });
  
    return (
      <MaterialTable
        title="Namespaces"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
                //validation
                //backend submit
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                setState((prevState) => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            }),
        }}
      />
    );
  }
  
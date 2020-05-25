import React from "react";
import "./EditNamespace.scss";
import { Button } from "@material-ui/core";

export default class EditNamespace extends React.Component {

    constructor(props) {
        super(props);
        this.state = { key: '', displayName: '', Type: '', HttpParameterName: '', namespace: '' };
    }

    createNewParam() {
        console.log('create new param');

    };

    handleChange(event) {
        this.setState({ key: event.target.value });
    }

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

        const HttpParameters = ({ httpParameters }) => (
            <div>
                <table className="w-100">
                    <tr className="table-header table-data">
                        <th>
                            key
                        </th>
                        <th>
                            displayName
                        </th>
                        <th>
                            Type
                        </th>
                        <th>
                            HttpParameterName
                        </th>
                        <th>
                            Namespace
                        </th>
                    </tr>
                    {httpParameters.map(httpParameter => (
                        <tr className="table-data">
                            <td>{httpParameter.key}</td>
                            <td>{httpParameter.displayName}</td>
                            <td>{httpParameter.Type}</td>
                            <td>{httpParameter.HttpParameterName}</td>
                            <td>{httpParameter.namespace}</td>
                        </tr>
                    ))}
                </table>
            </div>
        );

        return (
            <div className="content-wrapper">
                <h2 className="header">
                    Create/Update Namespace
                </h2>
                <hr></hr>
                <div>
                    <form>
                        <div className="form-field">
                            <div>
                                <label>
                                    <span className="label-class">
                                        Key:
                                    </span>
                                </label>
                            </div>
                            <input type="text" name="key" />
                            {/* <input type="text" name="key" onChange={this.handleChange} value={this.state.key} /> */}
                        </div>
                        <div className="form-field">
                            <div>
                                <label>
                                    <span className="label-class">
                                        displayName:
                                    </span>
                                </label>
                            </div>
                            <input type="text" name="displayName" />
                        </div>
                        <div className="form-field">
                            <div>
                                <label>
                                    <span className="label-class">
                                        Type:
                                    </span>
                                </label>
                            </div>
                            <select>
                                <option value="Header">Header</option>
                                <option value="Cookie">Cookie</option>
                            </select>
                        </div>
                        <div className="form-field">
                            <div>
                                <label>
                                    <span className="label-class">
                                        HttpParameterName:
                                    </span>
                                </label>
                            </div>
                            <input type="text" name="key" />
                        </div>
                        <div className="form-field">
                            <div>
                                <label>
                                    <span className="label-class">
                                        namespace:
                                    </span>
                                </label>
                            </div>
                            <select>
                                <option value="NS1">Namespace1</option>
                                <option value="NS2">Namespace2</option>
                            </select>
                        </div>
                        <div className="submit-button">
                            <Button onClick={this.createNewParam} variant="contained">Create</Button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


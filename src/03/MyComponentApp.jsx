import React, { Component } from "react";
import MyComponent from "./MyComponent";

class MyComponentApp extends Component {
    render() {
        return (
            <div className="body">
                <MyComponent name="내용용" />
            </div>
        );
    }
}

export default MyComponentApp;
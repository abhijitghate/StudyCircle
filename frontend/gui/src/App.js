import React, { Component } from "react";
import "antd/dist/antd.css";
import CustomLayout from "./container/Layout";
import ImageList from "./container/ImageListView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomLayout>
          <ImageList />
        </CustomLayout>
      </div>
    );
  }
}

export default App;

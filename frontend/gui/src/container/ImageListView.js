import React from "react";
import axios from "axios";
import EditableTagGroup from "./ImageTags";

class ImageList extends React.Component {
  state = {
    articles: [],
    tags: [],
    inputVisible: false,
    inputValue: ""
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api").then(res => {
      this.setState({
        tags: res.data
      });
      //console.log(res.data);
    });
  }

  render() {
    let allImages = this.state.tags.map(d => {
      console.log("this is the let");
      return (
        <div>
          <img src={d.image} height="200" width="200" />
          <EditableTagGroup imageId={d.id} />
        </div>
      );
    });
    return <div>{allImages}</div>;
  }
}

export default ImageList;

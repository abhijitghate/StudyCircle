import React from "react";
import axios from "axios";

import { Tag, Input, Tooltip, Icon } from "antd";

class EditableTagGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      inputVisible: false,
      inputValue: ""
    };
  }

  handleClose = removedTag => {
    console.log(removedTag);
    axios
      .delete("http://127.0.0.1:8000/api/delete/" + removedTag.id)
      .then(res => {
        console.log(res.data);
      });
    const tags = this.state.tags.filter(tag => tag.id !== removedTag.id);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      let tagObj = {
        tag: inputValue,
        image: this.props.imageId
      };
      tags = [...tags, tagObj];
      axios.post("http://127.0.0.1:8000/api/create/", tagObj).then(res => {
        this.setState({
          tags: [...this.state.tags, res.data],
          inputVisible: false,
          inputValue: ""
        });
      });
    }

    console.log(tags);
  };

  saveInputRef = input => (this.input = input);

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/" + this.props.imageId).then(res => {
      this.setState({
        tags: res.data.tags_set
      });
    });
  }
  render() {
    const { tags, inputVisible, inputValue } = this.state;
    const { handleClose } = this;
    return (
      <div>
        {Object.keys(tags).map(function(k) {
          const tag = tags[k];
          const isLongTag = true;
          const tagElem = (
            <Tag
              key={tag.tag}
              closable={tag.id}
              afterClose={() => handleClose(tag)}
            >
              {isLongTag ? `${tag.tag.slice(0, 20)}` : tag.tag}
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag.tag} key={tag.tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag
            onClick={this.showInput}
            style={{ background: "#fff", borderStyle: "dashed" }}
          >
            <Icon type="plus" /> New Tag
          </Tag>
        )}
      </div>
    );
  }
}

export default EditableTagGroup;

import React, { Component } from "react";

// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../Tag/Tags.css'

export default class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
  }

  componentDidMount() {
    let { value } = this.props;
    if (value) {
      this.setState({ tags: value });
    }
    this.listenForEnterKey();
  }

  addTag = (tag) => {
    let newTags = this.state.tags;
    let arr=this.props.arr;
    arr.push(tag);
    this.setState({ tags: newTags });
    this.props.onAddItem(newTags);
  };

  // removeItemFromState = (tags, tg) => {
  //   let newTags = tags;
  //   let arr = newTags.filter((tag) => tag !== tg);
  //   this.setState({ tags: arr });
  //   this.props.onAddItem(newTags);
  // };

  listenForEnterKey = () => {
    let tgs = document.getElementById("tag");
    let _this = this;
    if (tgs) {
      tgs.addEventListener("keydown", function (e) {
        var code = e.key;
        if (code === "Enter") {
          if (tgs.value) {
            _this.addTag(tgs.value);
            tgs.value = "";
          }
        }
      });
    }
  };

  ejectSelectedTags = () => {
    const { arr } = this.props;
    return (arr || []).map((tag, index) => {
      return (
        <div
          key={index.toString()}
          style={{ marginBottom: 8 }}
          className="tag-container"
        >
          <div
            // onClick={() => this.removeItemFromState(this.state.tags, tag)}
            className="tag-item elevate-float"
            // icon={faTimes}
            iconColor="red"
            style={{ marginLeft: 8 }}
          >
            {/* <FontAwesomeIcon icon={faTimes} /> */}
            {tag}
          </div>
        </div>
      );
    });
  };

  render() {
    const {
      placeholder,
      style,
      className,
      __HTML_DEFAULTS,
      containerClassName,
      containerStyle,
    } = this.props;
    return (
      <div>
        {this.ejectSelectedTags()}
        <div style={containerStyle} className={containerClassName}>
          <input
            style={style}
            className={`textbox input ${className}`}
            placeholder={placeholder}
            {...__HTML_DEFAULTS}
            id="tag"
          />
        </div>
      </div>
    );
  }
}

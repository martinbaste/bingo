import React from 'react'


class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: props.active };
  }

  render() {
    let activeClass = "";
    if (this.state.active) {
      activeClass = " active"
    }
    return <li 
      className={`list-group-item${activeClass}`}
      onClick={() => this.setState({ active : !this.state.active })}
    >{this.props.text}</li>
  }
}

export default ListItem
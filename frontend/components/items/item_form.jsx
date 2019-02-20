import React from 'react';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      title: ''
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }
  handleTitleChange (e) {
    this.setState({title: e.target.value})
  }
  handleBodyChange (e) {
    this.setState({body: e.target.value})
  }

  handleSubmit () {
    let item = {
      id: 1,
      title: this.state.title,
      body: this.state.body,
      done: false
    }
    this.props.addItem(item);
    this.setState({title: '', body: ''})
  }
  

  render() {
    return (
      <div>
        <label> Title
          <input type="text" onChange={this.handleTitleChange}/>
        </label>
        <label> Body
          <input type="text" onChange={this.handleBodyChange}/>
        </label>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default ItemForm;
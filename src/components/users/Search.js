import React, { Component } from "react";

export class Search extends Component {
    state={
        text:''
    }

    onChange = (event) => {
        this.setState({text: event.target.value});
    }

    onSubmit= (event) => {
        event.preventDefault();
    }
    
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;

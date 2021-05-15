import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <form className="form-input">
        <input />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

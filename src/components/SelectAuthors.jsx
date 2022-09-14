import React from "react";
class SelectAuthors extends React.Component {
  renderAuthors() {
    return this.props.propsAuthor.map((objectAuthor) => {
      return (
        <option value={objectAuthor.name} onClick={this.props.onClickAuthor}>{objectAuthor.name}</option>
      );
    });
  }
  render () {
  return (
    <div className="col-3 col-sm-12">
      <select className="filter">
        <option value="" onClick={this.props.onClickAuthor}>
          Author
        </option>
        {this.renderAuthors()}
        {/* {console.log(this.props.propsAuthor)} */}
      </select>
    </div>
  );
  }
};
SelectAuthors.defaultProps = {propsAuthor: []};
export default SelectAuthors;

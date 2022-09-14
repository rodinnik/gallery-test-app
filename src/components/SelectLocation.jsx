import React from "react";
// import { Select } from 'fwt-internship-uikit';
class SelectLocations extends React.Component {
  renderLocations() {
    return this.props.propsLocation.map((objectLocation) => {
      return (
        <option value={objectLocation.location} onClick={this.props.onClickLocation}>{objectLocation.location}</option>
      );
    });
  }
  render () {
  return (
    <div className="col-3 col-sm-12">
      {/* <Select value = {'author'}/> */}
      <select className="filter">
        <option value="" onClick={this.props.onClickLocation}>
          Location
        </option>
        {this.renderLocations()}
      </select>
    </div>
  );
  }
};
SelectLocations.defaultProps = {propsLocation: []};
export default SelectLocations;
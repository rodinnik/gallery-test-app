import InputName from "./InputName";
// import SelectAuthors from "./SelectAuthors";
import React from "react";
// import SelectLocations from "./SelectLocation";
import Range from "./Range"
import Select from "./Select";
// import { render } from "@testing-library/react";

class Filters extends React.Component {

    render() { 
      return (
        <div className="wrapper amount-columns-filters filters">
        <InputName onChangeText={this.props.onChangeText}/>
        <Select value={"Author"} options={this.props.authors.map(author => author.name)} onClickItem={this.props.onClickAuthor}/> 
        <Select value={"Location"} options={this.props.locations.map(location => location.location)} onClickItem={this.props.onClickLocation}/>
        <Range onChangeTextFrom={this.props.onChangeTextFrom} onChangeTextBefore={this.props.onChangeTextBefore}/>
        </div>
    );
    }
  
}
export default Filters;

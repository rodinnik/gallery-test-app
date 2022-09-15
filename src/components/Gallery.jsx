import Painting from "./Painting";
import React from "react";

class Gallery extends React.Component {
  renderPaintings() {
    return this.props.paintings.map((painting) => {
      return (
        <Painting
          key = {painting.id}
          painting={painting}
          author={this.props.authors.find(
            (author) => author.id === painting.authorId
          )}
          location={this.props.locations.find(
            (location) => location.id === painting.locationId
          )}
        />
      );
    });
  }

  render() {
    return (
      <div className="wrapper amount-columns-paintings">
        {this.renderPaintings()}
      </div>
    );
  }
}

export default Gallery;

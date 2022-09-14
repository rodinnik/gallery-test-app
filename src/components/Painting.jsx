const Painting = (props) => {
  const url =
    "https://test-front.framework.team" + props.painting.imageUrl;
  return (
    <div className="picture-block">
      <img src={url} className="pictures" alt="" />
      <div className="text-block">
        <div className="name-painting">{props.painting.name}</div>
        <div className="inform-painting">
          <div>Author: <p>{props.author.name}</p></div>
          <div>Created: <p>{props.painting.created}</p></div>
          <div>Location: <p>{props.location.location}</p></div>
        </div>
      </div>
    </div>
  );
};
Painting.defaultProps = {author: {name: 'нет автора'}, location: {location: 'неизвестно'}, painting: {imageUrl: ''}};
export default Painting;

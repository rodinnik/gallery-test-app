const InputName = (props) => {
    return (
        <div className="filter-name">
          <input type="text"  placeholder="Name" onChange={props.onChangeText} />
        </div>
    )
}

export default InputName;
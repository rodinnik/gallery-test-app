import React from "react";
class Range extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.selectRef = React.createRef();
    this.clickSelect = this.clickSelect.bind(this);
  }
  componentDidMount() {
    document.addEventListener("click", this.clickSelect);
  }
  clickSelect(e) {
    if (!this.selectRef.current.contains(e.target)) {
      this.setState({ isActive: false });
    }
  }
  render() {
    return (
      <div
        className={this.state.isActive ? "select is-active " : "select"}
        ref={this.selectRef}
      >
        <div
          className="select-header"
          onClick={() => {
            this.setState({ isActive: this.state.isActive ? false : true });
          }}
        >
          <span className="select-current">Created</span>
          <div className="select-icon">
            {this.state.isActive ? (
              <svg
                className="select-pointer"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="#555555"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.321395 4.1663L4.22936 0.314613C4.65497 -0.104871 5.34503 -0.104871 5.77064 0.314613L9.67861 4.1663C10.3652 4.84298 9.87892 6 8.90797 6L1.09203 6C0.121082 6 -0.365172 4.84298 0.321395 4.1663Z" />
              </svg>
            ) : (
              <svg
                className="select-pointer"
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="#555555"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.3659e-08 1.09203 0L8.90797 6.73452e-07C9.87892 7.57113e-07 10.3652 1.15702 9.67861 1.8337Z" />
              </svg>
            )}
          </div>
        </div>

        <div className="select-body">
          <div className="select-created">
            <input
              type="text"
              placeholder="from"
              onChange={this.props.onChangeTextFrom}
            />
            <svg
              width="13"
              height="1"
              viewBox="0 0 13 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="0.5" y1="0.5" x2="12.5" y2="0.5" />
            </svg>
            <input
              type="text"
              placeholder="before"
              onChange={this.props.onChangeTextBefore}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Range;

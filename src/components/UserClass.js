import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <>
        <div className="user-card">
          <h4>
            Count:{count}{" "}
            <button type="button" onClick={() => {
              this.setState({
                count: this.state.count+1,
              });
            }}>
              Count
            </button>
          </h4>        
          <h4>{name}</h4>
          <h4>Location : {location}</h4>
          <h4>Contact : Rakhip@gmail.com</h4>
          <p>
            Bundling is great, but as your app grows, your bundle will grow too.
            Especially if you are including large third-party libraries. You
            need to keep an eye on the code you are including in your bundle so
            that you don’t accidentally make it so large that your app takes a
            long time to load.
          </p>
        </div>
      </>
    );
  }
}

export default UserClass;

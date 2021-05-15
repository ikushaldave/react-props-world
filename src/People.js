import { Component } from "react";
import ShowPeople from "./ShowPeople";

class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPeopleClosed: true
    }
  }

  toggleHandler = () => {
    this.setState((prev) => ({showPeopleClosed: !prev.showPeopleClosed}))
  }

  render () {
    const { isLogin, people } = this.props;

    if (!(isLogin && people)) {
		throw new Error("Auth Failed");
    }

    return (
			<>
        <h1 className="center">🚀 Welcome to People page!</h1>
        <div className="center">
          <button className="show-people" onClick={this.toggleHandler}>Show People</button>
        </div>
        {this.state.showPeopleClosed ? "" : <ShowPeople people={people} toggleHandler={this.toggleHandler} />}
			</>
		);
  }
}

export default People;

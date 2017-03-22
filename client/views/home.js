import React from 'react';
import UserForm from './userForm';
import {connect} from "react-redux";

class Home extends React.Component {
  render() {
      const { handleSubmit } = this.props;

      return (
        <div>
          <h1>Hello Kitty!</h1>
          <UserForm onSubmit={handleSubmit}/>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: (data) => {
            console.log(data);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
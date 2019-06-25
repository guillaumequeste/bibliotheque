import React, { Component } from 'react'
import firebase from '../firebase'
import { Link } from 'react-router-dom'

class Details extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/">Home</Link></h4>
            <h3 class="panel-title">
              {this.state.board.title}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Description:</dt>
              <dd>{this.state.board.description}</dd>
              <dt>Author:</dt>
              <dd>{this.state.board.author}</dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
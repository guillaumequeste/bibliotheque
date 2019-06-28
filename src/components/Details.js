import React, { Component } from 'react'
import firebase from '../firebase'
import { Link } from 'react-router-dom'
import './Details.css'

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
      <div className="bodyDetails">
        <h4><Link to="/">Retour</Link></h4>
        <h1 className="titreDetails">
          {this.state.board.title}
        </h1>
        <div className="divImgDetails">
          <img src={`${this.state.board.image}`} className="imgDetails"/>
        </div>
        <div className="description">
          <h5>Description:</h5>
          <p>{this.state.board.description}</p>
          <h5>Auteur:</h5>
          <p>{this.state.board.author}</p>
        </div>
      </div>
    );
  }
}

export default Details;
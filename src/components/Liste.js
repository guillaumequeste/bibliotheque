import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../firebase'
import './Liste.css'

class Liste extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards').orderBy("author", "asc");
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author, image } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
        image
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render () {
    return (
      <div className="bodyListe">
        <h1 className="titreListe">Liste de livres</h1>
        <div className="cardsListe">
          {this.state.boards.map(board =>
            <div className="card">
              <img className="card-img-top" src={`${board.image}`} alt={board.title} />
              <div className="card-body">
                <h5 className="card-title">{board.author}</h5>
                <p className="card-text">{board.title}</p>
                <Link to={`/details/${board.key}`} className="btn btn-primary">Fiche</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Liste
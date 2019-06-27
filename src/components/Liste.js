import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../firebase'
import './Liste.css'

class Liste extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards').orderBy("title", "asc");
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
              <h1>Liste</h1>
              <h3>Liste de livres</h3>
              {this.state.boards.map(board =>
                  <tr>
                    <td><Link to={`/details/${board.key}`}>{board.title}</Link></td>
                    <td>{board.description}</td>
                    <td>{board.author}</td>
                    <img src={`${board.image}`} />
                  </tr>
                )}
          </div>
      )
  }
}

export default Liste
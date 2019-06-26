import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../firebase'

class Home extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
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
          <div>
              <h1>Home</h1>
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

export default Home
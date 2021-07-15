import React from 'react'
import Card from '../card/card.component';
import './card-list.styles.css';
const CardList = props => (
  <div className="card-list-container"> {
    props.monsters.length > 0 ?
      props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))
      : <p>No results!</p>
  }
  </div>
)

export default CardList;

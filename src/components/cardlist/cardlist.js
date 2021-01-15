import React from 'react';
import './cardlist.styles.css';
import Cardcomp from '../card/card';

const CardList = (props) => (
    <div className="card-list">
        {props.monsters.map(monster =>
        (
        <Cardcomp key={monster.id} monster={monster}/>
        ))};
    </div>
);

export default CardList;
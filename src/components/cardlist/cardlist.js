import React from 'react';
import './cardlist.css';
import Cardcomp from '../card/card';

const cardlist = (props) => (
    <div className="card-list">
        {props.monsters.map(monster =>(
        <Cardcomp key={monster.id} monster={monster}/>
        ))};
    </div>
);

export default cardlist;
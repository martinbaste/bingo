import React from 'react';
import ListItem from './ListItem.jsx';

function BingoList(props) {
  const listItems = props.optionList.map((i) => <ListItem active={false} text={i}/>)
  return <div className="card" style={{width:"100%"}}>
    <div className="card-header">
    LA CENA
    </div>
    <ul className="list-group list-group-flush">
      {listItems}
    </ul>
  </div>
}

export default BingoList
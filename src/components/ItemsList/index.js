import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, ArrowRightIcon } from '../Icons';

const ItemsList = (props) => (
   <div className="items-list">
      <div className="items-list__header">Items</div>
      {props.items.map(item => (
         <Link key={item.id} to={`/${item.id}`} className={`items-list__item ${props.active === item.id ? 'active' : ''}`}>
            <CheckIcon fill="#11d1b2"/> 
            <div className="items-list__item__name">{item.name}</div>
            <ArrowRightIcon/>
         </Link>
      ))}
   </div>
)

export default ItemsList;

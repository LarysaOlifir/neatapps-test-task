import React from 'react';
import Hint from '../Hint';

const ItemDetails = (props) => (
   <div className="item-box">
      <h1 className="item-box__header">{props.name}</h1>
      <div className="item-box__body">
         <div className="item-box__left">
            <div className="item-box__title">General details <Hint>Some help text will be here...</Hint></div>
            <ItemDetail label="Name">{props.name}</ItemDetail>
            <ItemDetail label="Description">{props.description}</ItemDetail>
            <ItemDetail label="Resource Type">{props.resourceType}</ItemDetail>
            <ItemDetail label="Path">{props.path}</ItemDetail>
         </div>
         <div className="item-box__right">
            <div className="item-box__title">Permitted actions <Hint>Some help text will be here...</Hint></div>
            {props.actions && props.actions.length > 0 && props.actions.map(action => (
               <div className="item-box__action" key={action.id}>{action.name}</div>
            ))}
         </div>
      </div>
   </div>
)

export default ItemDetails;

const ItemDetail = (props) => (
   <div className="item-detail">
      <div className="item-detail__label">{props.label}</div>
      <div className="item-detail__text">{props.children}</div>
   </div>
)



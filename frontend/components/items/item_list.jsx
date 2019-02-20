import React from 'react';
import {Item} from './item';
import ItemForm from './item_form';

export const itemList = (props) => (
<div>
  <ul>
    {props.items.map (item => <Item key={item.id} item={item}/>)}
  </ul>

    <ItemForm addItem={props.addStoreItem}/>
</div>
)


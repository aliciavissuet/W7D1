import React from 'react';

export const Item = ({item}) => {
  window.item = item;
  return <li key={item.id}>{item.title}</li>
}
import React from 'react';
import { getMenu } from '../../services/apiRestaurant';
import { useLoaderData } from 'react-router-dom';
import MenuItem from './MenuItem';
const Menu = () => {
  const menu = useLoaderData();

  return (
    <ul className="divide-y">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
};

export function loader() {
  const menu = getMenu();
  return menu;
}

export default Menu;

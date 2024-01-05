import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-rose-500 p-4 font-semibold uppercase text-stone-100">
      <Link className="tracking-widest" to="/">
        Fast Pizza Delivery
      </Link>
      <SearchOrder />
      <Username />
    </div>
  );
};

export default Header;

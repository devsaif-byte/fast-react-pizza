import React from 'react';
import { useSelector } from 'react-redux';

const Username = () => {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="hidden text-sm font-semibold md:block">
      {username && <span>Welcome, </span>}
      <span>{username}</span>
    </div>
  );
};

export default Username;

import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, disabled, to, type, onClick }) => {
  const base =
    'inline-block rounded-full bg-rose-500 font-semibold tracking-wide text-stone-100 outline-none ring-rose-500 transition-colors duration-300 hover:bg-rose-400 focus:bg-rose-500 focus:ring-4 focus:ring-offset-2 disabled:cursor-progress';

  const styles = {
    primary: base + ' p-4 md:p-4 p-2',
    small: base + ' px-3 py-2 text-xs font-thin',
    secondary:
      'inline-block rounded-full bg-stone-500 font-semibold tracking-wide text-stone-100 outline-none ring-stone-500 transition-colors duration-300 hover:bg-stone-400 focus:bg-stone-500 focus:ring-4 focus:ring-offset-2 disabled:cursor-progress md:p-4 p-2',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;

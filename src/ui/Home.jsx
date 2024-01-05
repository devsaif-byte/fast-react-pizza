import React from 'react';
import CreateUser from '../features/user/CreateUser';
function Home() {
  return (
    <div className="mx-auto my-10 w-full max-w-3xl py-4 text-center tracking-widest">
      <h1 className="mb-6 text-2xl font-semibold text-stone-500 sm:my-16 md:text-5xl">
        <span className="font-default mb-10 inline-block font-light text-rose-500">
          The best pizza.
        </span>
        <br />
        <span className="uppercase">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;

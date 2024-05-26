import React, { useRef } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const termRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const citySearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const term = termRef.current?.value;

    if (term) {
      navigate(`/search/${term}`);
      termRef.current.value = '';
    }
  };

  return (
    <form className='flex' onSubmit={citySearch}>
      <div className='flex items-center h-16 px-4 gap-4 rounded-full bg-slate-50 text-black text-3xl font-bold'>
        <IoSearchSharp className='w-8 h-8' color='black' />
        <input
          className='outline-none'
          type='text'
          placeholder='Search city...'
          ref={termRef}
        />
      </div>
    </form>
  );
};

export default SearchInput;

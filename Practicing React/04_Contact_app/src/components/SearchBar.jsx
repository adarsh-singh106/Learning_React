import { IoMdSearch } from "react-icons/io";
import React from "react";
import { GoPlusCircle } from "react-icons/go";

// 1. Receive filterContacts prop
const SearchBar = ({ onOpen, filterContacts }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex grow items-center relative">
        <IoMdSearch className="text-white absolute ml-1 text-3xl" />
        <input
          // 2. Add onChange handler
          onChange={filterContacts}
          className="h-10 grow rounded-md border border-white bg-transparent pl-9 text-white placeholder-white"
          type="search"
          placeholder="Search Contact"
        />
      </div>
      <GoPlusCircle
        onClick={onOpen}
        className="text-5xl text-white cursor-pointer"
      />
    </div>
  );
};

export default SearchBar;
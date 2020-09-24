import React, { ChangeEvent } from "react";

type TSearchProps = {
  searchHandler: (value: string) => void;
};
export function Search(props: TSearchProps) {
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    props.searchHandler(event.target.value);
  }

  return (
    <form className="flex mr-5 lg:mr-10">
      <input
        type="text"
        name="Search"
        placeholder="Search"
        className="search"
        onChange={onChange}
      />
    </form>
  );
}

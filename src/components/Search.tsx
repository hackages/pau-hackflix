import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { searchAction } from "../store/actions";

export function Search() {
  const dispatch = useDispatch();
  function onChange(event: ChangeEvent<HTMLInputElement>) {
    dispatch(searchAction(event.target.value));
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

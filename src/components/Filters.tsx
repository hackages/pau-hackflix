import React from "react";
import { IItem } from "../types";
import classnames from "classnames";
import { useDispatch } from "react-redux";
import { setItemAction } from "../store/actions";

type TFiltersProps = {
  items: IItem[];
};

export function Filters({ items }: TFiltersProps) {
  const dispatch = useDispatch();

  function onItemsChanged(item: IItem) {
    dispatch(setItemAction(item));
  }
  return (
    <div className="categories">
      <div className="container mx-auto text-center">
        <ul className="flex flex-row justify-center categories-list">
          {items.map((item) => {
            const style = classnames({
              "px-3 md:px-6 py-3 block": true,
              active: item.selected,
            });
            return (
              <li key={item.name} onClick={() => onItemsChanged(item)}>
                <a className={style} href="#">
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

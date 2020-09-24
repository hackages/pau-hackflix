import React from "react";
import { IItem } from "../types";
import classnames from "classnames";

type TFiltersProps = {
  items: IItem[];
  onItemsChanged: (itemName: string) => void;
};

export function Filters({ items, onItemsChanged }: TFiltersProps) {
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
              <li key={item.name} onClick={() => onItemsChanged(item.name)}>
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

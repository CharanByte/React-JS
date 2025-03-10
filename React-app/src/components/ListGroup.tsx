import { useState } from "react";
interface Props {
  items: String[];
  heading: String;
  onSelectItem: (item: String) => void;
}
function List({ items, heading, onSelectItem }: Props) {
  //lists = [];
  const [selectIndex, setSelectIndex] = useState(-1);
  return (
    <>
      <ul className="list-group">
        <h1>{heading}</h1>
        {items.length === 0 && <p>No items</p>}
        {items.map((item1, index) => (
          <li
            key={index}
            className={
              selectIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectIndex(index);
              onSelectItem(item1);
            }}
          >
            {item1}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;

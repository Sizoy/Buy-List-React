import React from "react";
import "./../App.css";
import ListItem from "./ListItem";

let List = (props) => {
  let list = [
    {
      itemToBuy: "A lot of pickles ",
      remark: "(for the next lesson about CSS)",
      number: "1",
    },
    {
      itemToBuy: "10 apples ",
      remark: "( for more CSS manipulations)",
      number: "2",
    },
    {
      itemToBuy: "20 oranges ",
      remark: "( because they are awesome )",
      number: "3",
    },
    {
      itemToBuy: "13 plates ",
      remark: "( hm... they always disappear )",
      number: "4",
    },
    { itemToBuy: "15 bentos ", remark: "", number: "5" },
    {
      itemToBuy: "1 bottle of Sake ^_^ ",
      remark: "( for my friends )",
      number: "6",
    },
  ];

  let newList = list.map((listItem) => (
    <ListItem
      itemToBuy={listItem.itemToBuy}
      remark={listItem.remark}
      number={listItem.number}
      key={listItem.number}
    />
  ));

  return <ul className="list">{newList}</ul>;
};

export default List;

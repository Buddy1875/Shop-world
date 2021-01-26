// Import stylesheets
import "./style.css";

var Item_List = [
  {
    Item: "water",
    Item_Label: "น้ำ",
    count: 20,
    list: "food",
    pricr: 100,
    id: "12c8d3"
  },
  {
    Item: "gold",
    Item_Label: "น้ำ",
    count: 20,
    list: "food",
    pricr: 100,
    id: "13c8d3"
  },
  {
    Item: "wood",
    Item_Label: "น้ำ",
    count: 20,
    list: "food",
    pricr: 100,
    id: "1248d3"
  }
];
Item_List.forEach(LoadItem);

function LoadItem() {
  $("body-shop-list");
}

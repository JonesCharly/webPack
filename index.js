import moment from "moment";
import "bootstrap";
import "./app.scss";

require("bootstrap");

console.log("Bienvenue dans WebPack!");

console.log(
  moment()
    .startOf("day")
    .fromNow()
);

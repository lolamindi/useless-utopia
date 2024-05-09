import { new_fact, favorite, favorites, refresh, clear} from "./main.js";

document.addEventListener("DOMContentLoaded", () => {index();new_fact(); });

const index = () => {
  document.getElementById("button_new_fact").addEventListener("click", new_fact);
  document.getElementById("button_add_favorite").addEventListener("click", favorite);
  document.getElementById("button_favorites").addEventListener("click", favorites);
  document.querySelector(".page_title").addEventListener("click", refresh);
  document.getElementById("button_home").addEventListener("click", refresh);
  document.getElementById("button_delete").addEventListener("click", clear);
}





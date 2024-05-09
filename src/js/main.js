import { get_fact } from "./data.js";
import { add_favorite, list_favorites } from "./favorites.js";
import { show_toast } from "./toast.js";

const fact_text = document.querySelector(".card_facts_text");

const new_fact = async () => {
  try {
    const fact = await get_fact();
    fact_text.innerHTML = fact;
    return fact;
  } catch (error) {
    show_toast("There's no internet connection.");
  }
};

const favorite = () => {
  add_favorite(fact_text.innerHTML);
};

const favorites = () => {
  const favorites_list = list_favorites();
  const favorites_list_elem = document.getElementById("list_favorites");

  favorites_list_elem.innerHTML =
    localStorage.getItem("favorites") === null || favorites_list.length === 0
      ? "<li>No favorites yet</li>"
      : favorites_list
          .map((fact) => {
            const list_item = document.createElement("li");
            list_item.textContent = fact;
            const individual_delete_button = document.createElement("button");
            individual_delete_button.innerHTML = "X";
            individual_delete_button.classList.add("individual_delete_button");
            individual_delete_button.addEventListener("click", (event) => {
              console.log("Hello");
              const listItem = event.target.closest("li");
              console.log("Parent list item:", listItem);
              if (listItem) {
                listItem.remove();
              }
            });

            list_item.appendChild(individual_delete_button);
            return list_item.outerHTML;
          })
          .join("");
  document.querySelector("main").style.display = "none";
  document.querySelector(".favorites").style.display = "flex";
};

const refresh = () => {
  location.reload();
};

const clear = () => {
  localStorage.clear();
  favorites();
};

export { new_fact, favorite, favorites, refresh, clear };

import "./sass/index.scss";
import $ from "jquery";
import { ApiProxy } from "./DataProviders/DataProvider";
import { CardsBuilder } from "./UIElements/CreateCards";
import { PaginationBuilder } from "./UIElements/PaginationBuilder";
import { DetailsTable } from "./UIElements/DetailsTable";

let provider;
let cardsBuilder;
let pokemons;
let pagination;
let main;
let appEvents;
let details;

document.addEventListener("DOMContentLoaded", async () => {
  // instance class
  provider = new ApiProxy();
  cardsBuilder = new CardsBuilder();
  pagination = new PaginationBuilder();
  appEvents = new ApplicatonListners();
  details = new DetailsTable();
  // get data pokemons
  pokemons = await provider.GetPokeData();
  // loader on
  $(".lds-roller").show();
  // build pokemons cards
  cardsBuilder.CreateCards(pokemons.slice(0, 20), "div", "mainContent_card");

  // build pagination
  pagination.BuildPaginationFooter(pokemons.length, 20);
  // loader off
  $(".lds-roller").hide();
  appEvents.paginationEvent();
  // search pokemons
  appEvents.searchEvent();
  // show table with more details
  details.detailsEvent(pokemons, "div", ".activeCard", "active");
});

main = document.querySelector(".mainContent");

export class ApplicatonListners {
  // Searching companies from input
  searchEvent() {
    $(document).on("keyup", ".header_search-input", () => {
      const searchValue = $(".header_search-input").val();

      const searchResult = pokemons.filter((el) => {
        return el.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      main.innerHTML = "";
      document.querySelector(".aditionalData").innerHTML = "";
      cardsBuilder.CreateCards(searchResult, "div", "mainContent_card");
      pagination.ResetPagination();
      pagination.BuildPaginationFooter(searchResult.length, 20);
    });
  }
  // pagination
  paginationEvent() {
    $(document).on("click", ".pagination_lists-list", function () {
      main.innerHTML = "";
      const pageNumber = $(this).attr("data-pagination");
      cardsBuilder.CreateCards(
        pokemons.slice((pageNumber - 1) * 20, pageNumber * 20),
        "div",
        "mainContent_card"
      );
      pagination.ResetPagination();
      pagination.BuildPaginationFooter(pokemons.length, 20);
    });
  }
}

// arrow scrollTop
$(".arrow").click(function () {
  $("body,html").animate(
    {
      scrollTop: $(".header").offset().top,
    },
    500
  );
});

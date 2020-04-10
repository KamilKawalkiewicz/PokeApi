export class CardsBuilder {
  // Build pokemon card
  CreateCards(pokemons, nameElement, nameClass) {
    pokemons.forEach((pokemon) => {
      const { id, image, name, type } = pokemon;

      const mainContent = document.querySelector(".mainContent");
      const card = document.createElement(nameElement);
      card.classList.add(nameClass);
      card.setAttribute("id", `${id}`);
      const contentCard = `<div class="mainContent_card-id">${id}</div>
      <div class="mainContent_card-name">${name}</div>
      <img class="mainContent_card-img" src=${image}>
      <div class="mainContent_card-type">${type}</div>`;
      card.innerHTML += contentCard;
      mainContent.appendChild(card);
    });
  }
}

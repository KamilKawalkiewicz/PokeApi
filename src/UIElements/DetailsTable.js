export class DetailsTable {
  // create data table about pokemon
  detailsEvent(pokemons, nameElement, nameClass, active) {
    let cardId;

    $(document).on("click", ".mainContent_card", function () {
      const aditionalData = document.querySelector(".aditionalData");
      cardId = $(this).attr("id") ? $(this).attr("id") : cardId;
      const selectedPokemon = pokemons.find((pokemon) => pokemon.id == cardId);
      aditionalData.innerHTML = "";
      const activeCard = document.createElement(nameElement);
      activeCard.classList.add(nameClass);
      aditionalData.classList.add(active);

      const {
        id,
        image,
        name,
        height,
        weight,
        type,
        stats_name,
        stats_data,
      } = selectedPokemon;

      activeCard.innerHTML += `<div class="container">
      <div class="col">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col-5">
                <h5>${id}</h5>
              </div>
              <div class="col-7">
                <div class="float-right">
                  <span class="badge badge-primary mr-1">${type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-md-3">
              <img src="${image}" alt="img pokemon" />
            </div>
            <div class="col-md-9">
              <h3 class="mx-auto">${name}</h3>
              <h6 class="mx-auto">height: ${height}</h6>
              <h6 class="mx-auto">weight: ${weight}</h6>
              <div class="row align-items-center">
                <div class="col-12 col-md">
                  ${stats_name[5]}
                </div>
                <div class="col-12 col-md">
                  <div class="progress" style="height: 20px;">
                    <div class="progress-bar" role="progressbar" style="width:${stats_data[5]}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${stats_data[5]}</div>
                  </div>
              </div>
            </div>
  
            <div class="row align-items-center  mt-2">
              <div class="col-12 col-md">
              ${stats_name[4]}
              </div>
              <div class="col-12 col-md">
                <div class="progress" style="height: 20px;">
                  <div class="progress-bar" role="progressbar" style="width:${stats_data[4]}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${stats_data[4]}</div>
                </div>
            </div>
          </div>
  
          <div class="row align-items-center  mt-2">
            <div class="col-12 col-md">
            ${stats_name[3]}
            </div>
            <div class="col-12 col-md">
              <div class="progress" style="height: 20px;">
                <div class="progress-bar" role="progressbar" style="width:${stats_data[3]}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${stats_data[3]}</div>
              </div>
          </div>
        </div>
  
        <div class="row align-items-center  mt-2">
          <div class="col-12 col-md">
          ${stats_name[1]}
          </div>
          <div class="col-12 col-md">
            <div class="progress" style="height: 20px;">
              <div class="progress-bar" role="progressbar" style="width:${stats_data[1]}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${stats_data[1]}</div>
            </div>
        </div>
      </div>
  
          </div>
        </div>
      </div>
      </div>`;
      aditionalData.appendChild(activeCard);
    });
  }
}

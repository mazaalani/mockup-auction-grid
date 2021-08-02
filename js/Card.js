export default class Card {
  constructor(grid, nb) {
    this._grid = grid;
    this._nb = nb;
    this._imgs = [
      "stamp0",
      "stamp1",
      "stamp2",
      "stamp3",
      "stamp4",
      "stamp5",
      "stamp6",
      "stamp7",
      "stamp8",
    ];
    this._lots = [
      "LOT # 181 - Pokemon Cards CHARIZARD",
      "LOT # 293 - Lord Cards UK",
      "LOT # 193 - 1962 Topps Set",
      "LOT # 226 - Michel 2017 2018-EUROPA",
      "LOT # 290 - LOT # 093 - 1962 Topps Set",
      "LOT # 127 - Opening of the Games of the XXIX Olympiad",
      "LOT # 167 - China stamp 2008-18",
      "LOT # 172 - Nystamps British Colonies Massive mint NH",
    ];

    this.insertCards();
  }

  insertCards = () => {
    for (let i = 0; i < this._nb; i++) {
      this._id = i;
      let stamp =
        this._imgs[Math.floor(Math.random() * (this._imgs.length - 1))];
      this._lot =
        this._lots[Math.floor(Math.random() * (this._lots.length - 1))];
      this._days = Math.floor(Math.random() * 3);
      this._hours = Math.floor(Math.random() * 24);
      this._price = Math.floor(Math.random() * 500).toFixed(2);
      this._card = `<div class=" card-container ">
                    <div class=" auction-card2 shadow flex column flex-items-center flex-justify-space" >
                        
                        <div class="img-container">
                            <img src="./assets/img/${stamp}.png" alt="Exemple timbre" />
                        </div>
                        <div class="auction-desc flex column">
                            <div class="auction-title">
                                <h3 class="auction-title2">
                                ${this._lot}
                                </h3>
                                <p>Mise actuelle: ${this._price} C$</p>
                                <h4>Temps restant: <span>${this._days}J et ${this._hours}H</span></h4>
                            </div>
                            <div class="auction-cta flex flex-justfy-center">
                                <button class="btn btn-cta margin-bot">Enchérir</button>
                                <button class="btn btn-main">&#x2764;</button>
                            </div>
                        </div>
                        <span class="hidden" data-js-ad>Derniérs 24H<span>
                    </div>
                </div>`;

      this._grid.insertAdjacentHTML("beforeend", this._card);
      this._ad = this._grid.lastElementChild.querySelector("[data-js-ad]");
      this._timer = this._grid.lastElementChild.querySelector("h4");
      this.displayAd();
    }
  };

  displayAd = () => {
    if (this._days == 0) {
      this._ad.classList.remove("hidden");
      this._timer.style.color = "var(--clr-red)";
    }
  };
}

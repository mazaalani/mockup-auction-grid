export default class Selects {
  constructor() {
    this._elSelect = document.querySelectorAll("[data-js-select]");
    this._countries = [
      "Afghanistan",
      "Albania",
      "Algeria",
      "American Samoa",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antarctica",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas (the)",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Botswana",
      "Bouvet Island",
      "Brazil",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Chad",
      "Chile",
      "Saint Lucia",
      "Samoa",
      "San Marino",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Western Sahara",
      "Yemen",
      "Zambia",
      "Zimbabwe",
      "Åland Islands",
    ];
    this._categories = [
      "Definitive ",
      "Commemorative ",
      "Semi-Postal",
      "Airmail ",
      "Parcel Post",
    ];
    this.init();
  }
  init = () => {
    this._countries.forEach((country) => {
      this._elSelect[0].insertAdjacentHTML(
        "beforeend",
        `<option value="">${country}</option>`
      );
    });
    this._categories.forEach((cat) => {
      this._elSelect[1].insertAdjacentHTML(
        "beforeend",
        `<option value="">${cat}</option>`
      );
    });
  };
}

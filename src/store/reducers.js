// import { updateObject } from "./utility.js";

const initialState = {
  Persons: 1,
  Bedrooms: 0,
  singleBed: 0,
  doubleBed: 0,
  currentStep: 0,
  flats: 0,
  reservationPack: false,
  value: "",
  type: "",
  roomDetails: [
    { id: 1, title: "Persons", name: "Max. liczba osób", count: 0 },
    { id: 2, title: "Bedrooms", name: "Liczba sypialni", count: 0 },
    {
      id: 3,
      title: "singleBed",
      name: "Liczba pojedynczych łóżek",
      count: 0
    },
    { id: 4, title: "doubleBed", name: "Liczba podwójnych łożek", count: 0 }
  ],
  filtered: [],
  guests: 0,
  showTooltip: false,
  amenities: [],
  rooms: [
    { id: 0, name: "Apartament rodzinny" },
    { id: 1, name: "Pokój 4 osobowy" }
  ],
  isEditMode: false,
  autosugestion: [],
  openModal: false,
  isAnother: false,
  progress: 0,
  showSugestion: true
};

const reducers = (state = initialState, action) => {
  console.log(state.rooms.singleBed);
  switch (action.type) {
    case "CHANGE_VALUE":
      return {
        ...state,
        user: {
          ...state.user,
          name: action.data
        }
      };
    default:
  }
  return state;
};

export default reducers;

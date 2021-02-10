import React from "react";
import ReactDOM from "react-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Topbar from "./Topbar";
import Progress from "./Progress";
import { Container } from "react-bootstrap";
import { createStore } from "redux";
import reducers from "./store/reducers";
import { Provider } from "react-redux";
import { connect } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

const ame = [
  { id: 0, name: "Parking", checked: false },
  { id: 1, name: "Lodówka", checked: false },
  { id: 2, name: "Akceptacja zwierząt", checked: false },
  { id: 3, name: "plac zabaw", checked: false },
  { id: 4, name: "wc", checked: false },
  { id: 5, name: "kominek", checked: false },
  { id: 6, name: "Kuchnia", checked: false },
  { id: 7, name: "naczynia / sztućce", checked: false },
  { id: 8, name: "klimatyzacja", checked: false },
  { id: 9, name: "czajnik", checked: false }
];

class App extends React.Component {
  // this.inputRef = React.createRef();

  state = {
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
    photoModal: false,
    isAnother: false,
    progress: 0,
    showSugestion: true,
    images: [
      { id: 1, src: "/img/p1.jpg", choosen: false },
      { id: 2, src: "/img/p2.jpg", choosen: false },
      { id: 3, src: "/img/p3.jpg", choosen: false },
      { id: 4, src: "/img/p4.jpg", choosen: false }
    ]
  };

  imageChoosen = id => {
    console.log(this.state.images);
    const { images, choosen } = this.state;
    let addedImage = images.map(el =>
      el.id === id ? { ...el, choosen: !el.choosen } : el
    );
    this.setState({
      images: addedImage
    });
  };

  handleNextStep = () => {
    // console.log("click");
    const { currentStep, progress } = this.state;
    this.setState({
      currentStep: currentStep + 1,
      progress: progress + 25
    });
  };

  handlePrevStep = () => {
    const { currentStep, progress } = this.state;
    this.setState({
      currentStep: currentStep - 1,
      progress: progress - 25
    });
  };

  handleAddAnother = () => {
    // const { currentStep } = this.state;
    this.setState({
      currentStep: 6
    });
  };

  handleChange = (e, value) => {
    console.log(this.state.value);
    this.setState({ [value]: e.target.value });
  };

  handleTypeChoose = e => {
    // console.log(this.state.type)
    this.setState({
      type: e.target.value
    });
  };

  handleAddGuests = (e, id) => {
    // e.preventDefault();
    // console.log("remove" + id);
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1
    }));
  };

  handleRemoveGuests = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] - 1
    }));
  };

  handleAdd = () => {
    if (this.state.value.length < 3) {
      alert(
        "Nazwa pomieszczenia jest za krótka. Na pewno stać Cię na więcej :)"
      );
    } else {
      let counter = 1;
      counter++;
      const { rooms, value } = this.state;
      this.setState({
        rooms: [...rooms.concat({ id: counter, name: value })],
        value: ""
      });
      // console.log(this.state.value);
    }
  };

  handleRemove = id => {
    // console.log("remove" + id);
    const rooms = [...this.state.rooms];
    const index = rooms.findIndex(ghouse => ghouse.id === id);
    rooms.splice(index, 1);
    // rooms = rooms.filter(ghouse => ghouse.id !== id);
    this.setState({
      rooms
    });
  };

  handleEditMode = (e, id) => {
    // console.log(this.state.isEditMode + id);
    const isEditMode = this.state.isEditMode;
    this.setState({
      isEditMode: !isEditMode
    });
  };

  handleUpdateText = id => {
    // console.log(this.state.isEditMode ? "on" : "off");
    const isEditMode = this.state.isEditMode;
    this.setState({
      isEditMode: !isEditMode,
      value: this.refs.theTextInput
    });
  };

  renderEditMode = id => {
    return (
      <div>
        <input
          defaultValue={this.state.rooms[id].name}
          ref={e => (this.textInput = e)}
        />
        <button className="btn btn-secondary" onClick={this.handleUpdateText}>
          Zapisz
        </button>
      </div>
    );
  };

  handleSearch = e => {
    e.preventDefault();
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    if (e.target.value !== "") {
      currentList = ame;
      newList = currentList.filter(a => {
        const lc = a.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = [];
    }
    this.setState({
      amenities: newList,
      showSugestion: true
    });
  };

  handleHide = () => {
    // console.log(this.state.showSugestion);
    // const { showSugestion } = this.state;
    this.setState({
      showSugestion: false
    });
  };

  handleAddAmenities = (id, name) => {
    // console.log(this.state.autosugestion);
    const { autosugestion } = this.state;
    this.setState({
      autosugestion: [
        ...autosugestion.concat({ index: id, title: name, checked: true })
      ]
    });
  };

  handleRemoveAmenities = index => {
    // console.log(this.state.autosugestion[0].title + index);
    const autosugestion = [...this.state.autosugestion];
    const remove = autosugestion.findIndex(ame => ame.index === index);
    autosugestion.splice(remove, 1);
    this.setState({
      autosugestion
    });
  };

  handlerPack = () => {
    // console.log(this.state.reservationPack);
    const { reservationPack } = this.state;
    this.setState({
      reservationPack: !reservationPack
    });
  };

  handleMouseEnter = () => {
    console.log(this.state.showTooltip);
    const { showTooltip } = this.state;
    this.setState({
      showTooltip: !showTooltip
    });
  };

  renderOffer = id => {
    return <div>Tutaj</div>;
  };

  handleAddAnotherOffer = e => {
    console.log(e.target.value);
    if (e.target.value === "Tak") {
      this.setState({
        currentStep: 3,
        openModal: false,
        isAnother: true
      });
    } else {
      this.setState({
        currentStep: 0,
        openModal: false,
        progress: 0
      });
    }
  };

  handleOpenModal = () => {
    const { openModal } = this.state;
    this.setState({
      openModal: !openModal
    });
  };

  handlePhotoModal = () => {
    const { photoModal } = this.state;
    this.setState({
      photoModal: !photoModal
    });
  };

  // componentDidMount = () => {
  //   this.handleMouseEnter();
  // };

  handleFinish = () => {
    alert("Gratulacje! Dodałeś obiekt do Noclegowo :)");
  };

  renderContent = () => {
    const currentStep = this.state.currentStep;
    const {
      reservationPack,
      roomDetails,
      value,
      type,
      Persons,
      Bedrooms,
      singleBed,
      doubleBed,
      flats,
      guests,
      showTooltip,
      amenities,
      rooms,
      isEditMode,
      autosugestion,
      openModal,
      isAnother,
      showSugestion
    } = this.state;
    const values = {
      Persons,
      Bedrooms,
      singleBed,
      doubleBed,
      flats,
      reservationPack,
      currentStep,
      roomDetails,
      value,
      type,
      guests,
      showTooltip,
      amenities,
      rooms,
      isEditMode,
      autosugestion,
      openModal,
      isAnother,
      showSugestion
    };
    switch (currentStep) {
      case 0:
        return (
          <Step1
            values={values}
            handleAddGuests={this.handleAddGuests}
            handleRemoveGuests={this.handleRemoveGuests}
            handleNextStep={this.handleNextStep}
            handleTypeChoose={this.handleTypeChoose}
            type={type}
          />
        );
      case 1:
        return (
          <Step2
            handleNextStep={this.handleNextStep}
            handlePrevStep={this.handlePrevStep}
          />
        );
      case 2:
        return (
          <Step3
            values={values}
            amenities={this.state.amenities}
            handleNextStep={this.handleNextStep}
            handlePrevStep={this.handlePrevStep}
            handleSearch={this.handleSearch}
            autosugestion={this.state.autosugestion}
            handleAddAmenities={this.handleAddAmenities}
            handleRemoveAmenities={this.handleRemoveAmenities}
            showSugestion={showSugestion}
            handleHide={this.handleHide}
          />
        );
      case 3:
        return (
          <Step4
            values={values}
            handleEditMode={this.handleEditMode}
            renderEditMode={this.renderEditMode}
            renderViewMode={this.renderViewMode}
            handleAddGuests={this.handleAddGuests}
            handleRemoveGuests={this.handleRemoveGuests}
            isEditMode={this.state.isEditMode}
            value={this.state.value}
            guests={this.state.guests}
            handleAdd={this.handleAdd}
            handleChange={this.handleChange}
            handleRemove={this.handleRemove}
            handleNextStep={this.handleNextStep}
            handlePrevStep={this.handlePrevStep}
            handleOpenModal={this.handleOpenModal}
            openModal={this.state.openModal}
            photo={this.state.photoModal}
            images={this.state.images}
            handlePhotoModal={this.handlePhotoModal}
            handleAddAnotherOffer={this.handleAddAnotherOffer}
            rooms={this.state.rooms}
            isAnother={isAnother}
            imageChoosen={this.imageChoosen}
            flats={flats}
            type={type}
          />
        );
      case 4:
        return (
          <Step5
            handleAdd={this.handleAdd}
            reservationPack={this.state.reservationPack}
            handleFinish={this.handleFinish}
            handlerPack={this.handlerPack}
            showTooltip={this.state.showTooltip}
            handlePrevStep={this.handlePrevStep}
            handleMouseEnter={this.handleMouseEnter}
          />
        );
      default:
    }
  };

  render() {
    return (
      <>
        <div className="app">
          <div
            className={
              "app overlay " +
              (this.state.openModal || this.state.photoModal
                ? "overlay-active"
                : "")
            }
          />
          <Topbar />
          {/* <div className="sidebar">Menu</div> */}
          <div className="main">
            <Container>
              <Progress progress={this.state.progress} />
              <div className="content">
                {/* <input ref={x => (this.input = x)} /> */}
                {/* <h1>Step {this.state.currentStep + 1}</h1> */}
                {this.renderContent()}
              </div>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

const store = createStore(reducers);
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

import React, {Component} from "react";
import ReactDOM from "react-dom";
import '../scss/custom.scss';
import heatSource from "../database/heatSources";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import Tooltip from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import TrafficLight from 'react-trafficlight';

class Parent extends Component {
    state = {

        buildingType: "",
        heatConsumption: 0,
        contractedPower: 0,
        heatingArea: 0,
        fuel1: "",
        fuel2: "",
        fuel3: "",
        fuelPercent1: 0,
        fuelPercent2: 0,
        fuelPercent3: 0,


    };


    callbackBuildingType = (el) => {
        this.setState({buildingType: el})
    };

    callbackBuildingData = (el1, el2, el3) => {
        this.setState({heatConsumption: el1, contractedPower: el2, heatingArea: el3})
    };
    callbackHeatSourceType = (el1, el2, el3, el4, el5, el6) => {
        this.setState({fuel1: el1, fuel2: el2, fuel3: el3, fuelPercent1: el4, fuelPercent2: el5, fuelPercent3: el6,})
    };

    callbackEfficiencyCalculator = (el1, el2, el3) => {
        this.setState({wiCounter: el1, ekCounter: el2, epCounter: el3})
    };

    callbackEfficiencySolutions = (el1, el2, el3, el4, el5, el6) => {
        this.setState({fuel1: el1, fuel2: el2, fuel3: el3, fuelPercent1: el4, fuelPercent2: el5, fuelPercent3: el6,})
    };

    render() {

        console.log(this.state);

        return (
            <>

                <Carousel>
                    <Carousel.Item>
                        <div className="carousel-elem">
                            <div className="components-base">
                                <BuildingType parentCallback={this.callbackBuildingType}/>
                                <BuildingData parentCallback={this.callbackBuildingData}/>
                            </div>


                            <Carousel.Caption>
                                <h3 className="carousel-caption-header">Twój nowy dom</h3>
                                <p className="carousel-caption-inner">Uzupełnij pola, a my powiemy Ci jaka jest
                                    efektywność energetyczna Twojego
                                    wymarzonego
                                    domu</p>


                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-elem">
                            <div className="components-base"><HeatSourceType
                                parentCallback={this.callbackHeatSourceType}/></div>

                            <Carousel.Caption>
                                <h3 className="carousel-caption-header">Zawsze ciepła atmosfera</h3>
                                <p className="carousel-caption-inner">Uzupełnij pola, a my powiemy Ci czy Twój dom
                                    spełni nowe wymagania techniczne i
                                    będzie
                                    przyjazny dla środowiska naturalnego</p>
                            </Carousel.Caption>
                        </div>

                    </Carousel.Item>
                    <Carousel.Item>

                        <div className="carousel-elem">
                            <div className="components-base"><EfficiencyCalculator fuel1={this.state.fuel1}
                                                                                   fuel2={this.state.fuel2}
                                                                                   fuel3={this.state.fuel3}
                                                                                   fuelPercent1={this.state.fuelPercent1}
                                                                                   fuelPercent2={this.state.fuelPercent2}
                                                                                   fuelPercent3={this.state.fuelPercent3}
                                                                                   heatConsumption={this.state.heatConsumption}
                                                                                   heatingArea={this.state.heatingArea}
                                                                                   buildingType={this.state.buildingType}
                                                                                   contractedPower={this.state.contractedPower}

                            /></div>

                            <Carousel.Caption>
                                <h3 className="carousel-caption-header">Budujmy!</h3>
                                <p className="carousel-caption-inner">Twój wybór w przełożeniu na wskaźniki efektywności
                                    energetycznej oraz koszty
                                    inwestycyjne</p>
                            </Carousel.Caption>

                        </div>

                    </Carousel.Item>
                    <Carousel.Item>

                        <div className="carousel-elem">
                            <div className="components-base">
                                <EfficiencySolutions fuel1={this.state.fuel1}
                                                     fuel2={this.state.fuel2}
                                                     fuel3={this.state.fuel3}
                                                     fuelPercent1={this.state.fuelPercent1}
                                                     fuelPercent2={this.state.fuelPercent2}
                                                     fuelPercent3={this.state.fuelPercent3}
                                                     parentCallback={this.callbackEfficiencySolutions}
                                                     heatConsumption={this.state.heatConsumption}
                                                     heatingArea={this.state.heatingArea}
                                                     buildingType={this.state.buildingType}
                                                     contractedPower={this.state.contractedPower}


                                />

                            </div>


                            <Carousel.Caption>
                                <h3 className="carousel-caption-header">Alternatywne rozwiązania</h3>
                                <p className="carousel-caption-inner">Spróbuj naszych propozycji przygotowanych
                                    specjalnie dla Ciebie!</p>
                            </Carousel.Caption>
                        </div>

                    </Carousel.Item>
                </Carousel>

            </>
        )


    }
}


class BuildingType extends Component {

    state = {
        buildingType: "Uzupełnij typ budynku!"
    };

    sendData = () => {
        this.props.parentCallback(this.state.buildingType);
    };


    handleChange = (name) => (key, e) => {


        this.setState({
            [name]: e.target.name
        }, this.sendData);

    };


    render() {

        return (


            <>
                <div className="input-container">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Typ budynku
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item name={"Wielorodzinny"}
                                           onSelect={this.handleChange('buildingType')}>Wielorodzinny</Dropdown.Item>
                            <Dropdown.Item name={"Jednorodzinny"}
                                           onSelect={this.handleChange('buildingType')}>Jednorodzinny</Dropdown.Item>
                        </Dropdown.Menu>


                        <div className="chosen-value">
                            {this.state.buildingType}
                        </div>
                    </Dropdown>
                </div>
            </>
        )
    }
}

class BuildingData extends Component {
    state = {
        heatConsumption: "",
        contractedPower: "",
        heatingArea: ""
    };

    sendData = () => {
        this.props.parentCallback(this.state.heatConsumption, this.state.contractedPower, this.state.heatingArea);
    };


    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, this.sendData)
    };


    render() {

        return (
            <>
                <div className="input-container">
                    <h5 className="choose-info-first">Roczne zużycie ciepła [kWh]</h5>
                    <input style={{width: "300px"}} name={"heatConsumption"} value={this.state.heatConsumption}
                           placeholder={"Podaj roczne zużycie ciepła"} onChange={this.inputHandler}/>
                </div>
                <div className="input-container">
                    <h5 className="choose-info-first">Moc zamówiona [kW]</h5>
                    <input style={{width: "300px"}} name={"contractedPower"} value={this.state.contractedPower}
                           placeholder={"Podaj moc zamówioną"} onChange={this.inputHandler}/>
                </div>
                <div className="input-container">
                    <h5 className="choose-info-first">Powierzchnia grzewcza budynku [m2]</h5>
                    <input style={{width: "300px"}} name={"heatingArea"} value={this.state.heatingArea}
                           placeholder={"Podaj powierzchnię grzewczą budynku"} onChange={this.inputHandler}/>
                </div>
            </>

        )
    }


}


class HeatSourceType extends Component {
    state = {
        fuel1: "-",
        fuel2: "-",
        fuel3: "-",
        fuelPercent1: 0,
        fuelPercent2: 0,
        fuelPercent3: 0,


    };

    sendData = () => {
        this.props.parentCallback(this.state.fuel1, this.state.fuel2, this.state.fuel3, this.state.fuelPercent1, this.state.fuelPercent2, this.state.fuelPercent3);
    };


    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, this.sendData)
    };

    handleChange = (name) => (key, e) => {
        this.setState({
            [name]: e.target.name
        }, this.sendData);
    };

    render() {

        return (
            <>

                <div className="input-container">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Paliwo 1
                        </Dropdown.Toggle>
                        <div className="chosen-value">
                            {this.state.fuel1}
                        </div>
                        <Dropdown.Menu>
                            <Dropdown.Item name={"-"} onSelect={this.handleChange('fuel1')}>-- Brak --</Dropdown.Item>
                            <Dropdown.Item name={"Olej opałowy"} onSelect={this.handleChange('fuel1')}>Olej
                                opałowy</Dropdown.Item>
                            <Dropdown.Item name={"Gaz ziemny"} onSelect={this.handleChange('fuel1')}>Gaz
                                ziemny</Dropdown.Item>
                            <Dropdown.Item name={"Węgiel kamienny"} onSelect={this.handleChange('fuel1')}>Wegiel
                                kamienny</Dropdown.Item>
                            <Dropdown.Item name={"Węgiel brunatny"} onSelect={this.handleChange('fuel1')}>Wegiel
                                brunatny</Dropdown.Item>
                            <Dropdown.Item name={"Biomasa"}
                                           onSelect={this.handleChange('fuel1')}>Biomasa</Dropdown.Item>
                            <Dropdown.Item name={"Słońce"} onSelect={this.handleChange('fuel1')}>Słońce</Dropdown.Item>
                            <Dropdown.Item name={"Energia geotermalna"} onSelect={this.handleChange('fuel1')}>Energia
                                geotermalna</Dropdown.Item>
                            <Dropdown.Item name={"Ciepło odpadowe z przemysłu"} onSelect={this.handleChange('fuel1')}>Ciepło
                                odpadowe z przemysłu</Dropdown.Item>
                            <Dropdown.Item name={"Energia elektryczna"} onSelect={this.handleChange('fuel1')}>Energia
                                elektryczna</Dropdown.Item>

                        </Dropdown.Menu>
                        <div>
                            <h5 className="choose-info-second">Podaj przewidywany udział paliwa 1 w energii końcowej
                                [%]</h5>
                            <input name={"fuelPercent1"} value={this.state.fuelPercent1}
                                   placeholder={"Uzupełnij paliwo 1"}
                                   onChange={this.inputHandler}/>
                        </div>
                    </Dropdown>
                </div>
                <div className="input-container">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Paliwo 2
                        </Dropdown.Toggle>
                        <div className="chosen-value">
                            {this.state.fuel2}
                        </div>

                        <Dropdown.Menu>
                            <Dropdown.Item name={"-"} onSelect={this.handleChange('fuel2')}>-- Brak --</Dropdown.Item>
                            <Dropdown.Item name={"Olej opałowy"} onSelect={this.handleChange('fuel2')}>Olej
                                opałowy</Dropdown.Item>
                            <Dropdown.Item name={"Gaz ziemny"} onSelect={this.handleChange('fuel2')}>Gaz
                                ziemny</Dropdown.Item>
                            <Dropdown.Item name={"Węgiel kamienny"} onSelect={this.handleChange('fuel2')}>Wegiel
                                kamienny</Dropdown.Item>
                            <Dropdown.Item name={"Węgiel brunatny"} onSelect={this.handleChange('fuel2')}>Wegiel
                                brunatny</Dropdown.Item>
                            <Dropdown.Item name={"Biomasa"}
                                           onSelect={this.handleChange('fuel2')}>Biomasa</Dropdown.Item>
                            <Dropdown.Item name={"Słońce"} onSelect={this.handleChange('fuel2')}>Słońce</Dropdown.Item>
                            <Dropdown.Item name={"Energia geotermalna"} onSelect={this.handleChange('fuel2')}>Energia
                                geotermalna</Dropdown.Item>
                            <Dropdown.Item name={"Ciepło odpadowe z przemysłu"} onSelect={this.handleChange('fuel2')}>Ciepło
                                odpadowe z przemysłu</Dropdown.Item>
                            <Dropdown.Item name={"Energia elektryczna"} onSelect={this.handleChange('fuel2')}>Energia
                                elektryczna</Dropdown.Item>

                        </Dropdown.Menu>
                        <div>
                            <h5 className="choose-info-second">Podaj przewidywany udział paliwa 2 w energii końcowej
                                [%]</h5>
                            <input name={"fuelPercent2"} value={this.state.fuelPercent2}
                                   placeholder={"Uzupełnij paliwo 2"}
                                   onChange={this.inputHandler}/>
                        </div>
                    </Dropdown>
                </div>

                <div className="input-container">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Paliwo 3
                        </Dropdown.Toggle>
                        <div className="chosen-value">
                            {this.state.fuel3}
                        </div>
                        <Dropdown.Menu>
                            <Dropdown.Item name={"-"} onSelect={this.handleChange('fuel3')}>-- Brak --</Dropdown.Item>
                            <Dropdown.Item name={"Olej opałowy"} onSelect={this.handleChange('fuel3')}>Olej
                                opałowy</Dropdown.Item>
                            <Dropdown.Item name={"Gaz ziemny"} onSelect={this.handleChange('fuel3')}>Gaz
                                ziemny</Dropdown.Item>
                            <Dropdown.Item name={"Węgiel kamienny"} onSelect={this.handleChange('fuel3')}>Wegiel
                                kamienny</Dropdown.Item>
                            <Dropdown.Item name={"Węgiel brunatny"} onSelect={this.handleChange('fuel3')}>Wegiel
                                brunatny</Dropdown.Item>
                            <Dropdown.Item name={"Biomasa"}
                                           onSelect={this.handleChange('fuel3')}>Biomasa</Dropdown.Item>
                            <Dropdown.Item name={"Słońce"} onSelect={this.handleChange('fuel3')}>Słońce</Dropdown.Item>
                            <Dropdown.Item name={"Energia geotermalna"} onSelect={this.handleChange('fuel3')}>Energia
                                geotermalna</Dropdown.Item>
                            <Dropdown.Item name={"Ciepło odpadowe z przemysłu"} onSelect={this.handleChange('fuel3')}>Ciepło
                                odpadowe z przemysłu</Dropdown.Item>
                            <Dropdown.Item name={"Energia elektryczna"} onSelect={this.handleChange('fuel3')}>Energia
                                elektryczna</Dropdown.Item>
                        </Dropdown.Menu>
                        <div>
                            <h5 className="choose-info-second">Podaj przewidywany udział paliwa 3 w energii końcowej
                                [%]</h5>
                            <input name={"fuelPercent3"} value={this.state.fuelPercent3}
                                   placeholder={"Uzupełnij paliwo 3"}
                                   onChange={this.inputHandler}/>
                        </div>
                    </Dropdown>
                </div>


            </>
        )
    }
}


class EfficiencyCalculator extends Component {


    render() {

        if (!this.props.fuel1 || !this.props.fuel2 || !this.props.fuel3 || (parseFloat(this.props.fuelPercent1) + parseFloat(this.props.fuelPercent2) + parseFloat(this.props.fuelPercent3) !== 100) ||
            this.props.heatConsumption == "" || this.props.contractedPower == "" || this.props.heatingArea == "" || this.props.buildingType == "") {
            return <div style={{width: "400px", textAlign: "center"}} className="alert alert-warning" role="alert">
                Sprawdź czy poprawnie wpisałeś wszystkie dane!
            </div>
        }

        let fuel1Factor = heatSource.find(elm => elm.fuel === this.props.fuel1).wiFactor;
        let fuel2Factor = heatSource.find(elm => elm.fuel === this.props.fuel2).wiFactor;
        let fuel3Factor = heatSource.find(elm => elm.fuel === this.props.fuel3).wiFactor;
        console.log(fuel1Factor, fuel2Factor, fuel3Factor);

        let wiCounter = Math.round(((fuel1Factor * this.props.fuelPercent1 / 100) + (fuel2Factor * this.props.fuelPercent2 / 100) + (fuel3Factor * this.props.fuelPercent3 / 100)) * 100) / 100;


        let ekCounter = Math.round(this.props.heatConsumption / this.props.heatingArea);

        let epCounter = Math.round(wiCounter * ekCounter);


        return (
            <>
                <div className="efficiency-results-container">
                    <h1 className="results-data">w<sub>i</sub> wynosi: {wiCounter}</h1>
                    <h1 className="results-data">EK wynosi: {ekCounter}</h1>
                    <h1 className="results-data">EP wynosi: {epCounter}</h1>
                </div>
                <EfficiencyPrint buildingType={this.props.buildingType} epCounter={epCounter}/>
                <SolutionCost contractedPower={this.props.contractedPower}
                              fuelPercent1={this.props.fuelPercent1}
                              fuelPercent2={this.props.fuelPercent2}
                              fuelPercent3={this.props.fuelPercent3}
                              fuel1={this.props.fuel1}
                              fuel2={this.props.fuel2}
                              fuel3={this.props.fuel3}/>
                {/*<EfficiencySolutions/>*/}
            </>

        );

    }

}

class EfficiencyPrint extends Component {

    state = {
        redOn: false,
        yellowOn: false,
        greenOn: false,
    };


    render() {
        console.log(this.state, this.props.buildingType, this.props.epCounter)

        let red = false;
        let yellow = false;
        let green = false;
        let message = "";


        if ((this.props.buildingType === "Jednorodzinny" && this.props.epCounter <= 60) || (this.props.buildingType === "Wielorodzinny" && this.props.epCounter <= 55)) {
            green = true;
            message = "Twój budynek otrzyma pozwolenie budowlane";
        } else if ((this.props.buildingType === "Jednorodzinny" && this.props.epCounter <= 70) || (this.props.buildingType === "Wielorodzinny" && this.props.epCounter <= 65)) {
            yellow = true;
            message = "Twój budynek jest na krawędzi otrzymania pozwolenia na budowę";
        } else if ((this.props.buildingType === "Jednorodzinny" && this.props.epCounter > 70) || (this.props.buildingType === "Wielorodzinny" && this.props.epCounter > 65)) {
            red = true;
            message = "Twój budynek w tej konfiguracji nie otrzyma pozwolenia na budowę";
        }


        return (
            <>
                <TrafficLight
                    RedOn={red}
                    YellowOn={yellow}
                    GreenOn={green}
                />
                <h1 className="results-data">{message}</h1>
            </>
        );
    }


}


class SolutionCost extends Component {

    render() {


        let source1price = heatSource.find(elm => elm.fuel === this.props.fuel1).pricePerKW;
        let source2price = heatSource.find(elm => elm.fuel === this.props.fuel2).pricePerKW;
        let source3price = heatSource.find(elm => elm.fuel === this.props.fuel3).pricePerKW;

        let totalCost = this.props.contractedPower * ((source1price * this.props.fuelPercent1 / 100) + (source2price * this.props.fuelPercent2 / 100) + (source3price * this.props.fuelPercent3 / 100))/1000 ;
        console.log(totalCost, source1price, source2price, source3price, this.props.contractedPower, this.props.fuelPercent1, this.props.fuelPercent2, this.props.fuelPercent3)
        return (
            <>
                <h1 className="results-data">Koszt całkowity instalacji to: {totalCost} kPLN</h1>
            </>)

    }

}

class EfficiencySolutions extends Component {

    state = {

        fuel1: this.props.fuel1,
        fuel2: this.props.fuel2,
        fuel3: this.props.fuel3,
        fuelPercent1: this.props.fuelPercent1,
        fuelPercent2: this.props.fuelPercent2,
        fuelPercent3: this.props.fuelPercent3,


    };


    sendData = () => {
        this.props.parentCallback(this.state.fuel1, this.state.fuel2, this.state.fuel3, this.state.fuelPercent1, this.state.fuelPercent2, this.state.fuelPercent3);
    };

    handleChange = (name) => (key, e) => {
        this.setState({
            [name]: e.target.name
        }, this.sendData);
    };

    setPVPC = () => {
        this.setState({
            fuel1: "Energia elektryczna",
            fuel2: "Słońce",
            fuel3: "-",
            fuelPercent1: 30,
            fuelPercent2: 70,
            fuelPercent3: 0,
        }, this.sendData)
    };

    setBiomass = () => {
        this.setState({
            fuel1: "Biomasa",
            fuel2: "-",
            fuel3: "-",
            fuelPercent1: 100,
            fuelPercent2: 0,
            fuelPercent3: 0,
        }, this.sendData)
    };


    render() {
        if (!this.props.fuel1 || !this.props.fuel2 || !this.props.fuel3 || (parseFloat(this.props.fuelPercent1) + parseFloat(this.props.fuelPercent2) + parseFloat(this.props.fuelPercent3) !== 100) ||
            this.props.heatConsumption == "" || this.props.contractedPower == "" || this.props.heatingArea == "" || this.props.buildingType == "") {
            return <div style={{width: "400px", textAlign: "center"}} className="alert alert-warning" role="alert">
                Sprawdź czy poprawnie wpisałeś wszystkie dane!
            </div>
        }
        return (
            <>
                <div className="text-success alternative-request">
                    <h3> Nie jesteś zadowolony z wyników?</h3>
                    <h1>Spróbuj gotowych rozwiązań!</h1>
                </div>
                <div className="alternative-container">
                    <button type="button" className="btn btn-success alternative-btn"
                            onClick={this.setPVPC}>Fotowoltaika z pompą ciepła
                    </button>
                    <button type="button" className="btn btn-success alternative-btn" onClick={this.setBiomass}>Kocioł
                        biomasowy
                    </button>
                </div>
            </>
        )

    }

}

class App extends Component {


    render() {
        return (
            <>
                <Parent/>

            </>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById("app"));

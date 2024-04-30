// Filename - pages/about.js

import React from "react";
import "./App.css";
import { FaChalkboard } from "react-icons/fa";
class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      className: "",
      hitDie: "",
      randomProf1: "",
      randomProf2: "",
      saveThrow1: "",
      saveThrow2: "",
      startEqu1: "",
      startEqu2: "",
    

      DataisLoaded: false,
      buttonPress: false,
    };
  };

  // buttonTime() {


  //   this.setState({
  //     buttonPress: true,
  //   });
  // }

    buttonTime = () => {
      this.setState({
          buttonPress: true,
      });
    }
      buttonReset = () => {
        window.location.reload(false);
      }

  componentDidMount() {
    fetch("https://www.dnd5eapi.co/api/classes")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        let nameIndex = Math.floor(Math.random() * json.results.length);
        //        console.log("dtdtd ", json.results[nameIndex].index);

        this.setState({
          className: json.results[nameIndex].name,
          DataisLoaded: true,
        });

        // const { DataisLoaded, className } = this.state;
        const randomClass =
          "https://www.dnd5eapi.co/api/classes/" +
          json.results[nameIndex].index;
        console.log(randomClass);
      
        fetch(randomClass)
          .then((res) => res.json())
          .then((json2) => {
            console.log("state", this.state.className);
            console.log("SDLKFJSDLKFJSLDKJFSD ", json2);

            const raceList = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Tiefling"];

            let raceListIndex = Math.floor(Math.random() * raceList.length)
            var race = raceList[raceListIndex]

            var str = Math.floor((Math.random() * 6) + (Math.random() * 6) + (Math.random() * 6))
            var dex = Math.floor((Math.random() * 6) + (Math.random() * 6) + (Math.random() * 6))
            var con = Math.floor((Math.random() * 6) + (Math.random() * 6) + (Math.random() * 6))
            var int = Math.floor((Math.random() * 6) + (Math.random() * 6) + (Math.random() * 6))
            var wis = Math.floor((Math.random() * 6) + (Math.random() * 6) + (Math.random() * 6))
            var cha = Math.floor((Math.random() * 6) + (Math.random() * 6) + (Math.random() * 6))

            let randomProf1Index = Math.floor(Math.random() * json2.proficiencies.length)
            let randomProf2Index = randomProf1Index;
            while(randomProf1Index == randomProf2Index) {
            randomProf2Index = Math.floor(Math.random() * json2.proficiencies.length)
            }
            let randomEqu1Index = Math.floor(Math.random() * json2.starting_equipment_options.length)
            let randomEqu2Index = randomEqu1Index;
            while(randomEqu1Index == randomEqu2Index) {
              randomEqu2Index = Math.floor(Math.random() * json2.starting_equipment_options.length)
            }

            console.log("options", json2.starting_equipment_options)
            console.log(randomEqu2Index)

            console.log("111111", json2.starting_equipment_options[randomEqu1Index])

            console.log("222222", json2.starting_equipment_options[randomEqu2Index])

        this.setState({
            race,
            str, dex, con, int, wis, cha,
            hitDie: json2.hit_die,
            randomProf1: json2.proficiencies[randomProf1Index].name,
            randomProf2: json2.proficiencies[randomProf2Index].name,
            saveThrow1: json2.saving_throws[0].name,
            saveThrow2: json2.saving_throws[1].name,
            startEqu1: json2.starting_equipment_options[randomEqu1Index].desc,
            startEqu2: json2.starting_equipment_options[randomEqu2Index].desc
        });




          });
      });
  }

  render() {
    const { DataisLoaded, buttonPress, className, race, str, dex, con, int, wis, cha, hitDie, randomProf1, randomProf2, saveThrow1, saveThrow2, startEqu1, startEqu2} = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Please wait some time... </h1>
        </div>
      );
    if (!buttonPress)
        return (
        <div className="App">
          <h1> Press the Button to Generate! </h1>
          <button type="button" onClick={this.buttonTime}>Generate!</button>
        </div>
      );

    return (
      <div className="App">
        <h1>Character Generator!</h1>
        <button type="button" onClick={this.refreshPage}>Generate!</button>
        <h3>Class Name: {className} | Race: {race}</h3>
        <h3>Str: {str} | Dex: {dex} | Con: {con} | Int: {int} | Wis: {wis} | Cha: {cha}</h3>
        <h3>Hit Die: {hitDie}</h3>
        <h3>Random Proficiency 1: {randomProf1} | Random Proficiency 2: {randomProf2}</h3>
        <h3>Saving Throw 1: {saveThrow1} | Saving Throw 2: {saveThrow2}</h3>
        <h3>Starting Equipment Choice 1: {startEqu1}</h3>
        <h3>Starting Equipment Choice 2: {startEqu2}</h3>
      </div>
    );
  }
}

export default About;

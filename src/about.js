
// Filename - pages/about.js
 
import React from "react";
import './App.css';
class About extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            className: "",
          DataisLoaded: false,
        };
      }
    
        componentDidMount() {
          fetch("https://www.dnd5eapi.co/api/classes")
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                
                console.log("dtdtd ", json.results[0].index)

              this.setState({
                className: json.results[0].index,
                DataisLoaded: true,
            });
          });
        }

        render() {
            const { DataisLoaded, className } = this.state;
            if (!DataisLoaded)
                return (
                    <div>
                      <h1> Please wait some time... </h1>
                    </div>
                  );

    return (
        <div>
        <h1>This is a test to see if you still got ya apis holmes</h1>
        <h3>Class Name: {className}</h3>
        </div>

    );
}
}
 
export default About;
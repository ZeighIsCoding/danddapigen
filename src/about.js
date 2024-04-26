
// Filename - pages/about.js
 
import React from "react";
import './App.css';
class About extends React.Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          items: [],
          DataisLoaded: false,
        };
      }
    
        componentDidMount() {
          fetch("https://www.dnd5eapi.co")
            .then((res) => res.json())
            .then((json) => {
              this.setState({
                items: json,
                DataisLoaded: true,
            });
          });
        }

        render() {
            const { DataisLoaded, items } = this.state;
            if (!DataisLoaded)
                return (
                    <div>
                      <h1> Please wait some time... </h1>
                    </div>
                  );

    return (
        <h1>This is a test to see if you still got ya apis holmes</h1>
        
    );
}
}
 
export default About;
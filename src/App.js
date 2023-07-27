import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Ahmed Eladawy",
        bio: "lumpsum",
        imgSrc:
          "https://e7.pngegg.com/pngimages/18/809/png-clipart-user-computer-icons-person-icon-cdr-logo-thumbnail.png",
        profession: "sumlump",
      },
      showPerson: true,
      timer: 0,
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <>
        <button onClick={()=>this.setState((prev) => ({showPerson: !prev.showPerson, timer:0}))}>
          Switch
        </button>
      
    
       {this.state.showPerson && ( <div>
       <div>{this.state.person.fullName}</div>
        <div>{this.state.person.bio}</div>
        <img src="https://e7.pngegg.com/pngimages/18/809/png-clipart-user-computer-icons-person-icon-cdr-logo-thumbnail.png" alt={"ay 7aga"}/>
        <div>{this.state.person.profession}</div>
        <div>Timer: {this.state.timer}</div>
        </div>
        
       )}
</>
      
    )
  }
}

export default App;

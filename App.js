import React from "react";
import Bases from './Bases'
import Dog1 from './dog1.jpg'
import Dog2 from './dog2.jpg'
import Dog3 from './dog3.jpg'

class App extends React.Component {
  state={
    Name:"Daniel",
    Img:Dog1,
    Description:"salut Daniel"
  }
  render(){
  return (
    <div className="App"> 
   <center>
     
      <button onClick={()=>{this.setState({Name : "Sarra",Img : Dog2, Description: "Salut Sarra"})}}>Sarra</button>
      <button onClick={()=>{this.setState({Name : "Harold",Img : Dog3, Description: "Salut Harold"})}}>Harold</button>
      <button onClick={()=>{this.setState({Name : "Daniel",Img : Dog1, Description: "Salut Daniel"})}}>Daniel</button>
    <Bases name={this.state.Name} img={this.state.Img} desc={this.state.Description}/>
  
     </center>
  </div>

  
  );
  }
}

export default App;
    
  


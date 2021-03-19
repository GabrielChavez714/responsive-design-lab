
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
      
    }
  }

  clickHandler = () => {
    this.setState({open: !this.state.open})
  }
  

  render() {
    const {open} = this.state
    return (
      <>
      <header> 
        <div className="logo">Start Bootstrap</div> 
        <span onClick={this.clickHandler}>&#9776;</span>
        <nav className={open ? 'opened' : 'closed'}>
          <p>ABOUT</p>
          <p>PROJECTS</p>
          <p>CONTACT</p>
        </nav>
      </header>
      <section></section>
      </>
    )
  }
}

export default App;

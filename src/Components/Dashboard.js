import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
// import AuthModal from './AuthModal';
import '../App.css';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    }
  }

  userAuthenticated = () => {
    console.log(this.props)
    if(this.props.user.username){
        this.props.history.push('/style')
    } else {
        console.log('hit else')
        this.handleToggle()
        console.log(this.state.showModal)
    }
  }

  handleToggle = () => {
    this.setState({showModal: !this.state.showModal})
  }

  render(){
    return (
      <div className="Dashboard">
        <div className='dash-container'>
          <div className='container-one'>
            <img className="slide-img" 
                 src='https://i.ytimg.com/vi/bIhm9RaX7qw/maxresdefault.jpg'
                 alt='group img'/>
          </div>
          <div className='container-two'>
            <div className='about-box'>
              <p>Title</p>
              <p>Text</p>
              <button onClick={() => this.props.history.push('/about')}>Learn More</button>
            </div>
            <img className='about-img' 
                 src='https://i.ytimg.com/vi/hvJ8kBVMAgM/maxresdefault.jpg' alt='about-img'/>
          </div>
          <div className='container-three'>
            <nav className="ribbon ribbon-alpha" role="navigation" aria-label="breadcrumbs">
              <div className="ribbon-element" 
                   onClick={() => this.props.history.push("/style")}>Pick a style
                <div class="arrow-right"/>
              </div>
              <div className="ribbon-element" 
                   onClick={() => this.props.history.push("/style")}>Build your bike
                <div class="arrow-right"/>
              </div>
              <div className="ribbon-element"
                 aria-current="page">Ride!
              </div>
            </nav>
          </div>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default withRouter(Dashboard);
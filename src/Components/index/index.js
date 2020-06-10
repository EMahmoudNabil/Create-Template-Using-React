import React ,{Component} from 'react';
import Home from './../Home'
import About from './../About'
import Footer from './../Footer'
import Portofolio from './../Portofolio'
import Profile from './../Profile'
import Social from './../SocialMedia'
import Work from './../Works'


class Index extends Component {


  render()
{  return (
    <div>
     
      <Home />
      <Work />
      <Portofolio />
      <Profile />
      <About />
      <Social />
      <Footer />

  
     
    </div>
  );
}}

export default Index;

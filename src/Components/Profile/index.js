import React, { Component } from 'react';
import './style.css'
import axios from 'axios';


class  Profile extends Component {
  
  state={
    bar:[]
  }
  componentDidMount(){
  axios.get('api/data.json').then(res => {this.setState({bar:res.data.bar})})   
  }

  render(){
    const{bar}= this.state;
      const barList = bar.map((barItem) => {
          return(
            <div class="bar" key={barItem.id}>
            <span class="title">{barItem.title}</span>
            <span class="perc">{barItem.parent}</span>
            <div class="parent">
                <span class={barItem.sp}></span>
            </div>
        </div>
          )
      })



    return(
      <div class="profile_skills">
      <div class="container">
          <div class="profile">
              <h2 class="profile-title"><span>My </span>Profile</h2>
              <ul class="profile-list">
                  <li class="profile-item">
                      <span>Name</span>
                      Mahmoud Nabil
                  </li>
                  <li class="profile-item">
                      <span>Birthday</span>
                      12/8/1995
                  </li>
                  <li class="profile-item">
                      <span>Address</span>
                      Banha
                  </li>
                  <li class="profile-item">
                      <span>Phone</span>
                      (+2011) 4628 5867
                  </li>
                  <li class="profile-item">
                      <span>Email</span>
                      e.mahmoudnabil@gmail.com
                  </li>
                  <li class="profile-item">
                      <span>Website</span>
                      <span class="web">www.google.com</span>
                  </li>
              </ul>
          </div>
          
          <div class="skills">
              <h2 class="skills-title">Some <span>skills</span></h2>
              <p class="skills-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
              </p>
              {barList}
          </div>
          
      </div> 
  </div>
      )


  }
 
}

export default Profile;

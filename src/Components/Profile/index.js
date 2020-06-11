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
            <div className="bar" key={barItem.id}>
            <span className="title">{barItem.title}</span>
            <span className="perc">{barItem.parent}</span>
            <div className="parent">
                <span className={barItem.sp}></span>
            </div>
        </div>
          )
      })



    return(
      <div className="profile_skills">
      <div className="container">
          <div className="profile">
              <h2 className="profile-title"><span>My </span>Profile</h2>
              <ul className="profile-list">
                  <li className="profile-item">
                      <span>Name</span>
                      Mahmoud Nabil
                  </li>
                  <li className="profile-item">
                      <span>Birthday</span>
                      12/8/1995
                  </li>
                  <li className="profile-item">
                      <span>Address</span>
                      Banha
                  </li>
                  <li className="profile-item">
                      <span>Phone</span>
                      (+2011) 4628 5867
                  </li>
                  <li className="profile-item">
                      <span>Email</span>
                      e.mahmoudnabil@gmail.com
                  </li>
                  <li className="profile-item">
                      <span>Website</span>
                      <span className="web">www.google.com</span>
                  </li>
              </ul>
          </div>
          
          <div className="skills">
              <h2 className="skills-title">Some <span>skills</span></h2>
              <p className="skills-desc">
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

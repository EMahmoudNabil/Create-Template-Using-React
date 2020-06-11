import React, { Component } from 'react';
import './style.css';
import axios from 'axios';


class Social extends Component {
  state={
    social:[]
  }
  componentDidMount(){
    axios.get('api/data.json').then(res => {this.setState({social:res.data.social})})   
   }

render(){
const{social}= this.state;
const socialList = social.map((socialItem) => {
    return(
      <div className={socialItem.social} key={socialItem.id}>
        <i className={socialItem.icon}></i>
        <p>
            <span className="info1">{socialItem.title}</span>
            <span className="info2">{socialItem.body}</span>
        </p>
    </div>
    )
})

  return (





    
    <div className="social-media">
            
      {socialList}
</div>
);}
  
}

export default Social;


import React, { Component } from 'react';  
import './style.css' ;
import axios from 'axios';


class Portofolio extends Component{
    
    state={
        Portofolio:[]
    }
    componentDidMount(){
     axios.get('api/data.json').then(res => {this.setState({Portofolio:res.data.portfolio})})   
    }
  
    render(){

        const{Portofolio}= this.state;
        const PortofolioImages = Portofolio.map((ImgItem) => {
            return(
           
                <div  class="box" key={ImgItem.id}>
                    <div>
                    <img src={ImgItem.image} alt="" />
                    <p class="overlay">
                        <span>
                            Show Image
                            {console.log(ImgItem.image)}
                        </span>
                    </p>
                    </div>
               </div>

               


            )
        })
        return(
           <div class="portfolio">
            <h2 class="portfolio-title"><span>My</span> Portfolio</h2>
            <ul class="portfolio-list">
                <li class="portfolio-item active">All</li>
                <li class="portfolio-item">HTML</li>
                <li class="portfolio-item">Photoshop</li>
                <li class="portfolio-item">Wordpress</li>
                <li class="portfolio-item">Mobile</li>
            </ul>

            {PortofolioImages}
        
            
            </div>
        )
    }
}

export default  Portofolio
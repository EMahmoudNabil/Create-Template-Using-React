
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
           
                <div  className="box" key={ImgItem.id}>
                    <div>
                    <img src={ImgItem.image} alt="" />
                    <p className="overlay">
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
           <div className="portfolio">
            <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
            <ul className="portfolio-list">
                <li className="portfolio-item active">All</li>
                <li className="portfolio-item">HTML</li>
                <li className="portfolio-item">Photoshop</li>
                <li className="portfolio-item">Wordpress</li>
                <li className="portfolio-item">Mobile</li>
            </ul>

            {PortofolioImages}
        
            
            </div>
        )
    }
}

export default  Portofolio
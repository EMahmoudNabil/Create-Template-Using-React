import React from 'react';
import{Home1,HomeInformation, HomeTitle ,HomeInfo, HomeDesc ,Span,HomeBtn} from './style'




const Home=() => {
  return (
    <Home1>
      <div className="container">
          <HomeInformation >
              <HomeTitle>Mahmoud Nabil</HomeTitle>
              <HomeInfo>Web Developer</HomeInfo>
              <HomeDesc>
                  Iam a professional <Span>React & Native </Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
              </HomeDesc> 
              <HomeBtn>Let's Begin</HomeBtn>
          </HomeInformation> 
      </div>
  </Home1>

     
    
  );
}

export default Home;

import React, { Component } from 'react';
import mark3 from './img/mark3.svg';
import instagram_black from './img/instagram_black.svg';
import vk_black from './img/vk_black.svg';
import facebook_black from './img/facebook_black.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
       
       <div className="wrapper">

<div className="logo_contacts">

<div className="romb">
<div className="logo">
<div><img src={mark3} alt="logo"/></div>
<div className="logo_logo">NORN</div>       
</div></div>

    <div className="contacts">
           
                    <ul className="menu_tab">
                    <li className="it"><a href="" className="line">КУРСЫ</a></li>
                    <li className="it"><a href="" className="line">О НАС</a></li>
                    <li className="it"><a href="" className="line">ЛЕТНЯЯ ШКОЛА</a></li>
                    <li className="it"><a href="" className="line">КОНТАКТЫ</a></li>  
                    </ul>
                
             <div className="contacts_text">
            <div>+ 7 893 567 78 67</div>
            <div><a href=""><img src={instagram_black} alt="instagram"/></a></div>
            <div><a href=""><img src={vk_black} alt="vk"/></a></div>
            <div><a href=""><img src={facebook_black} alt="facebook"/></a></div>
        </div>  
                    
</div>
</div>
</div>
     

<div className="raspisanie">
<div className="raspisanie_fon"></div>
<div className="rombiki_raspisanie">
<div className="rombiki_raspisanie1"></div>
<div className="rombiki_raspisanie2">
<div className="rombiki_raspisanie2_1"></div></div>
<div className="rombiki_raspisanie3"> 
<div className="rombiki_raspisanie3_1"></div></div>
<div className="rombiki_raspisanie4"></div>
<div className="rombiki_raspisanie5">
<div className="rombiki_raspisanie5_1"></div></div>
<div className="rombiki_raspisanie6">
<div className="rombiki_raspisanie6_1"></div></div>
<div className="rombiki_raspisanie7"></div>
<div className="rombiki_raspisanie8"></div></div>
<div className="rombiki_raspisanie_text">
<div className="yrok_raspisanie">
<div className="effekt_raspisanie">05.02 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;исландский А1</div>
<div className="effekt_raspisanie">07.02 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;исландский А2</div>
<div className="effekt_raspisanie">10.02 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;норвежский B1</div>
<div className="effekt_raspisanie">20.02 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;финский А1</div></div>
<div className="rombiki_raspisanie_mesiac">ФЕВРАЛЬ</div></div>
</div>
</div>
    );
  }
}

export default App;

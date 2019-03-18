import React, { Component } from 'react';
import Header from './components/Header/Header';
import Rombiki from './components/Rombiki/Rombiki';
import Footer from './components/Footer/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
     
     <div className="App">
       
       <div className="wrapper">
       <Header/>

<div className="container_yaziki">
        <div className="text_yaziki"><p>КАКОЙ ЯЗЫК<br/>ХОТИТЕ ИЗУЧАТЬ?</p></div>

        
<div className="romb_norv">
    <div className="romb_norv_flex">
    <div className="text_norv_kub">НОРВЕЖСКИЙ</div>
    <div className="text_norv_kub_2">
        <a className="test" href="">Пройти входное тестирование</a>
        <div className="strelka"><img src="/img/arrow_black.svg" alt="arrow" width="20px" height="26px"/></div></div>
    </div>
</div>


<div className="romb_islan">   
    <div className="foto_islan"><img src="/img/img_reykjavik.png" alt="reykjavik" width="255px" height="255px"/></div>    
    <div className="text_yaziki_romb">ИСЛАНСКИЙ</div>
</div> 
<div className="romb_shved">
        <div className="foto_shved"><img src="/img/img_stokgolm.png" alt="stokgolm" width="255px" height="255px"/></div>
    <div className="text_yaziki_romb">ШВЕДСКИЙ</div>
</div> 
<div className="romb_fin">
        <div className="foto_fin"><img src="/img/img_helsinki.png" alt="helsinki" width="255px" height="255px"/></div>
    <div className="text_yaziki_romb">ФИНСКИЙ</div>
</div> 
<div className="romb_dat">
        <div className="foto_dat"><img src="/img/img_kopengagen.png" alt="kopengagen" width="255px" height="255px"/></div>
    <div className="text_yaziki_romb">ДАТСКИЙ</div>
</div> 
<div className="romb_bordo"></div>
<div className="romb_setyi">
<div className="romb_white">
        <div className="romb_siniy"></div>
</div>

</div>
        
    </div>

    <div className="container_yrovni">
            <div className="tex_yrovni">ВЫБЕРЕТЕ ВАШ УРОВЕННЬ ВЛАДЕНИЯ ЯЗЫКОМ</div>
            <div className="flex_yrovni">
                <div className="yrovni">
                    <div className="znachki"><img src="/img/rombik_white.svg" alt="rombik" width="30px" height="30px"/></div>
                <div className="flex_yrovni_text">
                    <div className="text_yrovni_vubor">Начинающий (A1)</div>
                    <div className="text_yrovni_vubor2">Можете достаточно свободно общаться на английском на отвлеченные темы, способны взаимодействовать с носителями языка без напряжения для каждой из сторон</div>
                </div>
                </div>
                <div className="yrovni">
                        <div className="znachki"><img src="/img/rombik_prozrachnyi.svg" alt="rombik" width="30px" height="30px"/></div>
                    <div className="flex_yrovni_text">
                        <div className="text_yrovni_vubor">Начинающий (A2)</div>
                        <div className="text_yrovni_vubor2">В состоянии написать связное сообщение 
                                (эссе, письмо) на незнакомую вам тематику</div>
                    </div>
                    </div>
                    <div className="yrovni">
                            <div className="znachki"><img src="/img/rombik_prozrachnyi.svg" alt="rombik" width="30px" height="30px"/></div>
                        <div className="flex_yrovni_text">
                            <div className="text_yrovni_vubor">Продолжающий (B1)</div>
                            <div className="text_yrovni_vubor2">Свободно смотрите большинство англоязычных телепрограмм: интервью, репортажи, ток-шоу, прямые трансляции
                                </div>
                        </div>
                        </div>
                        <div className="yrovni">
                                <div className="znachki"><img src="/img/rombik_prozrachnyi.svg" alt="rombik" width="30px" height="30px"/></div>
                            <div className="flex_yrovni_text">
                                <div className="text_yrovni_vubor">Продолжающий (B2)</div>
                                <div className="text_yrovni_vubor2">Способны понять суть сложного текста на конкретную или абстрактную тему, готовы поддержать обстоятельную беседу 
                                        на английском языке на тему вашей профессиональной специализации</div>
                            </div>
                            </div>
                            <div className="yrovni">
                                    <div className="znachki"><img src="/img/rombik_dvoinoi.svg" alt="rombik" width="65px" height="45px"/></div>
                                <div className="flex_yrovni_text">
                                    <div className="text_yrovni_vubor">Продвинутый (C1)</div>
                                    <div className="text_yrovni_vubor2">Умеете выстраивать ясные и подробные высказывания по широкому кругу вопросов; можете изложить свой взгляд на проблему, указать на преимущества и недостатки 
                                            различных вариантов ее решения
                                            
                                            </div>
                                </div>
                                </div>
                                <div className="yrovni">
                                        <div className="znachki"><img src="/img/rombik_prozrachnyi.svg" alt="rombik" width="30px" height="30px"/></div>
                                    <div className="flex_yrovni_text">
                                        <div className="text_yrovni_vubor">Продвинутый (C2)</div>
                                        <div className="text_yrovni_vubor2">Умеете выстраивать ясные и подробные высказывания по широкому кругу вопросов; можете изложить свой взгляд на проблему, указать на преимущества и недостатки 
                                                различных вариантов ее решения
                                                
                                                </div>
                                    </div>
                                    </div>
            </div>
      
    </div>

    <div className="container_raspisanie">
    <div className="tex_raspisanie">РАСПИСАНИЕ СТАРТА КУРСОВ</div>
    <div className="tex_raspisanie2">Чтобы узнать дату первого занятия, выбирете язык и уровень выше</div>
    <div className="flex_raspisanie">
            <div className="raspisanie">
                    <div className="raspisanie_fon"></div>
                    <Rombiki/>
                    <div className="rombiki_raspisanie_text">
                    <div className="yrok_raspisanie">
                    <div className="effekt_raspisanie">05.02 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;исландский А1</div>
                    <div className="effekt_raspisanie">07.02 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;исландский А2</div>
                    <div className="effekt_raspisanie">10.02 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;норвежский B1</div>
                    <div className="effekt_raspisanie">20.02 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;финский А1</div></div>
                    <div className="rombiki_raspisanie_mesiac">ФЕВРАЛЬ</div></div>
            </div>

            <div className="raspisanie">
                    <div className="raspisanie_fon"></div>
                    <Rombiki/>
                    <div className="rombiki_raspisanie_text">
                    <div className="yrok_raspisanie">
                    <div className="effekt_raspisanie">05.03 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;датский  А1</div>
                    <div className="effekt_raspisanie">07.03 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;датский  А2</div>
                    <div className="effekt_raspisanie">10.03 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;норвежский B2</div>
                    <div className="effekt_raspisanie">15.03 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;финский  А2</div>
                    <div className="effekt_raspisanie">20.03 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;шведский С1</div>
                    <div className="effekt_raspisanie">31.03 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;шведский С2</div></div>
                    <div className="rombiki_raspisanie_mesiac">МАРТ</div></div>
            </div> 

            <div className="raspisanie">
                    <div className="raspisanie_fon"></div>
                    <Rombiki/>
                    <div className="rombiki_raspisanie_text">
                    <div className="yrok_raspisanie">
                    <div className="effekt_raspisanie">05.04 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;шведский А1</div>
                    <div className="effekt_raspisanie">07.04 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;шведский А2</div>
                    <div className="effekt_raspisanie">10.04 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;норвежский С2</div>
                    <div className="effekt_raspisanie">15.04 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;норвежский С2</div>
                    <div className="effekt_raspisanie">20.04 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;датский С1</div>
                    <div className="effekt_raspisanie">31.04 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;датский С2</div></div>
                    <div className="rombiki_raspisanie_mesiac">АПРЕЛЬ</div></div>
            </div> 

            <div className="raspisanie">
                    <div className="raspisanie_fon"></div>
                    <Rombiki/>
                    <div className="rombiki_raspisanie_text">
                    <div className="yrok_raspisanie">
                    <div className="effekt_raspisanie">05.05 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;норвежский А1</div>
                    <div className="effekt_raspisanie">07.05 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;норвежский А2</div>
                    <div className="effekt_raspisanie">10.05 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;датский B2</div>
                    <div className="effekt_raspisanie">15.05 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;датский В1</div>
                    <div className="effekt_raspisanie">20.05 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;шведский А2</div></div>
                    <div className="rombiki_raspisanie_mesiac">МАЙ</div></div>
            </div> 

            <div className="raspisanie">
                    <div className="raspisanie_fon"></div>
                    <Rombiki/>
                    <div className="rombiki_raspisanie_text">
                    <div className="yrok_raspisanie">
                            <div className="effekt_raspisanie">05.06 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;финский В1</div>
                            <div className="effekt_raspisanie">07.06 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;финский В2</div>
                            <div className="effekt_raspisanie">10.06 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;исландский B2</div>
                            <div className="effekt_raspisanie">15.06 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;исландский С1</div>
                            <div className="effekt_raspisanie">20.06 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;финский С1</div></div>
                    <div className="rombiki_raspisanie_mesiac">ИЮНЬ</div></div>
            </div> 

            <div className="raspisanie">
                    <div className="raspisanie_fon"></div>
                    <Rombiki/>
                    <div className="rombiki_raspisanie_text">
                    <div className="yrok_raspisanie">
                            <div className="effekt_raspisanie">05.07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;исландский С2</div>
                            <div className="effekt_raspisanie">07.07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;финский С2</div>
                            <div className="effekt_raspisanie">10.07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;шведский B2</div>
                            <div className="effekt_raspisanie">15.07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;шведский В1</div>
                            <div className="effekt_raspisanie">20.07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;финский С1</div>
                            <div className="effekt_raspisanie">31.07 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;исландский В1</div></div>
                    <div className="rombiki_raspisanie_mesiac">ИЮЛЬ</div></div>
                    <div className="flex_zapisi">
                            <div className="flex_zapis left"><div className="flex_zapis_text">ЗАПИСАТЬСЯ<br/>В ГРУППУ</div>
                            <div></div>
                            </div>
                            <div className="flex_zapis right"><div className="flex_zapis_text">ДОБАВИТЬ<br/>В КАЛЕНДАРЬ</div>
                            </div>
                           </div> </div> </div>
   </div>
<Footer/>
</div></div>


    );
  }
}

export default App;

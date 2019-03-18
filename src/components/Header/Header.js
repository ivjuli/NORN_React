import React from "react"

const Header = () => {
return (
<div className="logo_contacts">
<div className="romb">
    <div className="logo">
    <div><img src="/img/mark3.svg" alt="logo" width="73px" height="73px"/></div>
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
                <div><a href=""><img src="/img/instagram_black.svg" alt="instagram" width="20px" height="20px"/></a></div>
                <div><a href=""><img src="/img/vk_black.svg" alt="vk" width="28px" height="28px"/></a></div>
                <div><a href=""><img src="/img/facebook_black.svg" alt="facebook" width="20px" height="20px"/></a></div>
            </div>       
    </div>
    </div>
)

}

export default Header
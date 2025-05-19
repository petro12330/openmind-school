// import React from 'react';
// import './Footer.css';
// import TgIcon from '../../assets/icons/telegram.svg';
// import VkIcon from '../../assets/icons/vk.png';
//
// const Footer = () => {
//     return (
//         <nav className="footer">
//             <div className="footer-container">
//                 <div className="container-school-links">
//                     <div className="container-school-name">
//                         OpenMind School
//                     </div>
//                     <div className="container-school-icons-link">
//                         <a href={"https://t.me/openmindschooll"}>
//                             <img src={TgIcon}  alt={"tg"}/>
//                         </a>
//                         <a href={"https://vk.com/club230163396"}>
//                             <img src={VkIcon} alt={"vk"}/>
//                         </a>
//
//                     </div>
//                 </div>
//                 <div className="container-school-copyright">
//                     © 2025 | OpenMind School
//                 </div>
//             </div>
//         </nav>
//     );
// };
//
//
// export default Footer;
//
import React from 'react';
import './Footer.css';
import TgIcon from '../../assets/icons/telegram.svg';
import VkIcon from '../../assets/icons/vk.png';

const Footer = () => {
    return (
        <nav className="footer">
            <div className="footer-container">
                <div className="container-school-links">
                    <div className="container-school-name">
                        OpenMind School
                    </div>
                    <div className="container-school-icons-link">
                        <a href={"https://t.me/openmindschooll"}>
                            <img src={TgIcon}  alt={"tg"}/>
                        </a>
                        <a href={"https://vk.com/club230163396"}>
                            <img src={VkIcon} alt={"vk"}/>
                        </a>
                    </div>
                </div>
                <div className="container-school-copyright">
                    © 2025 | OpenMind School
                </div>
            </div>
        </nav>
    );
};

export default Footer;
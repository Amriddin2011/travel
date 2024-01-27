import './style.scss'
import { Link } from 'react-router-dom'
import logo from '../../../imgs/logo.png'
import wh from '../../../imgs/wh.png'
import tg from '../../../imgs/tg.png'
import mail from '../../../imgs/mail.png'
import socialLogos from '../../../imgs/socialLogos.png'

function Footer() {
    return (
        <div>
            <div className="footer-wrapper">
                <div className="first">
                <img src={logo} alt="The picture of our logo" />
                </div>
                <div className="second">
                    <Link to={"/main"}>Главная</Link>
                    <Link to={"/excursion"}>Экскурсии</Link>
                    <Link to={"/excursion#"}>Личный кабинет</Link>
                </div>
                <div className="third">
                    <div className="third3">
                        <img src={wh} alt="The picture of what is up" />
                        <p>+7 964 944 18 74</p>
                    </div>
                    <div className="third3">
                        <img src={tg} alt="The picture of telegram" />
                        <p>+7 918 919 98 28</p>
                    </div>
                    <div className="third3">
                        <img src={tg} alt="The picture of telegram" />
                        <p>Телеграм-бот PeroTravel</p>
                    </div>
                </div>
                <div className="fourth">
                    <div className="fourth4">
                        <img src={mail} alt="The picture of mail" />
                        <p>office@perotravel.ru</p>
                    </div>
                    <img src={socialLogos} alt="The picture of Social media" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
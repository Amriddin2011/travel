import './style.scss'
import { Link, Outlet } from 'react-router-dom'
import Footer from './Footer'
import Baloon from '../../imgs/baloon.jpg'
import PeroTravel from '../../imgs/peroTravel.png'

function Navigation() {
    return (
        <div>
            <div className="nav-wrapper">
                <div className="start">
                    <div className="nav-img">
                        <Link path="/"><img src={Baloon} alt="This is baloon" /></Link>
                    </div>
                    <div className="nav-links">
                        <Link to={"/main"}>Главная</Link>
                        <Link to={"/excursion"}>Экскурсии</Link>
                        <Link to={"/excursion#"}>Лич. каб.</Link>
                    </div>
                </div>

                <div className="nav-p">
                    <h1>ПУТЕШЕСТВУЙ</h1>
                    <img
                        src={PeroTravel}
                        alt="This is p"
                    />
                </div>

                <div className="button">
                    <button>К экскурсиям -›</button>
                </div>
            </div>

            <div id='outlet'>
                <Outlet />
            </div>

            <div id='footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Navigation;
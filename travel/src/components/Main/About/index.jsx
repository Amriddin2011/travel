import './style.scss'
import Mountains from '../../../imgs/mountains.png'

function About() {
    return (
        <div>
            <div className="about-wrapper">
                <div className="img">
                    <img src={Mountains} alt='This is Mountains' />
                </div>
                <div className="about">
                    <div className="about2">
                        <h1>О нас</h1>

                        <div className="first">
                            PeroTravel - Первый онлайн-сервис по
                            бронированию экскурсий без очередей и
                            операторов. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </div>

                        <div className="second">
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo
                            inventore veritatis et quasi architecto beatae vitae
                            dicta sunt explicabo.
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default About;
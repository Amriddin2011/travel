import './style.scss'
import review1 from '../../../imgs/review1.png'
import review2 from '../../../imgs/review2.png'

function Reviews() {
    return (
        <div>
            <div className="reviews-wrapper">
                <div className="h1AndA">
                    <h1>Отзывы</h1>
                    <a href="#reviews/all">Смотреть все</a>
                </div>

                <div className="divs">
                    <div className="div1">
                        <img src={review1} alt="The picture of review" />
                        <div className="absolute">
                            <h4>Иван Иванов, 25 лет</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                    <div className="div2">
                        <img src={review2} alt="The picture of review" />
                        <div className="absolute">
                            <h4>Иван Иванов, 25 лет</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reviews;
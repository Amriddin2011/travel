import './style.scss'

function Registr() {
    return (
        <div>
            <div className="regist-wrapper">
                <div className="reg">
                    <h1>Остались вопросы?</h1>
                    <p>Оставь заявку и мы ответим</p>
                    <div className="inputs">
                        <input type="text" placeholder='Имя' />
                        <input type="number" placeholder='Телефон' />
                        <input type="email" placeholder='Почта' />
                    </div>
                    <button>Оставить заявку</button>
                </div>
            </div>
        </div>
    );
}

export default Registr;
import './style.scss'
import Picture1 from '../../../imgs/gallery1.png'
import Picture2 from '../../../imgs/gallery2.png'
import Picture3 from '../../../imgs/gallery3.png'
import Picture4 from '../../../imgs/gallery4.png'
import Picture5 from '../../../imgs/gallery5.png'
import Picture6 from '../../../imgs/gallery6.png'
import Picture7 from '../../../imgs/gallery7.png'
import Picture8 from '../../../imgs/gallery8.png'

function Gallery() {
    return (
        <div>
            <div className="gallery-wrapper">
                <div className="h1AndA">
                    <h1>Галерея</h1>
                    <a href="#imgs/all">Смотреть все</a>
                </div>

                <div className="pictures">
                    <img className="p-8"
                        src={Picture8}
                        alt="The picture of gallery" />
                    <img className="p-2"
                        src={Picture2}
                        alt="The picture of gallery" />
                    <img className="p-3"
                        src={Picture3}
                        alt="The picture of gallery" />
                    <img className="p-4"
                        src={Picture4}
                        alt="The picture of gallery" />
                    <img className="p-5"
                        src={Picture5}
                        alt="The picture of gallery" />
                    <img className="p-6"
                        src={Picture6}
                        alt="The picture of gallery" />
                    <img className="p-7"
                        src={Picture7}
                        alt="The picture of gallery" />
                    <img className="p-1"
                        src={Picture1}
                        alt="The picture of gallery" />
                </div>
                <div className="null">

                </div>
            </div>
        </div>
    );
}

export default Gallery;
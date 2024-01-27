import './Main.scss'
import PopularExcursions from './popularExcursions';
import About from './About';
import KindOfExcursions from './KindOfExcursions'
import Gallery from './Gallery'
import Review from './Reviews'
import Registr from './Registr'

function All() {
    return (
        <div>
            <PopularExcursions />
            <About />
            <KindOfExcursions />
            <Gallery />
            <Review />
            <Registr />
        </div>
    );
}

export default All;
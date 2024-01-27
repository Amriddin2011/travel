import './Val.scss'
import ValueItem from './ValueItem'
import valuesDB from '../../../jsons/values.json'
import kind1 from '../../../imgs/kind1.png'
import kind2 from '../../../imgs/kind2.png'
import kind3 from '../../../imgs/kind3.png'
import kind4 from '../../../imgs/kind4.png'

function Values() {
    const imgs = [kind1, kind2, kind3, kind4]
    return (
        <div className="values-wrapper">

            <h1>Виды Экскурсий</h1>

            <div className="values-content">
                {
                    valuesDB.map((item, index) => {
                        return (
                            <ValueItem 
                                key={index}
                                image={imgs[index]}
                                title={item.title}
                                subtitle={item.subtitle}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Values;
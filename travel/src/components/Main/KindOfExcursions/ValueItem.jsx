function ValueItem(props) {
    return (
        <div className="item-wrapper">
            <div className="value-item">
                <img
                    src={props.image}
                    alt="Value-item"
                    width={75}
                    height={74}
                />
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                </div>
            </div>
        </div>
    );
}

export default ValueItem;
import DetailsTile from './DetailsTile';

const Details = () => {
    return (
        <div className="Details">
            <DetailsTile detail="Humidity" value="68%" />
            <DetailsTile detail="Wind" value="9km/h" />
        </div>
    )
}

export default Details;
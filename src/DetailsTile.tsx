import './detailsTile.css';

const DetailsTile = ({detail, value}: {detail: string, value: string}) => {
    return (
        <div className="DetailsTile">
            <h4>{detail}:</h4>
            <h4>{value}</h4>
        </div>
    )
}

export default DetailsTile;
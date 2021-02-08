import '../styles/detailsTile.css';

const DetailsTile = ({detail, value}: {detail: string, value: string}) => {
    return (
        <div className="DetailsTile">
            <h4 className={"detail"}>{detail}</h4>
            <h4 className={"detail"}>{value}</h4>
        </div>
    )
}

export default DetailsTile;
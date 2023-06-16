import Card from '../UI/Card';

const Marker = ({header, address, description}) => {
    return (
        <Card>
            <h1>
                {header}
            </h1>
            <p>
                {address}
            </p>
            <p>
                {description}
            </p>
        </Card>
    )
}

export default Marker;
import ListGroup from "react-bootstrap/ListGroup"
import Container from "react-bootstrap/Container"


export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) => <ListGroup.Item>{eachPackage} </ListGroup.Item>)

    return (
        <Container>
            <ListGroup.Item><h1>Our Packages</h1></ListGroup.Item>
            {displayPackages}
        </Container>
    )
}
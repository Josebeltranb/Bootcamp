import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ListGroup, ListGroupItem} from "react-bootstrap";
import Container from "react-bootstrap/Container";

/**
 * @description get data front backend in SSR
 * @returns {Promise<any>}
 */
const getUsers = async () => {
  const response = await fetch(`http:localhost:3001/api/v1/users`,
    {
      headers: new Headers({
        'Authorization': "Bearer <Your JWT>" || ""
      })
    });

  const data = await response.json();

  console.log(data);
  return data;
};

export default async function Users() {

  const users = await getUsers();

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <ListGroup>
            {
              users && users.length > 0 && users.map(user => {
                return (<ListGroupItem key={user.id}>{user.firstname} {user.lastname}</ListGroupItem>);
              })
            }
          </ListGroup>
      </Col>
      </Row>
    </Container>

  );
}
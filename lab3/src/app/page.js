import styles from "./page.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from "next/link";
import Alert from "react-bootstrap/Alert";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {
  return (
    <Container className={styles.container}>
      <header>
        <h1>ProductWeb</h1>
        <p>Sitio para gestionar mis productos</p>
      </header>
      <section id="content" className={styles.content}>
        <Row>
          <Col>
            <Alert  variant="primary">
              Bienvenido a ProductWeb
            </Alert>
          </Col>
          <Col>
            <ul>
              <li><Link href={"users"}>Lista de usuario</Link></li>
              <li><Link href={"register"}>Registrarme</Link></li>
              <li><Link href={"login"}>Login</Link></li>
            </ul>
          </Col>
        </Row>
      </section>
      <footer>
        <Row>
          <Col>
            <span>Creado en 2024 &copy;</span>
          </Col>
        </Row>
      </footer>
    </Container>
  );
}

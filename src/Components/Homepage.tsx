import { useEffect, useState } from "react";
import { Iarticles } from "../interfaces/Iarticles";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Article from './Article'

const Homepage = () => {
  const [articles, setArticle] = useState<Iarticles[]>([]);
  console.log(articles);

  let homepage = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      if (response.ok) {
        let data = await response.json();
        setArticle(data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    homepage();
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          {articles.map((e,i) => (
            <Article article={e} key={i}/>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;

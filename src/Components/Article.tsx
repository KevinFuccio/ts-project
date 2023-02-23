import {Card,Button} from "react-bootstrap"
import { Iarticles } from "../interfaces/Iarticles";
import {Link} from "react-router-dom"
interface ArticleProps {
  article: Iarticles;
}
const Article = ({article}:ArticleProps) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={article.imageUrl} style={{ maxWidth: "300px" }} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Link to={`/${article.id}`}><Button variant="primary">More Info</Button></Link>
      </Card.Body>
    </Card>
  );
};
export default Article;

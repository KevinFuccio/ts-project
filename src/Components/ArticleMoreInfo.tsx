import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { Iarticles } from "../interfaces/Iarticles";
import {Card,Button} from "react-bootstrap"
const ArticleMoreInfo = () => {
  const params = useParams();
  const [articleinfo, setArticleinfo] = useState<Iarticles>();
  const articleFetch = async () => {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
      );
      if (response.ok) {
        let data = await response.json();
        setArticleinfo(data);
        console.log(data);
      }
    } catch (error) {}
  };
  

  useEffect(() => {
    articleFetch();
  }, []);
  return (

      <>
          {articleinfo ?(
          <Card style={{ width: "18rem" }}>
              <Card.Img
              variant="top"
              src={articleinfo.imageUrl}
              style={{ maxWidth: "300px" }}
              />
              <Card.Body>
              <Card.Title>{articleinfo.title}</Card.Title>
              <Card.Text>{articleinfo.summary}</Card.Text>
              <Card.Text>{articleinfo.newsSite}</Card.Text>
              <p><a href={articleinfo.url} style={{textDecoration:"none", color:'black', border:'1px solid black'}}>link to the page</a></p>
              <Link to="/"><Button variant="primary">Go Back</Button></Link>
              </Card.Body>
          </Card>):(<p>...</p>)}
      </>
  )
}

export default ArticleMoreInfo;

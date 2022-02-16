import { Card, Col, Row, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import ModalMovie from "./ModalMovie";

function MovieList(props) {
  console.log(props);
  const [show, setshow] = useState(false);
  const[movie,setMovie]=useState(null);

//   function showtext() {
//     setshow(!show);
//   }

  return (
    <>
    
      <Row>
        {props.data.map((element) => {
          return (
            <Col xs={1} md={4} className="g-4" key={element.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={"https://image.tmdb.org/t/p/w500" + element.poster_path}
                />
                <Card.Body>
                  
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>
                  {/* {isReadMore
                    ? element.overview.slice(0, 150)
                    : element.overview}
                    <Button variant="secondary" onClick={showtext} size="sm" key={element.id}>
                    {isReadMore ? "...read more" : " show less"}
                    </Button>  */}
                    {element.overview.slice(0, 150)} ....
                  </Card.Text>
                  <div class="col-md-12 text-center">
                    <Button variant="primary">more</Button>{" "}
                    <Button variant="primary" onClick={()=>{setshow(true);setMovie(element)}}>add favarite</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

     {movie && <ModalMovie show={show} movie={movie} handleClose={()=>{setshow(false)}} updatecommitt={props.updatecommit}/>} 
    </>
  );
}
export default MovieList;

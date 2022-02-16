
import { useParams } from "react-router-dom"

import {CardGroup,Card, Button,Col} from "react-bootstrap"

function Favlist (props){
    console.log(props)

    return (
        <>
       
            {
                
                (props.favMovie ?? []).map(movie => {
                    return (
                        <Col xs={2} md={4} className="g-4" key={movie.id}>
                        <Card >
                            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
                            <Card.Body>
                                <Card.Title>{movie.title}
                                 {movie.id} 
                                </Card.Title>
                                <Card.Text>
                                    {movie.overview}
                                </Card.Text>
                            </Card.Body>
                            <Button >delete</Button>
                        </Card>
                        </Col>
                    )
                })
            }
            
    

        </>
    )
}
export default Favlist;
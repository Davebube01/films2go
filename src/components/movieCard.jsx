import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';


export default function MovieCard({movie}) {

    // For the card div on hover
    const [isHovered, setIsHovered] = useState(false)


    return(
        <Container>
            <div className="movie" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <Card style={{ }} className="card">
                    
                    
                    <Card.Img  src={movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/400'} alt={movie.Title} width={300} height={300}/>
                    <p className={isHovered ? 'hovered' : 'no-hover'}>{movie.Year}</p>
                    <Card.Body className="card-body">
                    
                        
                        <span>{movie.Type}</span>
                        <Card.Title><h6>{movie.Title}</h6></Card.Title>
                    </Card.Body>
                </Card>
            </div>
    
        </Container>
    )
}
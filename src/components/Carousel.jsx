import React, { useMemo, useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CarouselComponent = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const carouselWrapperStyle = {
    position: 'relative',
    maxWidth: '600px',
    margin: '40px auto',
    padding: '0 70px',
  };

  const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    objectPosition: 'top',
    borderRadius: '15px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  };

  const hoverImageStyle = {
    ...imageStyle,
    transform: 'scale(1.02)',
  };

  const controlStyle = {
    filter: 'invert(100%)',
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: '50%',
    backgroundSize: '30px 30px',
    backgroundPosition: 'center',
    margin: '0 -50px',
  };

  const captionStyle = {
    background: 'rgba(0,0,0,0.6)',
    borderRadius: '10px',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90%',
    padding: '10px',
  };

  const titleStyle = {
    color: '#42b4ca',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    marginBottom: '5px',
  };

  const subtitleStyle = {
    color: '#fff',
    fontSize: '0.9rem',
  };

  // Gera IDs aleatórios apenas na primeira renderização
  const randomImageIds = useMemo(() => {
    const ids = new Set();
    while (ids.size < 5) {
      ids.add(Math.floor(Math.random() * 826) + 1);
    }
    return Array.from(ids);
  }, []);

  // Busca os dados dos personagens quando o componente monta
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const responses = await Promise.all(
          randomImageIds.map(id => 
            fetch(`https://rickandmortyapi.com/api/character/${id}`)
              .then(res => res.json())
          )
        );
        setCharacters(responses);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching characters:", error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [randomImageIds]);

  if (loading) {
    return (
      <div style={carouselWrapperStyle}>
        <div style={{ 
          height: '400px', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          background: '#f0f0f0',
          borderRadius: '15px'
        }}>
          <p>Carregando personagens...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={carouselWrapperStyle}>
      <Carousel
        indicators={false}
        controls={true}
        nextIcon={<span className="carousel-control-next-icon" style={controlStyle} />}
        prevIcon={<span className="carousel-control-prev-icon" style={controlStyle} />}
      >
        {characters.map((character, index) => (
          <Carousel.Item key={index}>
            <Link to={`/post/${character.id}`}>
              <img
                src={character.image}
                alt={character.name}
                style={imageStyle}
                onMouseEnter={e => (e.target.style.transform = 'scale(1.02)')}
                onMouseLeave={e => (e.target.style.transform = 'scale(1)')}
              />
            </Link>
            <Carousel.Caption style={captionStyle}>
              <h3 style={titleStyle}>{character.name}</h3>
              <p style={subtitleStyle}>
                {character.species} - {character.status}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
import styled from "styled-components"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Header from "../Header";
import { Link } from "react-router-dom";

const MovieDetails = () => {
const {id} = useParams();
const [filmDetails, setFilmDetails] = useState({release_date: "", genres: []})
const baseUrl = "http://image.tmdb.org/t/p/w154/"
const year = filmDetails.release_date.slice(0, 4);
console.log("film details: ", filmDetails)
    useEffect(() => {
		fetch(`/movies/${id}`)
			.then((res) => res.json())
			.then((data) => {
                setFilmDetails(data.data)
			})
			.catch((err) => console.log("Error: ", err));
	}, [id]);

  return (
      <>
      <Header />
    <Wrapper>
    <div>
    <img alt="Poster" src={`${baseUrl}` + `${filmDetails.poster_path}`} />
    <FilmInfoWrap>
    <h2>{filmDetails.title} {filmDetails.release_date && `(${year})`}</h2>
    <Genrediv>
        {filmDetails.genres.map((genre) => {
            return <Link to="#">{genre.name}</Link>
        })}
    </Genrediv>
    <p>{filmDetails.overview}</p>
    {filmDetails.homepage && <Link to={{pathname: `${filmDetails.homepage}`}} target="_blank">Movie Homepage</Link>}
    </FilmInfoWrap>
    </div>
    <ButtonLinkWrap>
        <button>Review This Movie!</button>
        <Link to="/searchresults">Back to Search Results</Link>
    </ButtonLinkWrap>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
background: var(--color-element-background);
color: var(--color-illustration-secondary);
height: max-content;
padding: 10px 0 10px 10px;
margin: auto;
margin-top: 50px;
border-radius: 10px;
box-shadow: 2px 5px 16px 0px var(--color-element-background);
align-items: center;

h2 {
    font-size: 30px;
    font-style: italic;
}
div {
    display: flex;
    justify-content: space-between;
    height: max-content;
img {
    border-radius: 10px;
}
}
`

const FilmInfoWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: max-content;
background: var(--color-illustration-secondary);
color: var(--color-element-background);
margin: 0 30px 10px 30px;
border-radius: 10px;
padding: 10px;

p {
    margin: 10px 0;
}

a {
color: var(--color-element-background);
text-decoration: underline;
&:hover {
    color: var(--color-illustration-tertiary);
    transition: .5s;
}
}
`

const Genrediv = styled.div`
display: flex;
width: max-content;
a {
    border-radius: 20px;
    background: var(--color-element-background);
    color: var(--color-illustration-secondary);
    text-decoration: none;
    padding: 10px;
    margin: 10px;
    &:hover {
        color: var(--color-illustration-highlight);
        background: var();
        transition: .5s;
    }
}
`

const ButtonLinkWrap = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
width: max-content;
align-items: center;
border: 2px solid red;

button {
    cursor: pointer;
    background: var(--color-element-background);
    color: var(--color-illustration-secondary);
    padding: 10px;
    border: 3px solid var(--color-illustration-secondary);
    font-family:'Poppins', sans-serif; 
    font-size: 20px;
    border-radius: 30px;
    margin: 0 20px;
    &:hover {
        color: var(--color-illustration-tertiary);
        background: var(--color-illustration-secondary);
        transition: .5s;
    }
}

a {
    cursor: pointer;
    background: var(--color-element-background);
    color: var(--color-illustration-secondary);
    padding: 15px 10px;
    border: 3px solid var(--color-illustration-secondary);
    font-family:'Poppins', sans-serif; 
    font-size: 20px;
    border-radius: 30px;
    margin: 0 20px;
    &:hover {
        color: var(--color-illustration-tertiary);
        background: var(--color-illustration-secondary);
        transition: .5s;
    }
}`

export default MovieDetails
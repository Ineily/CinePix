import ResultPreview from "../SearchResults/ResultPreview";
import styled from "styled-components";
import { ResultsWrapper } from "../SearchResults/SearchGrid";
import { useContext } from "react";
import { SearchContext } from "../SearchResults/SearchContext";

const ResultsGrid = (movies, displayFlag) => {
	const { searchResults } = useContext(SearchContext);
	return (
		<ResultsWrapper>
			{searchResults.map((movie) => {
				return (
					<ResultPreview
						key={movie.id}
						id={movie.id}
						movies={movies}
						posterPath={movie.poster_path}
						title={movie.title}
						releaseDate={movie.release_date}
					/>
				);
			})}
		</ResultsWrapper>
	);
};

export default ResultsGrid;

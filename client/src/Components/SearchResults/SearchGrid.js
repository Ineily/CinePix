import { useContext } from "react";
import { SearchContext } from "./SearchContext";
import ResultPreview from "./ResultPreview";
import styled from "styled-components";

const SearchGrid = () => {
	const { searchResults } = useContext(SearchContext);

	return (
		<ResultsWrapper>
			{searchResults.map((result) => {
				return (
					<ResultPreview
						searchResults={searchResults}
						posterPath={result.poster_path}
						title={result.original_title}
						releaseDate={result.release_date}
					/>
				);
			})}
			;
		</ResultsWrapper>
	);
};

const ResultsWrapper = styled.div`
	display: flex;
	width: 100vw;
	flex-wrap: wrap;
	padding: 30px;
`;
export default SearchGrid;

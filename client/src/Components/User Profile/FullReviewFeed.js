import styled from "styled-components";
import FullReviewPreview from "./FullReviewPreview";
import { useState, useEffect } from "react";
const FullReviewFeed = ({firstName, reviews, status}) => {
    // console.log("reviews: ", reviews, "status: ", status)
    // const [movieDetails, setMovieDetails] = useState({})
    // const baseUrl = "http://image.tmdb.org/t/p/w185/"

    return (
    <Wrapper>
        {reviews.map((review) => {

            <FullReviewPreview 
            id={review.id} 
            review={review.review}/>
            })}
    </Wrapper>
        )
        }


const Wrapper = styled.div`

`
export default FullReviewFeed;

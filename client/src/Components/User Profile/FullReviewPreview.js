import styled from "styled-components"
import { useEffect, useState } from "react"

const FullReviewPreview = ({id, review}) => {

    return (
    <ReviewWrap>
        {/* <img src={baseUrl + movieDetails.poster_path} /> */}
        {review}
        </ReviewWrap>
    )
}

const ReviewWrap = styled.div`
`
export default FullReviewPreview
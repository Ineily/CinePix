import styled from "styled-components";
import { GradientDiv } from "../Header";
import tmdbLogo from "./assets/tmdblogo1.svg";

const Footer = () => {
	return (
		<FooterWrap>
			<GradientDiv>
				<tmdbWrap>
					<img src={tmdbLogo} alt="TMDB Logo" />
				</tmdbWrap>
			</GradientDiv>
		</FooterWrap>
	);
};

const tmdbWrap = styled.div`
	display: flex;
	img {
		width: 100px;
		z-index: 1000;
		border: 3px solid green;
	}
`;
const FooterWrap = styled.div`
	bottom: 0;
	margin-top: auto;
`;
export default Footer;

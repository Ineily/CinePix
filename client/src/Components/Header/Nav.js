import styled from "styled-components";
import { BsBellFill, BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../Login/CurrentUserContext";
const Nav = () => {
	const { currentUser } = useContext(CurrentUserContext);
	return (
		<BrowseNotSetNav>
			{currentUser.id === null ? (
				<Browse to="/login" children={"Log In"} />
			) : (
				<>
					<BrowseWrap>
						<Browse to="/browse" children={"Browse"} />
					</BrowseWrap>
					<DropdownNotiWrap>
						<NotiWrap>
							<StyledFiBell />
							<StyledBsCD />
						</NotiWrap>
						<DropdownNotiDiv className="hover">
							<Dropdownul>
								<li>No new notifications</li>
							</Dropdownul>
						</DropdownNotiDiv>
					</DropdownNotiWrap>
					<DropdownProfWrap>
						<ProfWrap>
							<ProfilePic
								src="/assets/Richard-Storey.jpg"
								alt="Profile Picture"
							/>
							<StyledBsCD />
						</ProfWrap>
						<DropdownProfDiv className="hover">
							<Dropdownul>
								<li>
									<StyledLink to={`/users/${currentUser.id}`}>
										My Profile
									</StyledLink>
								</li>
								<li>
									<StyledLink to="#">Find Friends</StyledLink>
								</li>
								<li>
									<StyledLink to="#">Settings</StyledLink>
								</li>
								<li>
									<StyledLink to="#">Log Out</StyledLink>
								</li>
							</Dropdownul>
						</DropdownProfDiv>
					</DropdownProfWrap>
				</>
			)}
		</BrowseNotSetNav>
	);
};

const StyledFiBell = styled(BsBellFill)`
	color: var(--color-element-headline);
	font-size: 25px;
	opacity: 0.8;
	cursor: pointer;

	&:hover {
		opacity: 1;
	}
`;

const StyledBsCD = styled(BsChevronDown)`
	color: var(--color-element-headline);
	padding: 0 5px;
`;

const BrowseNotSetNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: max-content;
	margin-top: -20px;
	z-index: 1000;
	padding: 0 30px;
`;

const ProfilePic = styled.img`
	border-radius: 50%;
	width: 70px;
`;
const BrowseWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 130px;
	cursor: pointer;
`;
const NotiWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 60px;
	cursor: pointer;
	position: relative;
`;
const ProfWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 110px;
	height: max-content;
	cursor: pointer;
	position: relative;
`;

const DropdownProfWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	&:hover {
		margin-top: 161px;
		.hover {
			display: block;
		}
	}
`;
const DropdownNotiWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	&:hover {
		margin-top: 82px;
		.hover {
			width: 60px;
			display: block;
		}
	}
`;
const Browse = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 110px;
	height: 30px;
	outline: none;
	border: none;
	border-radius: 5px;
	background: var(--color-element-background);
	cursor: pointer;
	font-family: "Poppins", sans-serif;
	color: var(--color-element-headline);
	font-size: 15px;
`;
const DropdownProfDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin: 14px 0 0 0;
	background: red;
	background: var(--color-illustration-secondary);
	display: none;
`;

const DropdownNotiDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin: 36px 0 0 -190px;
	background: red;
	background: var(--color-illustration-secondary);
	display: none;
`;
const Dropdownul = styled.ul`
	border-radius: 0 0 5px 5px;
	background-color: var(--color-illustration-tertiary);
	margin-left: -40px;
	padding: 10px;
	hyphens: auto;
	min-width: max-content;
	li {
		padding: 10px 0 10px 0;
		border-top: 1px solid lightgrey;
		color: var(--color-element-headline);
		&:first-child {
			border-top: none;
			padding: 0 0 10px 0;
		}
		&:last-child {
			padding: 10px 0 0 0;
		}
	}
`;

const StyledLink = styled(Link)`
	color: var(--color-element-headline);
	text-decoration: none;
	&:hover {
		color: var(--color-illustration-highlight);
	}
`;
export default Nav;

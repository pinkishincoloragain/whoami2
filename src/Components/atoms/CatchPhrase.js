import styled from "styled-components"

const CatchPhrase = () => {
	const CatchPhraseWrapper = styled(`div`)({
		backgroundColor: "transparent",
		width: "80%",
		minWidth: "320px",
		marginTop: "2%",
		marginLeft: "2%",
	});

	const CatchPhraseTitle = styled(`div`)({
		fontSize: "12vw",
		fontWeight: "bold",
		transitionDuration: "0.2s",
		transform: "skew(10deg) rotate(-10deg)",
		transformOrigin: "100% 50%",
	});

	return (
		<CatchPhraseWrapper>
			<CatchPhraseTitle>반갑습니다!</CatchPhraseTitle>
		</CatchPhraseWrapper>
	);
};
export default CatchPhrase;

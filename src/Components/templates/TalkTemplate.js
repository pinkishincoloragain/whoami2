import styled from "@emotion/styled";
import Boxes from "../objects/Boxes";
import * as React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import {
	Talk,
	TalkWithEnlarge,
	TalkWithLink,
	TalkWithObject,
} from "../atoms/Talk";
import talks from "../../assets/data/talk.json";

const TalkWrapper = styled(`div`)({
	backgroundColor: "transparent",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
});

const TalkResizer = styled(`div`)({
	backgroundColor: "transparent",
	maxWidth: "min(100%,1080px)",
});

const TalkTemplate = () => {
	const windowSize = useWindowSize();

	const [scrollPosition, setScrollPosition] = React.useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<TalkWrapper>
			<TalkResizer>
				{talks.firstTalk.map((talk, index) => {
					const [type, text] = talk.split(": ");
					const [user, option] = type.split(" ");
					switch (option) {
						case "object":
							return (
								<TalkWithObject
									text={text}
									user={user}
									key={index}
									width={windowSize.width * 0.4}
									height={windowSize.width * 0.4}
								/>
							);
						// case "emoji":
						// 	return <TalkWithEmoji text={text} user={user} key={index} />;
						case "enlarge":
							return <TalkWithEnlarge text={text} user={user} key={index} />;
						case "link":
							return <TalkWithLink text={text} user={user} key={index} />;
						default:
							return <Talk key={index} user={user} text={text} />;
					}
				})}
			</TalkResizer>
		</TalkWrapper>
	);
};

export default TalkTemplate;

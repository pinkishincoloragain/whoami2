import styled from "@emotion/styled";
import Boxes from "../objects/Boxes";
import * as React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { Talk, TalkWithEmoji, TalkWithObject } from "../atoms/Talk";
import talks from "../../assets/data/talk.json";

const TalkTemplate = () => {
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

	const windowSize = useWindowSize();

	return (
		<TalkWrapper>
			<TalkResizer>
				{talks.firstTalk.map((talk, index) => {
					const [type, text] = talk.split(": ");
					if (type.includes("file")) {
						const [user, _] = type.split(" ");
						return (
							<TalkWithObject
								text={text}
								type={user}
								key={index}
								width={windowSize.width * 0.4}
								height={windowSize.width * 0.4}
							/>
							// <TalkWithEmoji text={text} type={user} key={index} />
						);
					} else if (type.includes("emoji")) {
						const [user, _] = type.split(" ");
						return <TalkWithEmoji text={text} type={user} key={index} />;
					}
					return <Talk key={index} type={type} text={text} />;
				})}
			</TalkResizer>
		</TalkWrapper>
	);
};

export default TalkTemplate;

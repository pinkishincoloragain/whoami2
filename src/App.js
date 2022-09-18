import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./Views/Landing";
import Error from "./Views/Error";

function App() {
	React.useEffect(() => {
		console.log(
			"%cHi there, developer",
			"background: black; color: white; font-size: 20px;"
		);
	}, []);
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

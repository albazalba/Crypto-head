import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";

const useStyles = makeStyles(() => ({
	App: {
		backgroundColor: "#051221",
		color: "white",
		minHeight: "100vh",
		zIndex: -1,
		position: "relative"
	}
}));

function App() {
	const classes = useStyles();

	return (
		<BrowserRouter>
			<div className={classes.App}>
				<Header />
				<Route path="/" component={Homepage} exact />
				<Route path="/coins/:id" component={CoinPage} exact />
			</div>
		</BrowserRouter>
	);
}

export default App;

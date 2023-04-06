import {
	AppBar,
	Container,
	MenuItem,
	Select,
	Toolbar,
	Typography
} from "@material-ui/core";
import {
	createTheme,
	makeStyles,
	ThemeProvider
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import Logo from "../Assets/Crypto-head.png";

const useStyles = makeStyles((theme) => ({
	appBar: {
		/* From https://css.glass */
		background: "rgba(5, 18, 33, 0.6)",
		borderRadius: "16px",
		boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
		backdropFilter: "blur(4px)",
		border: "1px solid rgba(5, 18, 33, 0.3)"
	},
	title: {
		flex: 1,
		color: "white",
		fontFamily: "Montserrat",
		fontWeight: "bold",
		cursor: "pointer"
	},
	logo: {
		height: "50px",
		width: "50px",
		objectFit: "contain",
		marginRight: "10px"
	},
	logoImg: {
		width: "100%"
	}
}));

const darkTheme = createTheme({
	palette: {
		primary: {
			main: "#fff"
		},
		type: "dark"
	}
});

function Header() {
	const classes = useStyles();
	const { currency, setCurrency } = CryptoState();

	const history = useHistory();

	return (
		<ThemeProvider theme={darkTheme}>
			<AppBar
				style={{ position: "sticky", top: 0 }}
				className={classes.appBar}
				color="transparent"
				position="static">
				<Container>
					<Toolbar>
						<div className={classes.logo}>
							<img className={classes.logoImg} src={Logo} />
						</div>
						<Typography
							onClick={() => history.push(`/`)}
							variant="h6"
							className={classes.title}>
							Crypto Head
						</Typography>
						{/* <Button color="inherit">Login</Button> */}
						<Select
							variant="outlined"
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={currency}
							style={{ width: 100, height: 40, marginLeft: 15 }}
							onChange={(e) => setCurrency(e.target.value)}>
							<MenuItem value={"USD"}>USD</MenuItem>
							<MenuItem value={"INR"}>INR</MenuItem>
						</Select>
					</Toolbar>
				</Container>
			</AppBar>
		</ThemeProvider>
	);
}

export default Header;

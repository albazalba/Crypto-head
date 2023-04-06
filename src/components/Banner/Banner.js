import { Container, makeStyles, Typography } from "@material-ui/core";
import Background from "../svg/Background";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
	banner: {
		// backgroundImage: "url(./banner.avif)"
	},
	bannerContent: {
		height: 400,
		display: "flex",
		flexDirection: "column",
		paddingTop: 25,
		justifyContent: "space-around"
	},
	tagline: {
		display: "flex",
		height: "40%",
		flexDirection: "column",
		justifyContent: "center",
		textAlign: "center"
	},
	carousel: {
		height: "50%",
		display: "flex",
		alignItems: "center"
	},
	svg: {
		position: "fixed",
		left: 0,
		width: "100vw",
		opacity: "0.8",
		zIndex: "-10",
		maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"
	}
}));

function Banner() {
	const classes = useStyles();

	return (
		<div className={classes.banner}>
			<Container className={classes.bannerContent}>
				<div className={classes.svg}>
					<Background />
				</div>
				<div className={classes.tagline}>
					<Typography
						variant="h2"
						className="fancy"
						style={{
							fontWeight: "bold",
							marginBottom: 15,
							fontFamily: "Montserrat"
						}}>
						Crypto Head
					</Typography>
					<Typography
						variant="subtitle2"
						style={{
							color: "darkgrey",
							textTransform: "capitalize",
							fontFamily: "Montserrat"
						}}>
						Get all the Info regarding your favorite Crypto Currency
					</Typography>
				</div>
				<Carousel />
			</Container>
		</div>
	);
}

export default Banner;

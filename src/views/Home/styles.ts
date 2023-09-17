import makeStyles from "@mui/styles/makeStyles";

export const useStyles = makeStyles(() => ({
	leftContent: {
		position: "relative",
		height: "100%",
		minHeight: "100vh",
		backgroundImage: "linear-gradient(to right, #305270, #76a8cd)",
	},
	rightContent: {
		position: "relative",
		height: "100%",
		minHeight: "100vh",
	},
	title: {
		color: "white",
		fontWeight: "700 !important",
		lineHeight: "70px !important",
	},
	subtitle: {
		color: "white",
		fontWeight: "400 !important",
	},
	btn: {
		width: "400px",
	},
	input: {
		width: "400px",
	},
	link: {
		textDecoration: "none !important",
	},
}));

import makeStyles from "@mui/styles/makeStyles";

export const cards = [1, 2];

export const title = ["Condomínio", 
                "Condomínio",]

export const description = ["This is a media card. You can use this section to describe the content.", 
"This is a media card. You can use this section to describe the content.",]

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
	rect: {
		width: "620px",
        height: "660px",
	}
}));

import { Box, Typography, Button } from "@mui/material";

export const ErrorPage = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			minHeight="80vh"
		>
			<Box>
				<img src="/error.svg" alt="Error" width={600} />

				<Box display="flex" justifyContent="center">
					<Box>
						<Typography variant="h6" mb={2}>
							Oops! We can't find that page
						</Typography>

						<Box display="flex" justifyContent="center">
							<Button variant="contained" href="/" style={{ textTransform: 'none' }}>
								Go Back Home
							</Button>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

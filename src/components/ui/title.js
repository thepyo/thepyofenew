import { Box, Stack, Typography } from "@mui/material";

export default function DefaultTitleSection({
    title = "The Pyo",
    color = "primary.main",
    component = "h2",
    fill="#1A4996"
}){
    return(
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box>
                <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5323 17.2882C25.5323 17.9225 25.0372 18.4341 24.4299 18.4341H18.7111V24.4032C18.7111 25.0402 18.2187 25.5559 17.6114 25.5559H13.2166C12.6133 25.5559 12.1195 25.0402 12.1195 24.4032V19.2504C13.7477 19.0656 15.2785 18.0383 16.09 16.5492C16.4143 15.9535 16.6225 15.3096 16.8267 14.6877C17.0295 14.0575 17.2177 13.4688 17.5167 12.9324C17.8196 12.3919 18.2374 11.9244 18.7231 11.559H24.4299C25.0372 11.559 25.5323 12.0734 25.5323 12.7049V17.2882ZM6.39809 18.4341C5.79485 18.4341 5.29837 17.9225 5.29837 17.2882V12.7049C5.29837 12.0734 5.79485 11.559 6.39809 11.559H12.1195V5.58993C12.1195 4.95703 12.6133 4.44409 13.2166 4.44409H17.6114C18.2187 4.44409 18.7111 4.95703 18.7111 5.58993V10.6035C17.9451 11.0599 17.2898 11.7231 16.8454 12.5256C16.505 13.1282 16.2942 13.7887 16.0873 14.4257C15.8884 15.0407 15.7029 15.6226 15.4147 16.1493C14.7273 17.4013 13.4435 18.27 12.0782 18.4341H6.39809ZM15.416 0C5.13822 0 0 4.60266 0 14.9786C0 25.3532 5.13822 30 15.416 30C25.6644 30 30.8333 25.3532 30.8333 14.9786C30.8333 4.60266 25.6644 0 15.416 0Z" fill={fill}/>
                </svg>
            </Box>
            <Typography variant={component} component={component} fontSize={22} fontWeight={700} color={color} textTransform={"uppercase"}>
                {title}
            </Typography>
        </Stack>
    )
}
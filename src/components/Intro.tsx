import { Grid, Box, Typography, Stack } from '@mui/material'
import { CENTERIT, myShadow } from '../styles'

const Intro = () => {
    return (
        <>
            <Grid container >
                <Grid container
                    height={'500px'}
                    maxWidth={'1300px'}
                    columns={12}
                    margin={'0 auto'}
                >
                    <Grid item xs={12} md={8} p={3} sx={CENTERIT}>
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'flex-start'}
                            justifyContent={'center'}
                            pl={5}
                            pr={5}
                            borderRadius={5}
                            boxShadow={'6px 6px 10px 0 #24262c, -6px -6px 10px 0 #30343a'}
                            height={'100%'}
                        >
                            <Typography variant='h3' component={'h3'}>
                                Hello, I'm Steven Neuman, a 3D designer based in Sydney
                            </Typography>
                            <Typography variant='h6' width={'80%'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eveniet molestias, quae quibusdam magnam officia commodi assumenda totam aut ullam minus consequatur similique consectetur
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4} p={3} sx={CENTERIT}>
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'flex-start'}
                            borderRadius={5}
                            sx={myShadow}
                            justifyContent={'center'}
                            width={'100%'}
                            height={'100%'}
                        >
                            <Stack direction={'column'}>
                                <Box width={'250px'} height={'250px'} overflow={'hidden'}>
                                    <img className='foo' src='https://assets.website-files.com/63e65dd9c960ff9586098b8a/63e69e5d6c8b502aa5ff12c9_hero-image.jpg' />
                                </Box>
                            </Stack>

                        </Box>
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

export default Intro
import { Grid } from '@mui/material'

type Props = {}

function Header({ }: Props) {
    return (
        <>
            <Grid
                maxWidth={'1500px'}
                margin={'0 auto'}
                height={'8rem'}
                padding={'0 100px'}
                container display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <img src={'https://assets.website-files.com/63e65dd9c960ff9586098b8a/63fce9a352627318e5dd2a74_logo.svg'} />
                <img
                    width={'40px'}
                    src={'https://assets.website-files.com/63e65dd9c960ff9586098b8a/63e9305d54ac2e6b9e854ed9_emoji-icon.svg'} />
            </Grid>
        </>
    )
}

export default Header
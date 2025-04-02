import React from 'react'
import { AppBar, Toolbar, Typography, Box, Avatar, TextField } from '@mui/material'
import { FormControlLabel, FormControl, RadioGroup, Button, Radio, IconButton } from '@mui/material'
import { Circle } from '@mui/icons-material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom'
import MyPicture1 from './../Components/MyPicture1'
import { ArrowForward } from '@mui/icons-material'


function myprofile() {
    return (
        <>
            <Box>
                <AppBar position="static">
                    <Toolbar sx={{ backgroundColor: 'black' }}>
                        <Typography sx={{ color: '#FFFFFF', ml: '10px', flexGrow: 1 }}>
                            CHETSADA WANAPRASERTSAK
                        </Typography>
                        <Typography sx={{
                            mr: '20px',
                            textDecoration: 'none',
                            color: '#FFFFFF',
                            fontWeight: 'light'
                        }}
                            component={Link} to='/login'
                        >
                            Work
                        </Typography>
                        <Typography sx={{
                            mr: '20px',
                            textDecoration: 'none',
                            color: '#FFFFFF',
                            fontWeight: 'light'
                        }}
                            component={Link} to={'/contact'}
                        >
                            About
                        </Typography>
                        <Typography sx={{
                            mr: '20px',
                            textDecoration: 'none',
                            color: '#FFFFFF',
                            fontWeight: 'light'
                        }}
                            component={Link} to={'/AboutUI'}
                        >
                            Contact
                        </Typography>

                    </Toolbar>
                </AppBar >
            </Box>
            <Box sx={{ display: 'flex', height: '100vh', justifyContent: 'center', }}>
                <Box sx={{ display: 'flex', width: '800px', boxShadow: '2', mx: '100px', my: '50px', backgroundColor: 'black', /*border: '1px solid #FFFFFF' */ }}>
                    <Box sx={{ flex: 1, padding: '20px' }}>
                        <Typography sx={{ color: '#FFFFFF', fontSize: '50px', fontWeight: 'bold' }}>
                            HI, I AM
                            <br />
                            CHETSADA W.
                        </Typography>
                        <Typography sx={{
                            color: 'gray',
                            fontSize: '20px',
                            fontWeight: 'light',
                            marginTop: '10px',
                            color: '#c7c7c7'
                        }}>
                            Hello I'm George From Thailand
                        </Typography>
                        <Button
                            sx={{
                                marginTop: '20px',
                                backgroundColor: '#d3ea78',
                                color: 'black',
                                fontSize: '15px',
                                fontWeight: '400',
                                width: '150px',
                                height: '45px',
                                '&:hover': {
                                    backgroundColor: 'gray',
                                }
                            }}
                            variant="contained"
                            endIcon={<Circle />} style={{ borderRadius: '30px', }}
                        >
                            CONTACT Me
                        </Button>
                        <IconButton
                            sx={{
                                ml: '15px',
                                marginTop: '20px',
                                backgroundColor: '#2f2f2f',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                '&:hover': {
                                    backgroundColor: 'darkgray',
                                }
                            }}
                        >
                            <LinkedInIcon sx={{ color: '#d3ea78', fontSize: '30px' }} />
                        </IconButton>
                        <IconButton
                            sx={{
                                ml: '15px',
                                marginTop: '20px',
                                backgroundColor: '#2f2f2f',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                '&:hover': {
                                    backgroundColor: 'darkgray',
                                }
                            }}
                        >
                            <GitHubIcon sx={{ color: '#d3ea78', fontSize: '30px' }} />
                        </IconButton>
                    </Box>

                    <Box sx={{ marginLeft: '20px', flex: 1 }}>
                        <MyPicture1 />
                    </Box>
                </Box>
            </Box>
        </>
    )
}
export default myprofile
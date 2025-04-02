import React from 'react'
import { AppBar, Toolbar, Typography, Box, Avatar, TextField } from '@mui/material'
import { FormControlLabel, FormControl, RadioGroup, Button, Radio, IconButton } from '@mui/material'
import { Circle } from '@mui/icons-material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom'
import MyPicture1 from './../Components/MyPicture1'
import MyPicture2 from '../Components/MyPicture2';
import { ArrowForward } from '@mui/icons-material'
import DownloadButton from './../Components/DownloadButton'
import LinkedInButton from '../Components/LinkedInButton';
import GitHubButton from '../Components/GitHubButton';


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
            <Box sx={{
                display: 'flex',
                height: '100vh',
                mt: '50px',
                // justifyContent: 'center',
                alignItems: 'center',
                flexDirection: "column",
            }}>
                {/* Name & Pic*/}
                <Box sx={{
                    display: 'flex',
                    width: '800px',
                    backgroundColor: 'black',
                    height: 'justifyContent',
                    // border: '1px solid #FFFFFF'
                }}>
                    {/* Name */}
                    <Box sx={{ flex: 1, mt: '30px' }}>
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
                            Hello I'm George From Thailand and I'm a Front-End Developer.
                        </Typography>
                        <Button
                            sx={{
                                marginTop: '20px',
                                backgroundColor: '#d3ea78',
                                color: 'black',
                                fontSize: '16px',
                                fontWeight: '400',
                                width: '150px',
                                height: '45px',
                                '&:hover': {
                                    backgroundColor: 'gray',
                                }
                            }}
                            variant="contained"
                            endIcon={<Circle sx={{ fontSize: 100 }} />} style={{ borderRadius: '30px', }}
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

                    {/* Picture */}
                    <Box sx={{ ml: '160px', flex: 1 }}>
                        <MyPicture1 />
                    </Box>
                </Box>

                {/* About Me */}
                <Box sx={{
                    display: 'flex',
                    backgroundColor: 'black',
                    height: 'justifyContent',
                    width: '800px',
                    mt: '50px',
                    // border: '1px solid #FFFFFF'
                }}>
                    <Typography sx={{
                        color: '#FFFFFF',
                        fontSize: '50px',
                        fontWeight: 'bold',
                        mt: '20px'
                    }}>
                        ABOUT ME
                    </Typography>
                    <Typography sx={{
                        flex: 1,
                        ml: '100px',
                        mt: '20px',
                        fontSize: '18px',
                        fontWeight: '400',

                    }}>
                        ผมเป็นนักพัฒนาเว็บไซต์ฝั่งฟรอนต์เอนด์ที่ทำงานอยู่ในกรุงเทพฯ

                        กำลังมองหาโอกาสที่น่าตื่นเต้นในการทำงาน

                        มีพื้นฐานการศึกษาด้านวิศวกรรมซอฟต์แวร์
                    </Typography>
                </Box>

                {/* About Me Subhead*/}
                <Box sx={{
                    width: '800px',
                    // border: '1px solid #FFFFFF'
                }}>
                    <Typography sx={{
                        flex: 1,
                        ml: '345px',
                        mt: '20px',
                        fontWeight: '200',
                        fontSize: '15px'

                    }}>
                        ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เมื่อพัฒนาเว็บไซต์ มีความกระตือรือร้นและอยากรู้
                        อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆ ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบ
                        เว็บไซต์เล็กน้อยเมื่อไม่ได้เขียนโปรแกรม ดิฉัน/ผมชอบเล่นฟุตบอล ถ่ายภาพ และเล่นเกม FIFA, Diablo
                        กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        ml: '340px',
                        mt: '20px'
                    }}>

                        <DownloadButton />
                        <LinkedInButton />
                        <GitHubButton />
                    </Box>
                    <MyPicture2 sx={{}} />
                </Box>
            </Box>
            <Box>
            </Box>
        </>
    )
}
export default myprofile
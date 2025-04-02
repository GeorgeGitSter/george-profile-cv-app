import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
    TextField,
    Link,
} from '@mui/material';
import { Circle } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MyPicture1 from './../Components/MyPicture1';
import MyPicture2 from '../Components/MyPicture2';
import DownloadButton from './../Components/DownloadButton';
import LinkedInButton from '../Components/LinkedInButton';
import GitHubButton from '../Components/GitHubButton';
import CustomChip from '../Components/CustomChip';
import { Link as RouterLink } from 'react-router-dom';

function MyProfile() {
    return (
        <>
            <Box>
                <AppBar position="static">
                    <Toolbar sx={{ backgroundColor: 'black' }}>
                        <Typography sx={{ color: '#FFFFFF', ml: '10px', flexGrow: 1 }}>
                            CHETSADA WANAPRASERTSAK
                        </Typography>
                        <Typography
                            sx={{
                                mr: '20px',
                                textDecoration: 'none',
                                color: '#FFFFFF',
                                fontWeight: 'light',
                            }}
                            component={RouterLink}
                            to="/work"
                        >
                            Work
                        </Typography>
                        <Typography
                            sx={{
                                mr: '20px',
                                textDecoration: 'none',
                                color: '#FFFFFF',
                                fontWeight: 'light',
                            }}
                            component={RouterLink}
                            to="/about"
                        >
                            About
                        </Typography>
                        <Typography
                            sx={{
                                mr: '20px',
                                textDecoration: 'none',
                                color: '#FFFFFF',
                                fontWeight: 'light',
                            }}
                            component={RouterLink}
                            to="/contact"
                        >
                            Contact
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box
                sx={{
                    mx: 'auto',
                    display: 'flex',
                    mt: '50px',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                {/* Name & Pic */}
                <Box
                    sx={{
                        display: 'flex',
                        width: '800px',
                        backgroundColor: 'black',
                    }}
                >
                    {/* Name */}
                    <Box sx={{ flex: 1, mt: '30px' }}>
                        <Typography sx={{ color: '#FFFFFF', fontSize: '50px', fontWeight: 'bold' }}>
                            HI, I AM <br />
                            CHETSADA W.
                        </Typography>
                        <Typography sx={{ color: 'gray', fontSize: '20px', fontWeight: 'light', marginTop: '10px', color: '#c7c7c7' }}>
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
                                '&:hover': { backgroundColor: 'gray' },
                            }}
                            variant="contained"
                            endIcon={<Circle sx={{ fontSize: 100 }} />}
                            style={{ borderRadius: '30px' }}
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
                                '&:hover': { backgroundColor: 'darkgray' },
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
                                '&:hover': { backgroundColor: 'darkgray' },
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
                <Box sx={{ display: 'flex', backgroundColor: 'black', width: '800px', mt: '50px' }}>
                    <Typography sx={{ color: '#FFFFFF', fontSize: '50px', fontWeight: 'bold', mt: '20px' }}>
                        ABOUT ME
                    </Typography>
                    <Typography sx={{ flex: 1, ml: '100px', mt: '20px', fontSize: '18px', fontWeight: '400' }}>
                        ผมเป็นนักพัฒนาเว็บไซต์ฝั่ง Front-End ที่ทำงานอยู่ในกรุงเทพฯ กำลังมองหาโอกาสที่น่าตื่นเต้นในการทำงาน
                        มีพื้นฐานการศึกษาด้านวิศวกรรมซอฟต์แวร์
                    </Typography>
                </Box>

                {/* About Me Subhead */}
                <Box sx={{ width: '800px' }}>
                    <Typography sx={{ flex: 1, ml: '345px', mt: '20px', fontWeight: '200', fontSize: '15px' }}>
                        ชอบให้ความสำคัญกับการเข้าถึง (accessibility) เมื่อพัฒนาเว็บไซต์ มีความกระตือรือร้นและอยากรู้
                        อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆ ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบ
                        เว็บไซต์เล็กน้อยเมื่อไม่ได้เขียนโปรแกรม ดิฉัน/ผมชอบเล่นฟุตบอล ถ่ายภาพ และเล่นเกม FIFA, Diablo
                        กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', ml: '340px', mt: '20px' }}>
                        <DownloadButton />
                        <LinkedInButton />
                        <GitHubButton />
                    </Box>
                    <MyPicture2 />
                </Box>

                {/* My Capabilities */}
                <Box sx={{ display: 'flex', backgroundColor: 'black', width: '800px', mt: '50px' }}>
                    <Typography sx={{ color: '#FFFFFF', fontSize: '40px', fontWeight: 'bold', mt: '20px' }}>
                        My Capabilities
                    </Typography>
                    <Typography sx={{ flex: 1, ml: '60px', mt: '40px', fontWeight: '200', fontSize: '15px' }}>
                        ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอ ทั้งการพัฒนา Front-End และ Back-End
                        การออกแบบ UX/UI ฐานข้อมูล
                    </Typography>
                </Box>

                {/* Chip in My Capabilities */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: '20px', ml: '225px' }}>
                    <CustomChip label="HTML" variant="outlined" />
                    <CustomChip label="CSS" variant="outlined" />
                    <CustomChip label="JAVASCRIPT" variant="outlined" />
                    <CustomChip label="FLUTTER" variant="outlined" />
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: '20px', ml: '200px' }}>
                    <CustomChip label="DART" variant="outlined" />
                    <CustomChip label="IoT" variant="outlined" />
                    <CustomChip label="REACT" variant="outlined" />
                    <CustomChip label="DATABASE" variant="outlined" />
                </Box>

                {/* My Experience */}
                <Box sx={{ display: 'flex', backgroundColor: 'black', width: '800px', mt: '50px', justifyContent: 'space-between' }}>
                    <Typography sx={{ color: '#FFFFFF', fontSize: '40px', fontWeight: 'bold', mt: '20px' }}>
                        My Experience
                    </Typography>
                    <Typography sx={{ flex: 1, ml: '75px', mt: '40px', fontSize: '18px', fontWeight: '400' }}>
                        Freelance Developer
                    </Typography>
                    <Typography sx={{ mt: '42px', fontWeight: '200' }}>Nov 2023 - Present</Typography>
                </Box>

                {/* My Experience Subhead */}
                <Box sx={{ width: '800px' }}>
                    <Typography sx={{ flex: 1, ml: '345px', fontWeight: '200', fontSize: '15px' }}>
                        พัฒนาและปรับปรุงส่วนติดต่อผู้ใช้สำหรับเว็บแอปพลิเคชันโดยใช้ React.js
                        ทํางานร่วมกับทีมออกแบบ UX/UI เพื่อสร้างประสบการณ์ผู้ใช้ที่น่าประทับใจ
                        ปรับปรุงความเร็วในการโหลดเว็บไซต์ด้วยเทคนิคการเพิ่มประสิทธิภาพต่างๆ
                        ร่วมพัฒนาและดูแลไลบรารีคอมโพเนนต์ภายในองค์กร
                    </Typography>
                </Box>

                {/* My Experience Subhead2 */}
                <Box sx={{ display: 'flex', backgroundColor: 'black', width: '800px', justifyContent: 'space-between' }}>
                    <Typography sx={{ flex: 1, ml: '345px', fontSize: '18px', fontWeight: '400' }}>
                        Front-End Intern
                    </Typography>
                    <Typography sx={{ fontWeight: '200' }}>Sep 2023 - Nov 2023</Typography>
                </Box>

                {/* My Experience Subhead3 */}
                <Box sx={{ width: '800px' }}>
                    <Typography sx={{ flex: 1, ml: '345px', fontWeight: '200', fontSize: '15px', mt: '20px' }}>
                        พัฒนาเว็บไซต์ลูกค้าโดยใช้ HTML, CSS และ JavaScript
                        ช่วยปรับปรุงการเข้าถึง (Accessibility) ของเว็บไซต์ให้สอดคล้องกับมาตรฐาน
                        WCAG
                        ทํางานร่วมกับทีมแบ็คเอนด์เพื่อเชื่อมต่อ API
                    </Typography>
                </Box>

                {/* Let's Connect */}
                <Box
                    sx={{
                        backgroundColor: '#000000',
                        color: 'white',
                        padding: '40px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        mt: '60px',
                        width: '870px',
                    }}
                >
                    <Box sx={{ flex: 1, maxWidth: '400px' }}>
                        <Typography sx={{ color: '#FFFFFF', fontSize: '40px', fontWeight: 'bold', mb: '10px' }}>
                            LET'S CONNECT
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '5px' }}>
                            Say hello at <Link style={{ color: '#ffffff', textDecorationColor: '#d3ea78' }}>chanintornc@sau.ac.th</Link>
                        </Typography>
                        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                            For more info, here's my <Link style={{ color: '#ffffff', textDecorationColor: '#d3ea78' }}>resume</Link>
                        </Typography>
                        <Box sx={{ display: 'flex', marginBottom: '40px' }}>
                            <IconButton sx={{ color: '#B8E986' }}>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton sx={{ color: '#B8E986' }}>
                                <GitHubIcon />
                            </IconButton>
                            <IconButton sx={{ color: '#B8E986' }}>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton sx={{ color: '#B8E986' }}>
                                <InstagramIcon />
                            </IconButton>
                        </Box>
                        <Typography variant="body2" sx={{ fontSize: '0.8rem', mt: '190px', fontWeight: '200' }}>
                            © 2025 Chanintorn Chalermsuk
                        </Typography>
                    </Box>

                    <Box sx={{ flex: 1, maxWidth: '450px' }}>
                        <TextField label="Name" variant="filled" fullWidth sx={{ marginBottom: '15px', input: { color: 'white' }, label: { color: 'white' }, fieldset: { borderColor: '#333333' }, backgroundColor: '#222222', width: '450px' }} />
                        <TextField label="Email" variant="filled" fullWidth sx={{ marginBottom: '15px', input: { color: 'white' }, label: { color: 'white' }, fieldset: { borderColor: '#333333' }, backgroundColor: '#222222' }} />
                        <TextField label="Subject" variant="filled" fullWidth sx={{ marginBottom: '15px', input: { color: 'white' }, label: { color: 'white' }, fieldset: { borderColor: '#333333' }, backgroundColor: '#222222' }} />
                        <TextField label="Message" variant="filled" multiline rows={4} fullWidth sx={{ marginBottom: '20px', input: { color: 'white' }, label: { color: 'white' }, fieldset: { borderColor: '#333333' }, backgroundColor: '#222222' }} />
                        <Button variant="contained" sx={{ backgroundColor: '#B8E986', color: 'black', borderRadius: '30px', mb: '50px', '&:hover': { backgroundColor: '#9AD66E' } }}>
                            SUBMIT
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default MyProfile;
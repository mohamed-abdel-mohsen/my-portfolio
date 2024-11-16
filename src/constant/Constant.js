import { FaHome, FaMobile, FaMailBulk, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import pro1 from '../img/Edge-Pro.png';
import pro2 from '../img/discover.png';
import pro3 from '../img/doctor_web.png';

export const menuLinks = [
    { url: '/', name: 'Home' },
    { url: 'About', name: 'About' },
    { url: 'Project', name: 'Project' },
    { url: '/', name: 'Contact' },
];

export const ProjectCardData = [
    {
        imgsrc: pro1,
        title: 'Edge-Pro for information systems',
        text: 'Working in full-time as a web developer for one year and three months in the company ',
        view: 'https://www.youtube.com/',
    },
    {
        imgsrc: pro2,
        title: 'Tourism Company Website',
        text: 'In this Project i just handeled the Front-End using React.js',
        view: 'https://www.youtube.com/',
    },
    {
        imgsrc: pro3,
        title: 'Doctor Website',
        text: 'Doctor Web has been built from scratch starting with the design even the logo till the end dealing with the server side',
        view: 'https://www.youtube.com/',
    },
];

const leftContainerInfoStyle = { color: '#fff', marginRight: '2rem' };

export const leftContainerInfo = [
    {
        icon: <FaHome size={27} style={leftContainerInfoStyle} />,
        info: 'Cairo, EGYPT / Dubai, UAE',
        className: 'location cc',
    },
    {
        icon: <FaMobile size={27} style={leftContainerInfoStyle} />,
        info: '+20 1000691334',
        className: 'phone cc',
    },
    {
        icon: <FaMailBulk size={27} style={leftContainerInfoStyle} />,
        info: 'info.mohamedmohsen@gmail.com',
        className: 'email cc',
    },
];

export const rightContainerInfo = [
    {
        link: 'https://www.linkedin.com/in/mohamed-abdel-mohsen/',
        icon: <FaLinkedin size={35} style={{ marginLeft: '1.75rem' }} />,
    },
    {
        link: 'https://github.com/mohamed-abdel-mohsen',
        icon: <FaGithub size={35} style={{ marginLeft: '1.75rem' }} />,
    },
    {
        link: 'https://twitter.com/',
        icon: <FaTwitter size={35} style={{ marginLeft: '1.75rem' }} />,
    },
];

export const personalStatment =
    ' Full Stack Software Engineer, specializing in front-end development. While my expertise spans across both front-end and back-end technologies, I have primarily contributed as a front-end developer in professional settings,delivering responsive, user-friendly web applications. Skilled in React.js, modern JavaScript frameworks, TypeScript, and UI/UX best practices, with a strong foundation in full-stack principles.';

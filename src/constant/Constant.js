import { FaHome, FaMobile, FaMailBulk, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import pro1 from '../img/Edge-Pro.png';
import pro2 from '../img/discover.png';
import pro3 from '../img/doctor_web.png';
import pro4 from '../img/resize-image.png';
import pro5 from '../img/ecommerce.webp';
import pro6 from '../img/hosting.jpeg';
import uos from '../img/university-of-sharjah_592560cf2aeae70239af5471_large.jpg';
import udacity from '../img/Udacity_logo.png';
import aws from '../img/AWS-logo.jpg';
import iti from '../img/iti.jpg';
import meta from '../img/meta.png';
export const menuLinks = [
    { url: '/', name: 'Home' },
    { url: '/About', name: 'About' },
    { url: '/Project', name: 'Project' },
    { url: '/Contact', name: 'Contact' },
];

export const ProjectCardData = [
    {
        imgsrc: pro1,
        title: 'Edge-Pro for information systems',
        text: 'Working in full-time as a web developer for one year and three months in the company ',
        view: 'https://edge-pro.com/',
    },
    {
        imgsrc: pro2,
        title: 'Tourism Company Website',
        text: 'In this Project i just handeled the Front-End using React.js',
        view: 'https://www.url.com/',
    },
    {
        imgsrc: pro3,
        title: 'Doctor Website',
        text: 'Doctor Web has been built from scratch starting with the design even the logo till the end dealing with the server side',
        view: 'https://www.url.com/',
    },

    {
        imgsrc: pro5,
        title: 'E-Commerce BackEnd',
        text: 'This project serves as the backend for a storefront application, providing RESTful APIs to handle database interactions and authentication. Built using Node.js, Express, and PostgreSQL, the application incorporates JWT authentication and bcrypt hashing for secure user management and sensitive data protection.',
        view: 'https://github.com/mohamed-abdel-mohsen/udacity-Storefront-Backend',
    },
    {
        imgsrc: pro6,
        title: 'Hosting a Full-Stack Application',
        text: 'The project focuses on deploying a full-stack retail application built with Angular (frontend) and Node.js/Express (backend) to AWS. It covers setting up the required infrastructure, configuring the environment, and deploying the application to make it live. The final deployed frontend is hosted on an S3 bucket, and the backend is deployed using Elastic Beanstalk (EB), with a PostgreSQL database hosted on Amazon RDS.',
        view: 'https://github.com/mohamed-abdel-mohsen/udacity-Storefront-Backend',
    },
    {
        imgsrc: pro4,
        title: 'Image Processing API',
        text: 'The project aims to give a real-world scenario in which you would read and write to your disk via a Node.js express server rather than a database.',
        view: 'https://github.com/mohamed-abdel-mohsen/udacity--API-for-Image-Processing',
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

export const educationInfo = [
    {
        img: uos,
        title: 'Bachelor In Engineer',
        width: '150px',
    },
    {
        img: meta,
        title: 'Advanced React',
        width: '150px',
    },
    {
        img: udacity,
        title: 'Professional Front-End Web Development',
        width: '250px',
    },
    {
        img: udacity,
        title: 'Advanced Full-Stack Web Developmen',
        width: '250px',
    },
    {
        img: iti,
        title: 'Certificate of Completion JavaScript',
        width: '150px',
    },
    {
        img: aws,
        title: 'Certificate of Introduction to AWS Elastic Beanstalk',
        width: '250px',
    },
];

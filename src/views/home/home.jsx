import { Button } from '@mui/material';
import { useState } from 'react';
import "./home.css"
import 'swiper/css';
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const proyectList = [
    {
        name: "PayQubit",
        parraf: "Landing page para la empresa PayQubit",
        tecnology: ["Angular", "Typescript", "SCSS", "Firebase", "NextJS"]
    },
    {
        name: "Cologan",
        parraf: "App de compra y venta de ganado online",
        tecnology: ["Angular", "Javascript", "SCSS", "Mysql", "NodeJS (ExpressJS)"]
    },
    {
        name: "Wisehodler",
        parraf: "App de gestion para billeteras virtuales",
        tecnology: ["Angular", "Typescript", "SCSS"]
    },
    {
        name: "Solvy App",
        parraf: "App de gestion de gruas y soporte mecanico para la empresa Solvy",
        tecnology: ["React Native", "Typescript", "NextJS"]
    },
    {
        name: "AlexCompu",
        parraf: "Landing page para la empresa AlexCompu",
        tecnology: ["React", "Javscript", "CSS"]
    },
    {
        name: "BitGreen",
        parraf: "Web orientada a la consulta y gestion de consumo energetico en minado de bitcoins",
        tecnology: ["Angular", "Typescript", "SCSS", "NodeJS (ExpressJS)", "Mysql"]
    },
    {
        name: "Testing.com",
        parraf: "Web de gestion para la empresa de salud Testing.com",
        tecnology: ["React", "Javascript", "CSS"]
    },
    {
        name: "PeetKeeper",
        parraf: "App orientada al cuidado de mascotas",
        tecnology: ["Ionic (React)", "Typescript", "SCSS", "Firebase"]
    },
    {
        name: "Soluciones Star",
        parraf: "Landing page para la empresa Soluciones Star",
        tecnology: ["Angular", "Typescript", "SCSS"]
    },
    {
        name: "Match-Fit App",
        parraf: "App de fitness con inteligencia artificial para jugadores de soccer",
        tecnology: ["Ionic (React)", "Typescript", "CSS", "NodeJS (ExpressJS)", "Mysql"]
    },
    {
        name: "Gatherin",
        parraf: "Landing page para la empresa Gatherin",
        tecnology: ["React", "Javascript", "SCSS"]
    },
    {
        name: "Admin Cologan",
        parraf: "Administrador web para la app Colagan de compra y venta de ganado",
        tecnology: ["Angular", "Typescript", "SCSS", "Firebase"]
    },
    {
        name: "Wasapi",
        parraf: "Aplicacion orientada a mejorar la experiencia para las empresas al usar whatsapp con api especializadas para la empresa",
        tecnology: ["React native", "Javascript"]
    },
    {
        name: "Bot PayQubit",
        parraf: "Bot de gestion diseñado para empresa PayQubit",
        tecnology: ["NodeJS", "Typescript"]
    },
    {
        name: "Bot Cardinal",
        parraf: "Bot de gestion diseñado para la escuela Moderna de Conducción",
        tecnology: ["NodeJS", "Typescript"]
    },
    {
        name: "PartMiner",
        parraf: "Plataforma web de la empresa PartMiner, empresa dedicada a Ia venta de piezas industriales",
        tecnology: ["Angular", "Typescript", "SCSS", "NextJS"]
    },
    {
        name: "Idaitu",
        parraf: "Plataforma web orientada a la agrupacion y propagacion de redes sociales y promocion de eventos",
        tecnology: ["Angular", "Typescript", "Tailwind"]
    },
    {
        name: "Bon Naturel",
        parraf: "Tienda de suplementos nutricionales",
        tecnology: ["Angular", "Typescript", "SCSS", "Firebase"]
    },

]

const ProyectsSubSection = ({ changeView }) => {
    return <div className='hidden sm:flex row flex-wrap justify-center lg:justify-start'>
        {
            proyectList.map((proyect, index) => {
                return <Button variant="contained" color='secondary' sx={{ fontSize: '0.7rem', height: '30px', paddingInline: '15px', marginRight: '10px', marginBottom: "10px" }} disableElevation>{proyect.name}</Button>
            })
        }
    </div>
}

const ContactSubSection = ({ changeView }) => {
    return <div className='hidden sm:flex row flex-wrap justify-center lg:justify-start mt-5'>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-white sm:rounded-lg">
                <div className="flex items-center text-black">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-60">
                        Medellin - Antioquia
                    </div>
                </div>

                <div className="flex items-center mt-4 text-black">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                        +57 3016236319
                    </div>
                </div>

                <div className="flex items-center mt-2 text-black">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                        leideracevedo07@gmail.com
                    </div>
                </div>
            </div>
        </div>
    </div>
}


const ProfilInfo = ({ changeView }) => {
    return <div className='flex row w-full justify-center items-center bg-white sm:h-[800px] p-10 lg:px-20 pb-0 pt-0  sm:max-h-[1080px] pt-10 sm:pt-0'>
        <div className='lg:flex hidden h-full align-center justify-center flex-col flex-1 rounded-lg max-w-[500px]'>
            <img src="/img/img3.png" className='shadowStyle1 w-full object-cover aspect-square' />
        </div>
        <div className='flex max-w-[900px] flex-col gap-5 h-full justify-center lg:pl-20'>
            <span className='text-sm lg:text-3xl font-bold text-center lg:text-left'>Acerca de mi</span>
            <div className='-mt-2 mb-5 bg-red-500 h-1 w-14'></div>
            <p className='text-sm lg:text-xl text-center lg:text-left'>Mi nombre es Leider Acevedo, me considero un programador apasionado y comprometido con la excelencia en mi trabajo. A lo largo de mi trayectoria profesional, he adquirido un sólido conocimiento y experiencia en el desarrollo de soluciones digitales utilizando tecnologías web de vanguardia.
                <br /><br />

                Mi pasión por la programación me ha Llevado a sumergirme en diversos proyectos, donde he tenido la oportunidad de crear y optimizar aplicaciones que han mejorado significativamente la eficiencia y experiencia del usuario. Estoy familiarizado con una amplia gama de tecnologías y me siento cómodo trabajando en todas las etapas del ciclo de vida del desarrollo de software.

                <br /><br />

                Además, mi experiencia en el desarrollo de aplicaciones móviles me ha permitido adaptar y crear soluciones multiplataforma que garantizan una experiencia fluida y consistente en dispositivos móviles.
            </p>

            <div className='flex lg:flex-row flex-col mt-10'>
                <Button variant="contained" disableElevation size='large' sx={{
                    paddingInline: '50px',
                }}>Descargar CV</Button>
            </div>
        </div>
    </div>
}

const HomeContent = () => {
    const [subsection, setsubsection] = useState(0)

    return <div className='flex row w-full justify-center items-center h-screen p-10 lg:px-20 pb-0 pt-0 max-h-[1080px]'>
        <div className='flex w-[750px] flex-col gap-5 h-full justify-center lg:pl-20'>
            <h1 className='font-bold text-2xl -mt-14 mb-14 opacity-30'>Portafolio web</h1>
            <span className='text-sm lg:text-3xl font-bold text-center lg:text-left'>Leider Antonio Acevedo</span>
            <h1 className='text-2xl lg:text-5xl font-black text-center lg:text-left'>DESARROLLADOR FRONTEND Y BACKEND</h1>
            <p className='text-sm lg:text-xl lg:ml-10 text-center lg:text-left'>JavaScript (+Typescript), Python. Angular, Angular Universal Vue, Nuxt, Sequelize, Docker, Jasmine
                NodeJS, ExpressJS (+Api rest), Mocha.JS
                NextJS, React (+ Redux), jQuery, Bootstrap
                Tailwind CSS, Git, Figma, Adobe XD, AWS
                MySQL, Firebase.
                Ionic, React Native</p>

            <div className='flex lg:flex-row flex-col'>
                <Button variant="contained" disableElevation size='large' sx={{
                    paddingInline: '50px',
                }}>Informacion personal</Button>
                <div className='mt-5 mr-5'></div>
                <Button variant="contained" size='large' disableElevation
                    onClick={() => { window.location.href = 'https://www.linkedin.com/in/leider-acevedo-985931126/' }}
                    sx={{
                        paddingInline: '50px',
                    }}>Linkedin</Button>
            </div>

            <span className='hidden sm:flex text-lg lg:text-2xl font-bold mt-5'>Proyectos:</span>
            <ProyectsSubSection />

        </div>
        <div className='lg:flex hidden h-full align-center justify-center flex-col flex-1 rounded-lg'>
            <img src="/img/img2.png" className='w-full object-contain' />
        </div>
    </div>
}

const Home = () => {
    return <div className='bg-[#f2e8e4]'>
        <div className='max-w-[1920px] m-auto'>
            <div className='bg-[#f2e8e4] w-screen max-w-[1920px]'>
                <HomeContent />
                <ProfilInfo />
            </div>

        </div>

    </div>

}

export default Home
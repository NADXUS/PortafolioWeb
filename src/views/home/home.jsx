import { Button } from '@mui/material';
import { useState } from 'react';
import "./home.css"

const proyectList = [
    "PayQubit",
    "Cologan",
    "Wisehodler",
    "Solvy App",
    "AlexCompu",
    "BitGreen",
    "Testing.com",
    "PeetKeeper",
    "Soluciones Star",
    "Match-Fit App",
    "Gatherin",
    "Admin Cologan",
    "Wasapi",
    "Bot PayQubit",
    "Bot Cardinal",
    "PartMiner",
    "Idaitu",
    "Bon Naturel",
]

const ProfilInfo = ({ changeView }) => {
    return <div className='flex row w-full justify-center items-center bg-white sm:h-[800px] p-10 lg:px-20 pb-0 pt-0  sm:max-h-[1080px] pt-10 sm:pt-0'>
        <div className='lg:flex hidden h-full align-center justify-center flex-col flex-1 rounded-lg max-w-[500px]'>
            <img src="../public/img/img3.png" className='shadowStyle1 w-full object-cover aspect-square' />
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
                <Button variant="contained" size='large' disableElevation>Contacto</Button>
            </div>

            <span className='hidden sm:flex text-lg lg:text-2xl font-bold mt-5'>Proyectos:</span>
            <div className='hidden sm:flex row flex-wrap justify-center lg:justify-start'>
                {
                    proyectList.map((proyect, index) => {
                        return <Button variant="contained" color='secondary' sx={{ fontSize: '0.7rem', height: '30px', paddingInline: '15px', marginRight: '10px', marginBottom: "10px" }} disableElevation>{proyect}</Button>

                    })
                }
            </div>
        </div>
        <div className='lg:flex hidden h-full align-center justify-center flex-col flex-1 rounded-lg'>
            <img src="../public/img/img2.png" className='w-full object-contain' />
        </div>
    </div>
}

const Home = () => {
    return <div className='bg-[#f2e8e4]'>
        <div className='max-w-[1920px] m-auto'>
            <div className='bg-[#f2e8e4] w-screen h-screen max-w-[1920px]'>
                <HomeContent />
                <ProfilInfo />
            </div>
        </div>
    </div>

}

export default Home
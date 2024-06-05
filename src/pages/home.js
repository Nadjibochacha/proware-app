import React from 'react'
import Header from '../components/header';
import Button from 'react-bootstrap/Button';
import GlowBackgroundCard from "../components/GlowBackgroundCard";
import './home.css';
import {Typewriter} from 'react-simple-typewriter';
const Home = () => {
  return (
    <div id='home' className=''>
      <div className='content'>
        <Header/>
        <div className='container mt-5'>
            <div className='hero'>
              <h1> pro
              <Typewriter
                words={['Ware', 'fesstional']}
                loop={true} // Whether to loop through the words indefinitely
                cursor
                cursorStyle='_'
                typeSpeed={280} // Typing speed in milliseconds
                deleteSpeed={70} // Deleting speed in milliseconds
                delaySpeed={1000} // Delay between words in milliseconds
              />
              </h1>

              <div className='hero-descrption'>
                <p className="text-xl-left text-justify font-weight-bold">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>

              </div>
              <div className='row ps-sm-3'>
                <Button variant="" href="/Contact" className="col-md-2 ms-1 btn-orange col-12 rounded-3 border-0">
                  contact us
                </Button>
                <Button variant="" href="/About" className="col-md-2 btn-violet ms-3 col-12 rounded-3 border-0 col-12">
                  read more
                </Button>


              </div>


              <div className='stats'>

                <GlowBackgroundCard type="Clients"/>
                <GlowBackgroundCard type="Projects"/>
                <GlowBackgroundCard type="Reviews"/>

              </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home;

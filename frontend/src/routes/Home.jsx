import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import { IconCircleArrowDown } from "@tabler/icons-react";

function Home() {
  return (
    <>
      <div className="relative">
        <div className="bg-[url('assets/hero-image.png')] h-[calc(100vh-110px)] w-full bg-cover bg-[center_25%]"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col">
          <div className="mt-16 md:mt-24">
            <Fade cascade damping={0.4} triggerOnce>
              <p className="text-white text-2xl text-center">WELCOME TO</p>
              <h1 className="text-white font-bold text-4xl sm:text-6xl mt-3 text-center">
                Yates Martial Arts
              </h1>
              <p className="text-white text-s sm:text-lg text-center mt-6">
                A family run club for all ages and abilities.
              </p>

              <div className="text-center mt-12">
                <NavLink to="/contact">
                  <button className="btn bg-sky-300 w-36 hover:bg-sky-400 border-0">
                    Get Started
                  </button>
                </NavLink>
              </div>
            </Fade>
          </div>

          <div className="absolute bottom-14 md:bottom-10 left-1/2 transform -translate-x-1/2">
            <IconCircleArrowDown className="text-white w-8 h-8 animate-bounce" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-32 bg-white text-xl font-semibold">
        <div className="px-4 text-left md:text-center xl:w-2/3">
          <Fade triggerOnce cascade damping={0.2}>
            <p className="mb-8">
              Yates Martial Arts was established in 2023 by Luke Yates alongside
              his family for whom karate is a way of life.
            </p>
            <p>
              The Yates family has over 50 years of experience in martial arts
              between them as well as all having represented England in karate;
              claiming multiple World and European titles in both kata and
              kumite disciplines.
            </p>
          </Fade>
        </div>
      </div>

      <div className=" flex bg-sky-100 py-32 justify-center items-center ">
        <div className="flex flex-wrap gap-24 w-4/5 lg:w-2/3 flex-col lg:flex-row">
          <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border">
            <Fade triggerOnce>
              <h3 className="font-bold text-xl">Karate </h3>
              <div className="divider"></div>
              <p>
                Karate is a defensive art, hence the Japanese symbol on our logo
                meaning to protect. Our unique syllabus has been devised from
                studying various styles of karate, predominantly Shotokan as
                well as Ishinryu, Kokoshin, Wado Ryu and Shito Ryu; utilising
                only the most effective techniques for self defence and
                competition. We practise both traditional and sport karate so
                whether you want to learn self defence, get fitter or compete we
                can help you achieve your goals.
              </p>
            </Fade>
          </div>

          <div className=" flex-1 bg-white rounded-2xl p-8 shadow-lg border">
            <Fade triggerOnce>
              <h3 className="font-bold text-xl">Kickboxing</h3>
              <div className="divider"></div>
              <p>
                Kickboxing combines the art of karate-do and boxing. As well as
                having black belts in kickboxing all the Yates’ have represented
                England in karate, claiming multiple World and European titles
                in both kata and kumite disciplines. Yates Martial Arts’
                practice both light contact and semi contact (point scoring)
                kickboxing. Our sessions include pad work, fitness, light
                contact and point scoring sparring so if you want to get fitter
                or learn self defence we can help you achieve your goals.
              </p>
            </Fade>
          </div>

          <div className="flex-2 bg-white rounded-2xl p-8 shadow-lg border">
            <Fade triggerOnce>
              <h3 className="font-bold text-xl">Little Ninjas</h3>
              <div className="divider text-xl"></div>
              <p>
                Our fun and entertaining little Ninjas sessions are designed for
                children 3-5yrs to provide them with a perfect introduction to
                karate and kickboxing. We teach both physical skills and
                discipline whilst offering rewards through our badge system.
              </p>
            </Fade>
          </div>

          <div className="flex-2 bg-white rounded-2xl p-8 shadow-lg border">
            <Fade triggerOnce>
              <h3 className="font-bold text-xl">Body Blitz</h3>
              <div className="divider text-xl"></div>
              <p>
                Body Blitz is a group based fitness class designed for all
                abilities and fitness levels. Body Blitz is targeted at
                improving general fitness and weight loss with a focus on cardio
                and strength training. A range of training methods such as
                circuit training and high intensity interval training (HIIT) are
                incorporated to create an engaging and varied fitness class.
                Body Blitz provides different variations of all exercises to
                ensure all members can exercise according to their fitness
                level. Whether you are looking to keep fit, lose some weight,
                get stronger, increase your cardio or improve your general
                fitness, Body Blitz is the fitness class for you.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

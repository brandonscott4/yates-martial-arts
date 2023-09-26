import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="relative">
        <img
          src="/karate-woman.jpg"
          alt="My Image"
          className="h-[calc(100vh-110px)] w-full object-cover grayscale"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          <Fade cascade damping={0.4} triggerOnce>
            <p className="text-white text-2xl">WELCOME TO</p>
            <p className="text-white font-bold text-4xl sm:text-6xl mt-3">
              Yates Martial Arts
            </p>
            <p className="text-white text-s sm:text-lg text-center mt-9">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium nostrum, rem.
            </p>

            <NavLink to="/contact">
              <button className="btn bg-sky-300 w-36 mt-4 hover:bg-sky-400 border-0">
                Get Started
              </button>
            </NavLink>
          </Fade>
        </div>
      </div>

      <div className="flex items-center justify-center py-32 bg-white text-md md:text-xl font-semibold">
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
        </div>
      </div>

      <div className="bg-white py-16 text-center">
        <Fade triggerOnce>
          <p className="italic">
            The ultimate aim of Karate lies not in victory nor defeat, but in
            the perfection of the character of its participants.” –{" "}
            <b>Gichin Funakoshi</b>
          </p>
        </Fade>
      </div>
    </>
  );
}

export default Home;

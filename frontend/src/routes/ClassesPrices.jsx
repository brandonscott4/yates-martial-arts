import { Fade } from "react-awesome-reveal";

function ClassesPrices() {
  return (
    <>
      <div className=" py-20 w-full bg-sky-100">
        <Fade triggerOnce>
          <h2 className="font-semibold text-3xl mb-12 text-center">
            WILMINGTON
          </h2>
        </Fade>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col xl:flex-row gap-10 mx-5 justify-center items-center xl:items-stretch w-full xl:w-2/3">
            <div className="relative overflow-hidden aspect-video w-4/5 xl:w-3/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.66417630502!2d0.19872407700380443!3d51.42759531652961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b21ce687026b%3A0x6a1615fd41718fa9!2sWilmington%20Memorial%20Hall!5e0!3m2!1sen!2suk!4v1696609002738!5m2!1sen!2suk"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="bg-white rounded-2xl w-4/5 xl:w-2/5 shadow-xl flex flex-col items-center justify-center">
              <div className="text-left p-10 text-lg font-medium md:text-xl">
                <Fade triggerOnce>
                  <p>Wilmington Memorial Hall</p>
                  <p>Wilmington</p>
                  <p>96 High Rd</p>
                  <p>DA2 7DW</p>
                  <div className="divider"></div>
                  <h4 className="font-bold">Thursdays:</h4>
                  <p>12:30pm - 1:30pm (Karate)</p>
                  <h4 className="font-bold mt-2">Saturday:</h4>
                  <p>10:30am - 11:30am (Kickboxing)</p>
                  <p>12:30pm - 1:30pm (Karate)</p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 w-full bg-white">
        <div className="flex flex-col items-center justify-center mx-4">
          <h3 className="font-semibold text-3xl mb-12 text-center">1-TO-1</h3>
          <p className="text-md xl:text-xl w-4/5 xl:w-2/3">
            Our instructors offer private 1-to-1 sessions to our students in our
            fully equipped home dojo providing individualised coaching focusing
            on specific areas of karate such as: kata, kumite, kihon, grading
            work, competition training as well as strength and fitness training.
            Private lessons are an excellent opportunity to accelerate progress
            from tailored feedback in a 1-to-1 environment.
          </p>
        </div>
      </div>

      <div className="py-20 w-full flex gap-16 lg:gap-24 justify-center items-center bg-sky-100">
        <div className="w-1/3 lg:w-1/6 text-center bg-white rounded-2xl p-8 shadow-lg border">
          <Fade triggerOnce>
            <h3 className="font-semibold text-xl">Kids classes (5-17)</h3>
            <div className="divider"></div>
            <p className="text-lg">£13 per hour</p>
          </Fade>
        </div>

        <div className="w-1/3 lg:w-1/6 text-center bg-white rounded-2xl p-8 shadow-lg border">
          <Fade triggerOnce>
            <h3 className="font-semibold text-xl">Adults classes (18+)</h3>
            <div className="divider"></div>
            <p className="text-lg">£18 per hour</p>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default ClassesPrices;

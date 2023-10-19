import { Fade } from "react-awesome-reveal";

function ClassesPrices() {
  return (
    <>
      <div className=" py-20 w-full bg-sky-100">
        <Fade triggerOnce>
          <h2 className="font-bold text-xl md:text-4xl mb-12 text-center">
            WILMINGTON
          </h2>
        </Fade>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col xl:flex-row gap-10 mx-5 justify-center items-center xl:items-stretch w-full xl:w-2/3">
            <div className="relative overflow-hidden aspect-video w-4/5 xl:w-3/5">
              <iframe
                title="Google maps location for Wilmington classes"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.66417630502!2d0.19872407700380443!3d51.42759531652961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b21ce687026b%3A0x6a1615fd41718fa9!2sWilmington%20Memorial%20Hall!5e0!3m2!1sen!2suk!4v1696609002738!5m2!1sen!2suk"
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="bg-white rounded-2xl w-4/5 xl:w-2/5 shadow-xl flex flex-col items-center justify-center">
              <div className="p-10">
                <Fade triggerOnce>
                  <div className="text-left text-lg font-medium md:text-xl">
                    <p>Wilmington Memorial Hall</p>
                    <p>Wilmington</p>
                    <p>96 High Rd</p>
                    <p>DA2 7DW</p>
                  </div>
                  <div className="divider"></div>
                  <div className="flex gap-8 xl:gap-14">
                    <div>
                      <h4 className="font-bold text-xl text-center">
                        Wednesday
                      </h4>
                      <div className="flex flex-col items-center justify-center flex-wrap gap-3 mt-4">
                        <div className="text-center">
                          <p className="font-medium text-xl">Karate</p>
                          <p className="font-medium text-sky-400">Age 6+</p>
                          <p className="font-normal text-md">5:40pm-6:30pm</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-xl">Kickboxing</p>
                          <p className="font-medium text-sky-400">Age 6+</p>
                          <p className="font-normal text-md">6:30pm-7:20pm</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-xl text-center">
                        Saturday
                      </h4>
                      <div className="flex flex-col items-center justify-center flex-wrap gap-3 mt-4">
                        <div className="text-center">
                          <p className="font-medium text-xl">Little Ninjas</p>
                          <p className="font-medium text-sky-400">Ages 3-5</p>
                          <p className="font-normal text-md">9:00am-9:30am</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-xl">Karate</p>
                          <p className="font-medium text-sky-400">Age 6+</p>
                          <p className="font-normal text-md">9:30am-10:20am</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-xl">Kickboxing</p>
                          <p className="font-medium text-sky-400">Age 6+</p>
                          <p className="font-normal text-md">10:20am-11:10am</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium text-xl">Body Blitz</p>
                          <p className="font-medium text-sky-400">Age 12+</p>
                          <p className="font-normal text-md">11:10am-12:00pm</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 w-full bg-white">
        <div className="flex flex-col items-center justify-center mx-4">
          <h3 className="font-bold text-3xl lg:text-4xl mb-12 text-center">
            1-TO-1
          </h3>
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

      <div className="py-32 w-full flex gap-16 lg:gap-24 justify-center items-center bg-sky-100">
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

import { Fade } from "react-awesome-reveal";

function ClassesPrices() {
  return (
    <>
      <div className=" py-20 w-full bg-sky-100">
        <Fade triggerOnce>
          <h2 className="font-semibold text-3xl mb-12 text-center">
            DARTFORD DOJO
          </h2>
        </Fade>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col xl:flex-row gap-10 mx-5 justify-center items-center xl:items-stretch w-full xl:w-2/3">
            <div className="relative overflow-hidden aspect-video w-4/5 xl:w-3/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19897.144589707365!2d0.20285787910156045!3d51.43716629999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b179192b1f41%3A0x62a33b378f5e61e2!2sMcDonald&#39;s!5e0!3m2!1sen!2suk!4v1693958999655!5m2!1sen!2suk"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="bg-white rounded-2xl w-4/5 xl:w-2/5 shadow-xl flex flex-col items-center justify-center">
              <div className="text-left p-10 text-lg font-medium md:text-xl">
                <Fade triggerOnce>
                  <p>Random Sports Centre</p>
                  <p>Dartford</p>
                  <p>100 Street Road</p>
                  <p>DA1 8NG</p>
                  <div className="divider"></div>
                  <p className="mt-8">
                    <b>Thursdays: </b>12:30pm - 1:30pm
                  </p>
                  <p className="mt-4">
                    <b>Saturdays: </b>11:30pm - 12:30pm
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 w-full flex gap-24 justify-center items-center">
        <div className="w-1/6 text-center">
          <Fade triggerOnce>
            <h3 className="font-semibold text-xl">Kids classes (5-17)</h3>
            <div className="divider"></div>
            <p className="text-lg">£13 per hour</p>
          </Fade>
        </div>

        <div className="w-1/6 text-center">
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

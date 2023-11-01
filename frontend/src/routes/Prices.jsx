import { Fade } from "react-awesome-reveal";

function Prices() {
  return (
    <div className="py-20 w-full bg-white flex flex-col justify-center items-center">
      <Fade triggerOnce>
        <h2 className="font-bold text-3xl lg:text-4xl mb-12 text-center">
          MEMBERSHIP FEES
        </h2>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        <div className="relative">
          <div className="absolute bg-blue-300 w-48 h-72 rounded-xl top-2 left-2"></div>
          <div className="relative bg-white shadow-md w-48 h-72 p-4 rounded-xl border border-black">
            <Fade triggerOnce>
              <div className="absolute left-0 -ml-4 top-5">
                <h4 className="bg-blue-300 px-2 py-1 rounded-md font-bold text-xl text-black">
                  Little Ninjas
                </h4>
              </div>
              <div className="mt-12 text-center flex flex-col gap-3">
                <div>
                  <p className="font-bold text-base">Unlimited</p>
                  <p className="text-sm">
                    <span className="text-3xl font-bold text-blue-300">
                      £40
                    </span>
                    /Month
                  </p>
                </div>
                <div>
                  <p className="font-bold text-base">Once weekly</p>
                  <p className="text-sm">
                    <span className="text-3xl font-bold text-blue-300">
                      £26
                    </span>
                    /Month
                  </p>
                </div>
                <div>
                  <p className="font-bold text-base">Pay as you go</p>
                  <p className="text-sm">
                    <span className="text-3xl font-bold text-blue-300">£8</span>
                    /Session
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bg-blue-300 w-48 h-72 rounded-xl top-2 left-2"></div>
          <div className="relative bg-white shadow-md w-48 h-72 p-4 rounded-xl border border-black">
            <Fade triggerOnce>
              <div className="absolute left-0 -ml-4 top-5">
                <h4 className="bg-blue-300 px-2 py-1 rounded-md font-bold text-xl text-black leading-5">
                  Karate or <br />
                  Kickboxing
                </h4>
              </div>
              <div className="mt-14 text-center flex flex-col gap-3">
                <div>
                  <p className="font-bold text-base">Unlimited</p>
                  <p className="text-sm">
                    <span className="text-3xl font-bold text-blue-300">
                      £52
                    </span>
                    /Month
                  </p>
                </div>
                <div>
                  <p className="font-bold text-base">Once weekly</p>
                  <p className="text-sm">
                    <span className="text-3xl font-bold text-blue-300">
                      £34
                    </span>
                    /Month
                  </p>
                </div>
                <div>
                  <p className="font-bold text-base">Pay as you go</p>
                  <p className="text-sm">
                    <span className="text-3xl font-bold text-blue-300">
                      £10
                    </span>
                    /Session
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bg-blue-300 w-48 h-72 rounded-xl top-2 left-2"></div>
          <div className="relative bg-white shadow-md w-48 h-72 p-4 rounded-xl border border-black">
            <Fade triggerOnce>
              <div className="absolute left-0 -ml-4 top-5">
                <h4 className="bg-blue-300 px-2 py-1 rounded-md font-bold text-xl text-black">
                  Body Blitz
                </h4>
              </div>
              <div className="mt-16 text-center flex flex-col gap-3">
                <div>
                  <p className="font-bold text-base">Once weekly</p>
                  <p className="text-sm">
                    <span className="text-3xl font-bold text-blue-300">
                      £26
                    </span>
                    /Month
                  </p>
                </div>
                <div>
                  <p className="font-bold text-base">Pay as you go</p>
                  <p className="text-sm">
                    <span className="text-3xl font-bold text-blue-300">£8</span>
                    /Session
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bg-blue-300 w-48 h-72 rounded-xl top-2 left-2"></div>
          <div className="relative bg-white shadow-md w-48 h-72 p-4 rounded-xl border border-black">
            <Fade triggerOnce>
              <div className="absolute left-0 -ml-4 top-5">
                <h4 className="bg-blue-300 px-2 py-1 rounded-md font-bold text-xl text-black">
                  Combo 1
                </h4>
              </div>
              <div className="mt-16 text-center flex flex-col gap-3">
                <p className="font-medium text-base">Karate & Kickboxing</p>
                <div>
                  <p className="font-bold text-base">Unlimited</p>
                  <p className="text-sm">
                    <span className="text-3xl font-bold text-blue-300">
                      £65
                    </span>
                    /Month
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bg-blue-300 w-48 h-72 rounded-xl top-2 left-2"></div>
          <div className="relative bg-white shadow-md w-48 h-72 p-4 rounded-xl border border-black">
            <Fade triggerOnce>
              <div className="absolute left-0 -ml-4 top-5">
                <h4 className="bg-blue-300 px-2 py-1 rounded-md font-bold text-xl text-black">
                  Combo 2
                </h4>
              </div>
              <div className="mt-16 text-center flex flex-col gap-3">
                <p className="font-medium text-base">
                  Karate <b>or</b> Kickboxing & Body Blitz
                </p>
                <div>
                  <p className="font-bold text-base">Unlimited</p>
                  <p className="text-sm">
                    <span className="text-3xl font-bold text-blue-300">
                      £60
                    </span>
                    /Month
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bg-blue-300 w-48 h-72 rounded-xl top-2 left-2"></div>
          <div className="relative bg-white shadow-md w-48 h-72 p-4 rounded-xl border border-black">
            <Fade triggerOnce>
              <div className="absolute left-0 -ml-4 top-5">
                <h4 className="bg-blue-300 px-2 py-1 rounded-md font-bold text-xl text-black">
                  Combo 3
                </h4>
              </div>
              <div className="mt-16 text-center flex flex-col gap-3">
                <p className="font-medium text-base">
                  Karate, Kickboxing & Body Blitz
                </p>
                <div>
                  <p className="font-bold text-base">Unlimited</p>
                  <p className="text-sm">
                    <span className="text-3xl font-bold text-blue-300">
                      £75
                    </span>
                    /Month
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <p className="text-3xl font-bold my-12 underline decoration-blue-300 underline-offset-4">
        First lesson free!
      </p>
      <div className="divider"></div>
      <h3 className="font-bold text-3xl md:text-4xl text-center mt-12">
        License Fees
      </h3>
      <h4 className="font-semibold text-xl text-center mb-12">
        For Karate, Kickboxing and Little Ninjas only
      </h4>

      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-12">
          <div className="relative">
            <div className="absolute bg-blue-300 w-52 h-40 rounded-xl top-2 left-2"></div>
            <div className="relative bg-white shadow-md w-52 h-40 rounded-xl border border-black flex items-center justify-center">
              <Fade triggerOnce>
                <div className="text-center flex flex-col gap-2">
                  <p className="font-bold text-lg">
                    Karate, Kickboxing or Little Ninjas
                  </p>
                  <p className="text-4xl font-bold text-blue-300">£35</p>
                  <p className="font-semibold text-lg">Annually</p>
                </div>
              </Fade>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bg-blue-300 w-52 h-40 rounded-xl top-2 left-2"></div>
            <div className="relative bg-white shadow-md w-52 h-40 rounded-xl border border-black flex items-center justify-center">
              <Fade triggerOnce>
                <div className="text-center flex flex-col gap-2">
                  <p className="font-bold text-lg">
                    Karate & Kickboxing <br /> (Combo 1)
                  </p>
                  <p className="text-4xl font-bold text-blue-300">£40</p>
                  <p className="font-semibold text-lg">Annually</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-bold text-3xl md:text-4xl mt-12">
          Private Lessons
        </h3>
        <h4 className="font-semibold text-2xl mb-8">Karate or kickboxing</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          <div className="relative">
            <div className="absolute bg-blue-300 w-48 h-32 rounded-xl top-2 left-2"></div>
            <div className="relative bg-white shadow-md w-48 h-32 rounded-xl border border-black flex items-center justify-center">
              <Fade triggerOnce>
                <div className="text-center flex flex-col gap-2">
                  <p className="font-bold text-xl">30 Minutes</p>
                  <p className="text-4xl font-bold text-blue-300">£15</p>
                  <p className="font-semibold text-base">8 and under only</p>
                </div>
              </Fade>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bg-blue-300 w-48 h-32 rounded-xl top-2 left-2"></div>
            <div className="relative bg-white shadow-md w-48 h-32 rounded-xl border border-black flex items-center justify-center">
              <Fade triggerOnce>
                <div className="text-center flex flex-col gap-2">
                  <p className="font-bold text-xl">45 Minutes</p>
                  <p className="text-4xl font-bold text-blue-300">£20</p>
                  <p className="font-semibold text-base">11 and under only</p>
                </div>
              </Fade>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bg-blue-300 w-48 h-32 rounded-xl top-2 left-2"></div>
            <div className="relative bg-white shadow-md w-48 h-32 rounded-xl border border-black flex items-center justify-center">
              <Fade triggerOnce>
                <div className="text-center flex flex-col gap-2">
                  <p className="font-bold text-xl">60 Minutes</p>
                  <p className="text-4xl font-bold text-blue-300">£30</p>
                </div>
              </Fade>
            </div>
          </div>

          <div className="relative">
            <div className="absolute bg-blue-300 w-48 h-32 rounded-xl top-2 left-2"></div>
            <div className="relative bg-white shadow-md w-48 h-32 rounded-xl border border-black flex items-center justify-center">
              <Fade triggerOnce>
                <div className="text-center flex flex-col gap-2">
                  <p className="font-bold text-xl">90 Minutes</p>
                  <p className="text-4xl font-bold text-blue-300">£45</p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <p className="text-2xl md:text-3xl font-bold mt-12 text-center mb-6 underline decoration-blue-300 underline-offset-4">
          First private lesson half price!
        </p>
        <p className="text-base md:text-lg font-medium text-center mb-12">
          Small groups or pair lessons can be arranged, contact us for prices.
        </p>
      </div>
    </div>
  );
}

export default Prices;

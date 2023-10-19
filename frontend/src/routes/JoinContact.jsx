import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

function JoinContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [message, setMessage] = useState("");

  const [formError, setFormError] = useState({
    name: false,
    email: false,
    mobileNo: false,
    message: false,
    errorMsg: {
      error: false,
      msg: "",
    },
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "name") {
      setName(value);
    } else if (id === "email") {
      setEmail(value);
    } else if (id === "mobileNo") {
      setMobileNo(value);
    } else {
      setMessage(value);
    }

    setFormError((prevFormError) => ({
      ...prevFormError,
      [id]: false,
    }));
  };

  useEffect(() => {
    if (formError.errorMsg.error) {
      if (
        !formError.name &&
        !formError.email &&
        !formError.mobileNo &&
        !formError.message
      ) {
        setFormError((prevFormError) => ({
          ...prevFormError,
          errorMsg: {
            error: false,
            msg: "",
          },
        }));
      }
    } else {
      if (
        formError.name ||
        formError.email ||
        formError.mobileNo ||
        formError.message
      ) {
        setFormError((prevFormError) => ({
          ...prevFormError,
          errorMsg: {
            error: true,
            msg: "Please enter the required field(s)",
          },
        }));
      }
    }
  }, [formError]);

  const handleSubmit = (e) => {
    let errorFlag = false;

    if (name === "") {
      setFormError((prevFormError) => ({
        ...prevFormError,
        name: true,
      }));
      errorFlag = true;
    }
    if (email === "") {
      setFormError((prevFormError) => ({
        ...prevFormError,
        email: true,
      }));
      errorFlag = true;
    }
    if (mobileNo === "") {
      setFormError((prevFormError) => ({
        ...prevFormError,
        mobileNo: true,
      }));
      errorFlag = true;
    }
    if (message === "") {
      setFormError((prevFormError) => ({
        ...prevFormError,
        message: true,
      }));
      errorFlag = true;
    }

    if (errorFlag) {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className=" py-20 w-full bg-sky-100 flex flex-col justify-center items-center">
        <Fade triggerOnce>
          <h1 className="font-bold text-3xl lg:text-4xl mb-12">
            GET IN CONTACT
          </h1>
        </Fade>
        <form
          className="bg-white w-4/5 sm:w-3/4 lg:w-1/2 2xl:w-2/6 mx-8 px-8 sm:px-20 py-12 shadow-xl rounded-2xl"
          onSubmit={handleSubmit}
          action="https://formsubmit.co/df15969adab72323ec498058a5895f32"
          method="POST"
        >
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              formError.name ? "border-red-500" : ""
            }`}
            id="name"
            name="name"
            type="text"
            placeholder="Jane Doe"
            value={name}
            onChange={handleChange}
          ></input>

          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-6"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              formError.email ? "border-red-500" : ""
            }`}
            id="email"
            name="email"
            type="email"
            placeholder="janedoe@gmail.com"
            value={email}
            onChange={handleChange}
          ></input>

          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-6"
            htmlFor="mobileNo"
          >
            Mobile
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              formError.mobileNo ? "border-red-500" : ""
            }`}
            id="mobileNo"
            name="mobileNo"
            type="tel"
            placeholder="07123456789"
            value={mobileNo}
            onChange={handleChange}
          ></input>

          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-6"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
            className={`resize-y shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none h-40 ${
              formError.message ? "border-red-500" : ""
            } `}
          ></textarea>
          <p
            className={`text-red-500 font-semibold mt-3${
              formError.errorMsg.error ? "" : "hidden"
            }`}
          >
            {formError.errorMsg.msg}
          </p>
          <button
            type="submit"
            className="btn btn-neutral btn-xs sm:btn-sm md:btn-md mt-8"
          >
            Submit
          </button>

          <input type="hidden" name="_subject" value="YMA Submission"></input>
        </form>
      </div>

      <div className=" py-20 w-full flex justify-center items-center">
        <div className="">
          <Fade triggerOnce>
            <p className="font-bold text-3xl lg:text-4xl text-center">OR</p>
            <div className="divider"></div>

            <p className="text-xl">
              <b>Email: </b>yatesmartialarts@gmail.com
            </p>
            <p className="text-xl mt-3">
              <b>Mobile: </b>07720263984
            </p>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default JoinContact;

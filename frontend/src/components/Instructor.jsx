import { Link, useParams } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Portait from "../assets/portrait.jpeg";

function Instructor() {
  const instructorDetails = {
    "luke-yates": {
      id: 1,
      fullname: "Sensei Luke Yates",
      image: Portait,
      bio: "Sensei Luke has trained relentlessly since the age of 11 achieving a 1st Dan black belt in both karate and kickboxing. Luke has represented England for over 7 years in karate competing in both kata and kumite, achieving a bronze medal in individual senior kumite at the 2023 World championships alongside multiple World, European and national medals. Luke has been instructing for the past 7 years and has coached various England athletes at international tournaments. Having studied Sport and Exercise for Health at university, Luke is an highly qualified instructor with qualifications in sports nutrition, sports massage and is a level 3 qualified personal trainer. Luke utilises both his martial arts experience and education to enhance the quality of his teaching to ensure that his students receive the best coaching and training possible",
      achievements: [
        "Karate 1st Dan",
        "Kickboxing 1st Dan ",
        "England International",
        "Emergency First Aid Qualification",
        "Fully Insured",
        "Enhanced DBS Check",
        "Level 2 Gym Instructor",
        "Level 3 Personal Trainer",
        "BSc (Hons) Sport and Exercise for Health",
      ],
      national_titles: [
        "UWK English Championships Individual Kata Bronze Medalist, 2017",
        "European Tour Individual Kumite Bronze Medalist, 2022",
        "British Championships Team Kumite Bronze Medalist, 2023",
        "GB Open Team Kata Bronze Medalist, 2021, 2022",
        "GB Open Team Kumite Bronze Medalist, 2021, 2023",
        "GB Open Team Kumite Silver Medalist, 2023",
        "GB Open Individual Kumite Silver Medalist, 2022, 2023",
        "GB Open Individual Kumite Bronze Medalist, 2023",
      ],
      international_titles: [
        "Senior Team Kumite Silver Medalist, WUKF World Championships, Florida 2022",
        "Junior Team Kumite Bronze Medalist, WUKF European Championships, Florence 2022",
        "Senior Team Kumite Bronze Medalist, WUKF European Championships, Florence 2022",
        "Senior Individual Kumite Bronze Medalist, WUKF World Championships, Dundee 2023",
      ],
    },
    "vicky-yates": {
      id: 2,
      fullname: "Sensei Vicky Yates",
      image: Portait,
      bio: "Sensei Vicky began training at the age of 19 in Shotokan karate. She then moved on to learn a different style of karate, Ishinryu and now has over 30 years of experience as a 3rd Dan black belt as well as achieving a 1st Dan black belt in kickboxing. Vicky has been competing at international level for over 8 years and became World champion in 2022 in the veterans individual kumite category as well as multiple World, European and national titles in both kata and kumite. Having coached top England athletes at international tournaments she has established herself as a top instructor and coach. In addition to her martial arts experience and achievements, Vicky is a qualified specialist teacher and councillor and is very experienced in teaching children with special educational and additional needs.",
      achievements: [
        "Karate 3rd Dan",
        "Kickboxing 1st Dan",
        "England International",
        "Emergency First Aid Qualification",
        "Fully Insured",
        "Enhanced DBS Check",
        "Qualified Teacher",
        "Mindfulness Qualification",
        "Qualified Child and Adolescent Counsellor",
        "British Sign Language Qualification",
        "Specialist Training in Special Educational Needs",
      ],
      national_titles: [
        "Isshinryu Kata Champion 1997, 1998",
        "EKF English Championships Team Kata Bronze Medalist, 2013",
        "EKF English Championships Individual Kumite Silver Medallist, 2014",
        "EKF English Championships Team Kata  Silver Medallist, 2014",
        "GB Open Team Kata Bronze Medalist, 2021",
        "GB Open Individual Kumite Silver Medalist, 2023",
        "GB Open Individual Kata Bronze Medalist, 2023",
        "GB Open Individual Kumite Bronze, 2023",
        "British Championships Individual Kata Silver Medalist, 2023",
        "British Championships Team Kumite Bronze Medalist, 2023",
      ],
      international_titles: [
        "Team Kumite Bronze Medallist, WUKF World Championships, Dublin 2016",
        "Individual Kumite Bronze Medallist, WUKF World Championships, Dundee 2018",
        "Individual Kumite Bronze Medallist, WUKF European Championships, Malta 2018",
        "Team Kumite Bronze Medallist, WUKF European Championships, Malta 2018",
        "Individual Kumite Silver Medalist, WUKF World Championships, Romania 2021",
        "Individual Kata Silver Medalist, WUKF World Championships, Romania 2021",
        "Individual Kumite Gold Medalist, World Championships, Florida 2022",
        "Individual Kumite Silver Medalist, WUKF European Championships, Florence 2022",
        "Team Kumite Silver Medalist, WUKF European Championships, Florence 2022",
        "Team Kumite Gold Medalist, WUKF World Championships, Dundee 2023",
        "Individual Kumite Bronze Medalist, WUKF World Championships, Dundee 2023",
      ],
    },
    "lucy-yates": {
      id: 3,
      fullname: "Sensei Lucy Yates",
      image: Portait,
      bio: "Sensei Lucy began training when she was 8, achieving her 1st Dan black belt in both karate andkickboxing. Lucy is also a very successful competitor in karate and became World, European and British champion in Inclusive kata and combat in 2022. Specialising in Shito-ryu Lucy currently represents England in Shitoryu kata and placed 6th in the World championships in 2023. Lucy has a wealth of experience having represented her country for over 6 years worldwide. Her achievements are inspirational as she has chronic health conditions that she overcomes, making her an incredibly patient and inspirational instructor with great attention to detail.",
      achievements: [
        "Karate 1st Dan",
        "Kickboxing 1st Dan",
        "England International",
        "Fully Insured",
        "Enhanced DBS Check",
        "Emergency First Aid Qualification",
      ],
      national_titles: [
        "GB Open Inclusive Kata Gold Medalist, 2022",
        "British Championships Inclusive Combat Gold Medalist, 2023",
        "British Championships Individual Kata Bronze Medalist, 2023",
      ],
      international_titles: [
        "Inclusive Kata Gold Medalist, WUKF World Championships, Florida 2022",
        "Inclusive Combat Gold Medalist, WUKF World Championships, Florida 2022",
        "Inclusive Kata Gold Medalist, WUKF European Championships, Florence 2023",
        "Inclusive Combat Gold Medalist, WUKF European Championships, Florence 2023",
      ],
    },
  };

  const { name } = useParams();
  const selectedInstructor = instructorDetails[name];

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center bg-sky-100 py-12">
        <div className="w-10/12 lg:w-1/2 bg-white p-6 my-8 rounded-xl shadow-lg">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="lg:border-r-2 p-2 lg:p-6">
              <Fade triggerOnce>
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl md:text-5xl font-semibold">
                    {selectedInstructor.fullname}
                  </h1>
                  <Link to="/instructors">
                    <button className="btn border border-gray-400 hover:border-gray-400 w-16 md:w-24">
                      Back
                    </button>
                  </Link>
                </div>
                <p>{selectedInstructor.bio}</p>
              </Fade>
            </div>
            <img
              src={selectedInstructor.image}
              alt="Headshot of instructor"
              className="rounded-full p-6"
            />
          </div>
        </div>

        <div className="w-10/12 lg:w-1/2 bg-white p-6 my-8 rounded-xl shadow-lg flex justify-between">
          <div>
            <Fade triggerOnce>
              <h3 className="text-2xl font-medium mb-1">
                Achievements & Qualifications
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {selectedInstructor.achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Fade>
          </div>
        </div>

        <div className="w-10/12 lg:w-1/2 bg-white p-6 my-8 rounded-xl shadow-lg flex flex-col lg:flex-row gap-8 justify-between">
          <div>
            <Fade triggerOnce>
              <h3 className="text-2xl font-medium mb-1 ">National Titles</h3>
              <ul>
                {selectedInstructor.national_titles.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Fade>
          </div>

          <div>
            <Fade triggerOnce>
              <h3 className="text-2xl font-medium mb-1">
                International Titles
              </h3>
              <ul>
                {selectedInstructor.international_titles.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default Instructor;

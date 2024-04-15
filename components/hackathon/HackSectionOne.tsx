"use client";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Link from "next/link";
import "./hack.css";
import FaqElement from "./FaqElement";

const HackSectionOne = () => {
    return (
      <>
        <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="Proxmed-LPU Hackathon"
                paragraph="
                Welcome to the Proxmed-LPU Hackathon on AI in Healthcare organized by IEEE-CIS-LPU. This rulebook outlines the guidelines, procedures, and expectations for the hackathon participants."
                mb="44px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="Why Participate?"
                paragraph="
                By joining the Proxmed-LPU Hackathon on AI in Healthcare, participants will:"
                mb="44px"
              />
              <ul style={{listStyleType: "disc", marginLeft: "15px"}}>
                <li style={{color: "gray"}}><p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">Engage with cutting-edge NLP technology in a healthcare context.</p></li>
                <li style={{color: "gray"}}><p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">Collaborate with like-minded peers and industry experts.</p></li>
                <li style={{color: "gray"}}><p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">Enhance problem-solving skills and gain practical experience.</p></li>
                <li style={{color: "gray"}}><p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">Have an opportunity for foreign internships for standout participants.</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="Important Dates"
                paragraph="
                Last Date for Registration:15th August 2023
                Hackathon Date: 19th August to 28th August"
                mb="44px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="Hackathon Theme"
                paragraph="
                The hackathon theme is NLP in Healthcare. Participants are expected to leverage natural language processing techniques to address challenges within the healthcare domain."
                mb="44px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="Hackathon Mode"
                paragraph="
                The hackathon will be conducted online in a non-proctored mode to ensure flexibility and accessibility for all participants."
                mb="44px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="Registration Steps"
                paragraph=""
                mb="44px"
              />
            </div>
            <section>
        <div className="register-button align-items-center my-5 flex justify-center  md:my-14 lg:md:my-12">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSfpob2hs64r794W3xgMit56ebHVLwSm_5HWmFFwFK7gllJ1ow/viewform"
            target="blank"
            className="floating rounded-md bg-yellow py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-yellow/80"
          >
            Register Now
          </Link>
        </div>

        <div className="timeline">
          {/* <!-- 1 --> */}
          <div className="container1 left-container">
            <img src="./resources/js.png" alt="" />
            <div className="text-box">
                <button
                  type="button"
                  className="text-style m-1 mx-2 w-full rounded-full px-8  py-5 font-semibold  hover:animate-pulse"
                >
                  <u>Registration</u> <br />
                  Register yourself for the hackathon by following the provided link.{" "}
                </button>
              <br />
              <span className="left-container-arrow"></span>
            </div>
          </div>

          {/* <!-- 2 --> */}
          <div className="container1 right-container">
            <img src="./resources/js.png" alt="" />
            <div className="text-box">
                <button
                  type="button"
                  className="text-style bg-gray-900 text-gray-800 hover:bg-violet-800 m-1 my-3  w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  <u>Problem Statement</u> <br />
                  Once registered, you will receive access to the problem statement related to NLP in healthcare.{" "}
                </button>
              <br />
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container1 left-container">
            <img src="./resources/js.png" alt="" />
            <div className="text-box" id="big-text">
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 mx-2 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  <u>Project Development</u> <br />
                  - Develop your solution by working on the problem statement. <br />
- Create a GitHub repository for your project and maintain a well-structured codebase.<br />
- Collaborate with your team members (if applicable) to ensure a comprehensive solution.<br />
- Merge your project's code and relevant files on GitHub, including a detailed README file.

                </button>
              <br />
              <span className="left-container-arrow"></span>
            </div>
          </div>

          {/* <!-- 3 --> */}
          <div className="container1 right-container">
            <img src="./resources/js.png" alt="" />
            <div className="text-box">
                <button
                  type="button"
                  className="text-style bg-gray-900 text-gray-800 hover:bg-violet-800 m-1 my-3  w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  <u>Video Presentation</u> <br />
                  - Create a video presentation that explains your project's concept, architecture, and key features.<br />
- The video should be concise and highlight the unique aspects of your solution.<br />
- Video duration should not exceed [specified duration].

                </button>
              <br />
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container1 left-container">
            <img src="./resources/js.png" alt="" />
            <div className="text-box">
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 mx-2 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  <u>PowerPoint Presentation</u> <br />
                  - Prepare a PowerPoint presentation (PPT) that complements your video presentation.<br />
- The PPT should cover the problem, solution approach, technical details, and potential impact of your project.

                </button>
              <br />
              <span className="left-container-arrow"></span>
            </div>
          </div>

          {/* <!-- 4 --> */}
          <div className="container1 right-container">
            <img src="./resources/js.png" alt="" />
            <div className="text-box">
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 my-3 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  <u>Evaluation</u><br />
                  - Submissions will be evaluated based on creativity, technical depth, relevance to the theme, and potential real-world impact.<br />
- A panel of judges, including industry experts, will review and score each submission.

                </button>
              {" "}
              <br />
              <span className="right-container-arrow"></span>
            </div>
          </div>
        </div>
      </section>
          </div>
        </div>
      </div>
    </section>

    

      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="Phase 1: Hackathon (Competition and Analysis by LPU)"
                paragraph="During this phase, participants engage in a competitive hackathon focused on AI in Healthcare. They receive a problem statement related to NLP in healthcare, develop innovative solutions, and submit their projects, along with video and PowerPoint presentations. LPU evaluates all submissions and shortlists 5-6 outstanding projects based on factors like creativity, technical depth, relevance, and potential impact."
                mb="44px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="Phase 2: Result Analysis by Australian Company"
                paragraph="After the hackathon, shortlisted projects undergo evaluation by an Australian healthcare and AI company. This company, with expertise in the field, directly assesses the projects based on alignment with industry needs, scalability, and innovation. They provide their analysis and insights to the organizers, highlighting projects that resonate strongly with their goals and requirements."
                mb="44px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="Phase 3: Hired for the Internship"
                paragraph="In this final phase, participants whose projects strongly align with the Australian company's interests may receive an exceptional opportunity. If shortlisted, they may be approached by the company for potential internship offers. This could involve interviews or discussions to gauge the fit between the participants' skills, project contributions, and the company's requirements. The Australian company ultimately makes internship decisions based on these interactions and the participants' potential to contribute to their initiatives in healthcare and AI.



                These three phases collectively provide a comprehensive journey for participants to showcase their skills, innovation, and potential impact on AI in healthcare, with the potential to transition from a hackathon project to a real-world career opportunity.
                "
                mb="44px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="Hackathon Code of Conduct"
                paragraph="We are committed to providing a positive and inclusive experience for all participants in the Proxmed-LPU Hackathon on AI in Healthcare. This code of conduct outlines the standards of behavior and expectations we hold for all participants, ensuring a respectful and collaborative environment throughout the event.
                "
                mb="44px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="Respect and Inclusivity"
                paragraph=""
                mb="44px"
              />
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Treat Everyone with Respect:</h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">Treat all participants, organizers, judges, and sponsors with respect and kindness. Harassment, discrimination, or derogatory language will not be tolerated.</p><br />
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Inclusive Language:</h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">Use inclusive and respectful language in all interactions. Avoid offensive or inappropriate remarks based on race, gender, ethnicity, religion, disability, or any other personal characteristic.</p><br />
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Diverse Perspectives:</h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">Embrace diverse perspectives and experiences. We encourage an environment that values and appreciates differences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="Collaboration and Fair Play"
                paragraph=""
                mb="44px"
              />
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Teamwork:</h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">If participating in teams, work collaboratively and value each team member's contributions. Maintain open communication and share credit for achievements.</p><br />
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Original Work:</h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">All work submitted, including code, documentation, and presentations, should be original and created during the hackathon. Plagiarism is strictly prohibited.</p><br />
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Honesty:</h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">Be honest and transparent in all your interactions. If you seek help from external sources, acknowledge them appropriately in your submissions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="Professionalism"
                paragraph=""
                mb="44px"
              />
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Professional Conduct:</h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">Maintain professionalism in all communications, whether written or verbal. Personal attacks, offensive language, and disruptive behavior are unacceptable.</p><br />
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Timeliness:</h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">Adhere to deadlines for submission, presentations, and any other required activities. Punctuality shows respect for others' time.</p><br />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="Safety and Well-being"
                paragraph=""
                mb="44px"
              />
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Physical and Emotional Safety:</h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">Ensure the physical and emotional safety of all participants. If you notice someone uncomfortable or distressed, offer assistance or report it to the organizers.</p><br />
              <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">Privacy and Consent:</h3>
              <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">Respect the privacy and consent of others. Do not share personal information without permission.</p><br />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="Reporting Violations"
                paragraph="If you witness or experience any violations of this code of conduct, please report them to the organizers immediately. All reports will be handled confidentially and with utmost seriousness.

                "
                mb="44px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="Consequences of Violation"
                paragraph="Violations of this code of conduct may result in actions, including but not limited to warnings, disqualification from the hackathon, or being prohibited from participating in future events organized by us.
                "
                mb="44px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="General Guidelines"
                paragraph=""
                mb="44px"
              />
              <ul style={{listStyleType: "disc", marginLeft: "15px"}}>
                <li style={{color: "gray"}}><SectionTitle
                title=""
                paragraph="Participants are expected to maintain the highest standards of integrity and avoid any form of plagiarism."
                mb="44px"
              /></li>
                <li style={{color: "gray"}}><SectionTitle
                title=""
                paragraph="Teams are allowed, with a maximum team size of 3."
                mb="44px"
              /></li>
                <li style={{color: "gray"}}><SectionTitle
                title=""
                paragraph="Each participant/ team is responsible for their own hardware, software, and internet connectivity."
                mb="44px"
              /></li>
                <li style={{color: "gray"}}><SectionTitle
                title=""
                paragraph="Ensure that your project is original, ethical, and adheres to data privacy standards."
                mb="44px"
              /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="Prizes"
                paragraph="Details about the prizes and awards will be communicated separately."
                mb="44px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="Contact Information"
                paragraph="For any queries or concerns, feel free to reach out to us at ieeecislpu@gmail.com."
                mb="44px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title=""
                paragraph="We wish you the best of luck in the Proxmed-LPU Hackathon on AI in Healthcare. Let your creativity and skills shine as you work towards innovative solutions for the healthcare industry using NLP technology! ."
                mb="44px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center justify-center">
            <div className="w-full px-4 lg:w-1/2" style={{marginTop: "10px"}}>
              <SectionTitle
                title="FAQs"
                paragraph="
                "
                mb="44px"
              />
              <FaqElement question="Do I need to pay any money to register for the Hackathon?" answer="No. You do not have to pay anything to anyone to register yourself for The hackathon." /><br />
              <FaqElement question="Do I need to have any specific qualifications to be a participant for the Hackathon?" answer="If you love to code, you are more than welcome to participate in the Hackathon." /><br />
              <FaqElement question="How do I submit what I have made for the Hackathon?" answer="You have to solve the problem Statement and submit the source code on  your Github Repository ." /><br />
              <FaqElement question="Do we need to have the entire idea fully working?" answer="The entire idea need not be fully implemented however, the submission should be functional so that it can be reviewed by the judges." /><br />
              <FaqElement question="Does one have to be online and available for the entire duration of the Hackathon?" answer="You can develop the application on your local system based on the given themes and then submit it " /><br />
              <FaqElement question="Do I need to give a demo for the product that I have built?" answer="You have to submit a small presentation and video that demos your submission and upload it wherever it was instructed." />
             
            </div>
          </div>
        </div>
      </div>
    </section>
      </>
    );
};

export default HackSectionOne;
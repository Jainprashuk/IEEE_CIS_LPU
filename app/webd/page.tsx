import Link from "next/link";
import "./web.css";
import Breadcrumb from "@/components/Common/Breadcrumb";

const SigninPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Web Roadmap"
        description="Empowering User Experiences with captivating HTML, CSS, and JavaScript with projects that mesmerize and engage"
      />
      <section>
      <div className="register-button overflow align-items-center my-5 flex flex-col md:flex-row justify-center md:my-14 lg:md:my-12">
  <Link
    href="https://docs.google.com/forms/d/e/1FAIpQLSdN3saPsv5mIa-3FTjjFnSlkwZpnZvJC3S_4C0--KceN0rs_Q/viewform?usp=sf_link"
    target="blank"
    className="floating rounded-md bg-yellow py-4 m-5 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-yellow/80"
  >
    Register Now
  </Link>
  <Link
    href="\webProjects"
    target="blank"
    className="floating rounded-md m-5 bg-yellow py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-yellow/80"
  >
    Contribute In Projects
  </Link>
  <Link
    href="\documentation"
    target="blank"
    className="floating  rounded-md m-5 bg-yellow py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-yellow/80"
  >
    Tools And Pluggins
  </Link>
</div>


        <div className="timeline">
          {/* <!-- 1 --> */}
          <div className="container1 left-container">
            <img src="./resources/js.png" alt="" />
            <div className="text-box">
              <a
                href="./resources/roadmaps/WebRoadmap.pdf"
                download="WebRoadmap.pdf"
              >
                <button
                  type="button"
                  className="text-style m-1 mx-2 w-full rounded-full px-8  py-5 font-semibold  hover:animate-pulse"
                >
                  HTML: The Gateway to Extraordinary Web Experiences{" "}
                </button>
              </a>
              <br />
              <span className="left-container-arrow"></span>
            </div>
          </div>

          {/* <!-- 2 --> */}
          <div className="container1 right-container">
            <img src="./resources/js.png" alt="" />
            <div className="text-box">
              <a
                href="./resources/roadmaps/WebRoadmap.pdf"
                download="WebRoadmap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-900 text-gray-800 hover:bg-violet-800 m-1 my-3  w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  CSS: Revolutionizing Web Aesthetics and User Interface{" "}
                </button>
              </a>
              <br />
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container1 left-container">
            <img src="./resources/js.png" alt="" />
            <div className="text-box">
              <a
                href="./resources/roadmaps/WebRoadmap.pdf"
                download="WebRoadmap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 mx-2 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  2 Projects Based On Html And Css
                </button>
              </a>
              <br />
              <span className="left-container-arrow"></span>
            </div>
          </div>

          {/* <!-- 3 --> */}
          <div className="container1 right-container">
            <img src="./resources/js.png" alt="" />
            <div className="text-box">
              <a
                href="./resources/roadmaps/WebRoadmap.pdf"
                download="WebRoadmap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-900 text-gray-800 hover:bg-violet-800 m-1 my-3  w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  Tailwind / Bootstrap : Streamlining Web Development with
                  Ready-to-Use Elements
                </button>
              </a>
              <br />
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container1 left-container">
            <img src="./resources/js.png" alt="" />
            <div className="text-box">
              <a
                href="./resources/roadmaps/WebRoadmap.pdf"
                download="WebRoadmap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 mx-2 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  2 Projects Based On Tailwind/bootstrap
                </button>
              </a>
              <br />
              <span className="left-container-arrow"></span>
            </div>
          </div>

          {/* <!-- 4 --> */}
          <div className="container1 right-container">
            <img src="./resources/js.png" alt="" />
            <div className="text-box">
              <a
                href="./resources/roadmaps/WebRoadmap.pdf"
                download="WebRoadmap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 my-3 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  JavaScript: Powering the Web with Seamless Interactivity
                </button>
              </a>{" "}
              <br />
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container1 left-container">
            <img src="./resources/js.png" alt="" />
            <div className="text-box">
              <a
                href="./resources/roadmaps/WebRoadmap.pdf"
                download="WebRoadmap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 mx-2 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  2 Projects Based On Html , Css And js
                </button>
              </a>
              <br />
              <span className="left-container-arrow"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SigninPage;

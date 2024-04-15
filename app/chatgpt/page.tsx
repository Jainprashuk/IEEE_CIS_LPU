import Link from "next/link";
import "./android.css";
import Breadcrumb from "@/components/Common/Breadcrumb";

const SigninPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="ChatGpt Bootcamp"
        description="
        Join our immersive 2-day bootcamp on ChatGPT and Real-Life Uses! Master ChatGPT's power in personal assistance, language learning, creative writing, problem solving, and ethics. Build a ChatGPT-driven task manager for practical experience. Unleash AI's potential responsibly.
        "
      />
      <section>
        <div className="register-button align-items-center my-5 flex  justify-center md:my-14 lg:md:my-12">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSe5q171lDEgKM6297Cz9zBb628MaYZqOwMTGUTc7jtC50fzyA/viewform?usp=sf_link"
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
              <a
                href=""
                // download=""
              >
                <button
                  type="button"
                  className="text-style m-1 mx-2 w-full rounded-full px-8  py-5 font-semibold  hover:animate-pulse"
                >
                  Understanding ChatGPT
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
                href=""
                // download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-900 text-gray-800 hover:bg-violet-800 m-1 my-3  w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  ChatGPT for Personal Assistance{" "}
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
                href=""
                // download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 mx-2 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  ChatGPT for Language Translation and Learning
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
                href=""
                // download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-900 text-gray-800 hover:bg-violet-800 m-1 my-3  w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  ChatGPT for Creative Writing and Content Generation
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
                href=""
                // download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 mx-2 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  ChatGPT for Problem Solving and Decision Making
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
                href=""
                // download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 my-3 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  Responsible Use of ChatGPT and Ethical Considerations
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
                href=""
                // download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 mx-2 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  Real-Life Project: Building a ChatGPT-Powered Task Manager
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
                href=""
                // download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 my-3 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  Conclusion and Future of ChatGPT
                </button>
              </a>{" "}
              <br />
              <span className="right-container-arrow"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SigninPage;

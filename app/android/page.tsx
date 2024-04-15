import Link from "next/link";
import "./android.css";
import Breadcrumb from "@/components/Common/Breadcrumb";

const SigninPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Android Roadmap"
        description="Welcome to the Android Development Bootcamp! Our comprehensive bootcamp is designed to take you from a beginner to an intermediate level in Android app development. Below is an outline of the content we will cover throughout the course:"
      />
      <section>
        <div className="register-button align-items-center my-5 flex  justify-center md:my-14 lg:md:my-12">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSeHRbq9wA2X54f6XyzWSB9TZ7PxYarC8vt3JXox3FEn_tenXQ/viewform?usp=sf_link"
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
                href="./resources/roadmaps/AndroidContent.pdf"
                download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style m-1 mx-2 w-full rounded-full px-8  py-5 font-semibold  hover:animate-pulse"
                >
                  Introduction to Android Development
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
                href="./resources/roadmaps/AndroidContent.pdf"
                download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-900 text-gray-800 hover:bg-violet-800 m-1 my-3  w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  Getting Started with Android Studio{" "}
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
                href="./resources/roadmaps/AndroidContent.pdf"
                download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 mx-2 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  Activities and Intents
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
                href="./resources/roadmaps/AndroidContent.pdf"
                download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-900 text-gray-800 hover:bg-violet-800 m-1 my-3  w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  User Interface (UI) Development
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
                href="./resources/roadmaps/AndroidContent.pdf"
                download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 mx-2 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  Lists and Adapters
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
                href="./resources/roadmaps/AndroidContent.pdf"
                download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 my-3 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  Fragments
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
                href="./resources/roadmaps/AndroidContent.pdf"
                download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 mx-2 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  Data Storage and Persistence
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
                href="./resources/roadmaps/AndroidContent.pdf"
                download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 my-3 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  Networking and API Integration
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
                href="./resources/roadmaps/AndroidContent.pdf"
                download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 mx-2 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  Working with Media
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
                href="./resources/roadmaps/AndroidContent.pdf"
                download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 my-3 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  Background Tasks and Services
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
                href="./resources/roadmaps/AndroidContent.pdf"
                download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 mx-2 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  Notifications
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
                href="./resources/roadmaps/AndroidContent.pdf"
                download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 my-3 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  App Deployment
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
                href="./resources/roadmaps/AndroidContent.pdf"
                download="AndroidRoadMap.pdf"
              >
                <button
                  type="button"
                  className="text-style bg-gray-100 text-gray-800 hover:bg-violet-800 m-1 mx-2 w-full rounded-full px-8 py-5 font-semibold hover:animate-pulse"
                >
                  Additional Topics
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

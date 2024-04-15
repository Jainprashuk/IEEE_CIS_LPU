
import Image from "next/image";
const AboutSectionTwo = () => {
    return (
      <>
      
      <div className="hello px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                About LPU
                <br className="hidden md:block" />
                
                
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              Lovely Professional University has a mammoth ultra modern campus sprawling over more than 600 acres of land on the National Highway No.1 at the entry of Jalandhar City. It is the largest single campus university in India, with more than 25000 students, 3500 faculty and staff, offering more than 200 programmes.

The University is recognized by University Grant Commission (UGC) and is member of coveted Association of Indian Universities (AIU).  With internationally benchmarked curricula, innovative pedagogy, experiential learning, and 35+ foreign tie-ups for equitable and affordable quality education, the University is poised to establish itself as a Centre of Excellence in Research.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              {/* <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 "
                src="/resources/lpu3.png"
                alt="lpu_picture"
              /> */}
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40 "
                src="/resources/lpu2.jpeg"
                alt="lpu_picture"
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 "
                src="/resources/lpu1.jpeg"
                alt="lpu_picture"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                About IEEE
                <br className="hidden md:block" />
                
                
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community through its highly cited publications, conferences, technology standards, and professional and educational activities.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="/resources/ieee.jpg"
                alt="IEEE_picture"
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="/resources/ieee2.jpg"
                alt="IEEE_picture"
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="/resources/ieee3.png"
                alt="IEEE_picture"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                About IEEE CIS LPU
                <br className="hidden md:block" />
                
                
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              The IEEE Computational Intelligence Society (CIS) is a global community dedicated to advancing the field of computational intelligence. At Lovely Professional University's School of Computer Science and Engineering (CSE), the IEEE CIS plays a crucial role in fostering innovation and promoting knowledge exchange. Through its vast network and resources, the IEEE CIS enriches the learning experience of students and faculty, providing opportunities for staying updated with the latest advancements, participating in workshops and seminars, and engaging in cutting-edge research projects.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8">
            <div className="flex flex-col items-end px-3">
              {/* <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-32 sm:w-48 xl:w-96 "
                src="/resources/ieeelpu1.png"
                alt=""
              /> */}
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="/resources/ieee2.jpg"
                alt="IEEE_picture"
              />
            </div>
            <div className="px-3">
            <Image
                  src="/resources/IEE CIS WHITE.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/resources/blackk.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />
            </div>
          </div>
        </div>
      </div>
      
      </>
    );

};

export default AboutSectionTwo;

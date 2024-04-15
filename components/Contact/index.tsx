

const Contact = () => {
  return (
    <div className="container mx-auto md:px-6">
      <section className="text-center">
        <div className="md:px-12">
          <div className="container mx-auto">
            <div className="grid items-center lg:grid-cols-2">
              <div className="md:mt-12 lg:mt-0 lg:mb-0">
                <div className="relative z-1 block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                  <h2 className="mb-2 text-3xl font-bold">Contact us</h2>
                  <h1>For Any Queries Mail Us At</h1>
                  <a className="text-primary" href="mailto:ieee.cis.lpu@gmail.com"><p>ieee.cis.lpu@gmail.com</p></a>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <div className="relative h-[300px] rounded-lg shadow-lg dark:shadow-black/20">
                  <iframe
                    src="https://maps.google.com/maps?q=Lovely%20Professional%20University%2C%20Punjab%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="absolute left-0 top-0 h-full w-full rounded-lg"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /><br />
    </div>

  );
};

export default Contact;



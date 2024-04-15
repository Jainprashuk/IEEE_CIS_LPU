const Form = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 a mx-auto max-w-4xl rounded-md bg-white p-6 shadow-md dark:bg-dark">
        <h2 className="text-gray-700 text-lg font-semibold capitalize dark:text-white">
          Registration Form
        </h2>

        <form>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="fullname"
              >
                Full Name
              </label>
              <input
                id="fullname"
                type="text"
                className="text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 mt-2 block w-full rounded-md border bg-white px-4 py-2 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="emailAddress"
              >
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                className="text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 mt-2 block w-full rounded-md border bg-white px-4 py-2 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="registrationNumber"
              >
                Registration Number
              </label>
              <input
                id="registrationNumber"
                type="text"
                className="text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 mt-2 block w-full rounded-md border bg-white px-4 py-2 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="number"
                className="text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 mt-2 block w-full rounded-md border bg-white px-4 py-2 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="currentlyInYear"
              >
                Currently in which year?
              </label>
              <div className="mt-2">
                <div className="block">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="currentlyInYear"
                      value="year1"
                      className="text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 mr-2"
                    />
                    Year 1
                  </label>
                </div>
                <div className="block">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="currentlyInYear"
                      value="year2"
                      className="text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 mr-2"
                    />
                    Year 2
                  </label>
                </div>
                <div className="block">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="currentlyInYear"
                      value="year3"
                      className="text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 mr-2"
                    />
                    Year 3
                  </label>
                </div>
                <div className="block">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="currentlyInYear"
                      value="year4"
                      className="text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 mr-2"
                    />
                    Year 4
                  </label>
                </div>
                <div className="block">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="currentlyInYear"
                      value="year5"
                      className="text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 mr-2"
                    />
                    Any Other
                  </label>
                </div>
              </div>
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="department"
              >
                Department ( ex:CSE )
              </label>
              <input
                id="department"
                type="text"
                className="text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 mt-2 block w-full rounded-md border bg-white px-4 py-2 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="active:bg-yellow/2 rounded-xl bg-yellow px-8 py-2 hover:bg-yellow/90">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Form;

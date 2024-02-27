const Banner = () => {
  return (
    <section className="w-11/12 mx-auto flex flex-col lg:flex-row gap-7 mt-5 md:mt-8 lg:mt-12">
      <div className="lg:w-2/5 flex justify-center items-center">
        <img
          src="/src/asserts/1.png"
          alt=""
          className="w-1/2 lg:w-full lg:h-full"
        />
      </div>
      <div className="w-auto">
        <h2 className="font-medium text-2xl">
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h2>
        <ul className="list-disc ml-10 mt-2 text-black">
          <li>
            C.R.I&apos;s energy efficient products are well recognized by
            various Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 Star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <div className="px-10 py-5">
          <img
            src="/src/asserts/2.png"
            alt=""
            className="w-full lg:h-[550px]"
          />
        </div>
        <p className="mb-5">
          Government of India has awarded the{" "}
          <span className="font-semibold">
            &quot;National Energy Conservation Award 2018&ldquo;
          </span>
          . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
          the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
          Kumar Singh, Honorable Minister of State.
        </p>
      </div>
    </section>
  );
};

export default Banner;

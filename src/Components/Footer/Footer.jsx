import { HiPhone } from "react-icons/hi";

const Footer = () => {
  return (
    <section className="bg-red-600 pt-5 md:pt-8 pb-8 md:pb-10 lg:pb-12">
      <div className="w-11/12 md:w-4/5 mx-auto  flex justify-between">
        <div className="flex items-center gap-3">
          <HiPhone className="text-red-600 rounded-full bg-white"></HiPhone>
          <h1 className="text-white">Toll Free 1800 200 1234</h1>
        </div>
        <div className="flex items-center gap-3">
          <HiPhone className="text-red-600 rounded-full bg-white"></HiPhone>
          <h1 className="text-white">Toll Free 1800 200 1234</h1>
        </div>
        <div className="flex items-center gap-3">
          <HiPhone className="text-red-600 rounded-full bg-white"></HiPhone>
          <h1 className="text-white">Toll Free 1800 200 1234</h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;

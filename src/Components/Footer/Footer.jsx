import { HiPhone } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";

const Footer = () => {
  return (
    <section className="bg-red-600 pt-5 md:pt-8 pb-8 md:pb-10 lg:pb-12">
      <div className="w-11/12 md:w-4/5 mx-auto  flex justify-between">
        <div className="flex items-center gap-3">
          <p className="bg-white rounded-full px-1 py-1">
            <HiPhone className="text-red-600 rounded-full "></HiPhone>
          </p>
          <h1 className="text-white">Toll Free 1800 200 1234</h1>
        </div>
        <div className="flex items-center gap-3">
          <p className="bg-white rounded-full px-1 py-1">
            <FaFacebookF className="text-red-600 rounded-full "></FaFacebookF>
          </p>
          <h1 className="text-white">www.facebook.com/cripumps</h1>
        </div>
        <div className="flex items-center gap-3">
          <p className="">
            <TfiWorld className="text-white rounded-full text-2xl"></TfiWorld>
          </p>
          <h1 className="text-white">www.crigroups.com</h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;

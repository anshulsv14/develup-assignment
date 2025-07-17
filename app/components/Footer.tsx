import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0D111D] text-gray-400 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        <div>
          <h1 className="text-2xl font-bold text-white">
            Devel<span className="text-indigo-500">Up</span>
          </h1>
          <p className="mt-4 leading-relaxed">
            Empowering careers through AI-powered connections and verified skill
            development.
          </p>

          <div className="flex gap-4 mt-4 text-lg text-white">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>

          <p className="mt-6 text-xs text-gray-500">
            © 2025 DevelUp Technologies Pvt Ltd
          </p>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-3">Company</h2>
          <ul className="space-y-2 mb-6">
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              About Us
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              Careers
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              Press
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              Contact
            </li>
          </ul>

          <h2 className="text-white font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              Terms
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              Privacy
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              Careers
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              Contact Us
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-3">Popular Jobs</h2>
          <ul className="space-y-2 mb-6">
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              Software Engineer
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              Data Scientist
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              Product Manager
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              UI/UX Designer
            </li>
          </ul>

          <h2 className="text-white font-semibold mb-3">Contact</h2>
          <div className="flex items-center gap-2">
            <MdEmail />
            <span className="hover:text-blue-500 cursor-pointer transition duration-300">
              hello@develup.in
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <MdLocationOn />
            <span>Bengaluru, India</span>
          </div>
        </div>

        <div>
          <h2 className="text-white font-semibold mb-3">Support</h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              Help Center
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              Privacy Policy
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              Terms of Service
            </li>
            <li className="hover:text-blue-500 cursor-pointer transition duration-300">
              Cookie Policy
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

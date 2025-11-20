import Title from "../components/Title";
import { assets } from "../assets/assets";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NewsLetter from "@/components/NewsLetter";

const Contact = () => {
  return (
    <div className="px-4 md:px-20">
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row justify-center items-start gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px] rounded-lg shadow-md"
          src={assets.contact_us}
          alt="Contact Us"
        />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>

          <p className="text-gray-500">
            123 Pashupati Marg <br />
            Lazimpat, Kathmandu, Nepal
          </p>

          <p className="text-gray-500">
            Email: support@shoppy.com <br />
            Phone: +977 9812345678
          </p>

          <p className="font-semibold text-lg text-gray-600">
            Follow us on social media for the latest updates!
          </p>

          {/* social media icons */}
          <div className="flex gap-4 ">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-600 transition-colors"
            >
              <FacebookIcon fontSize="large" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              <TwitterIcon fontSize="large" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-500 transition-colors"
            >
              <InstagramIcon fontSize="large" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-700 transition-colors"
            >
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
      <NewsLetter/>
    </div>
  );
};

export default Contact;

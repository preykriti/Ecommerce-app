import NewsLetter from "@/components/NewsLetter";
import { assets } from "../assets/assets"
import Title from "../components/Title"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_us} />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Shoppy is a modern eCommerce platform built with the goal of
            delivering a smooth, fast, and enjoyable shopping experience.
            Whether you are browsing for your next favorite item or exploring
            new categories, Shoppy makes online shopping simple, intuitive, and
            accessible for everyone.
          </p>
          <p>
            Our mission is to provide high-quality products at competitive
            prices, while ensuring excellent customer service.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US?"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <h3 className="font-bold">Quality Products</h3>
          <p className="text-gray-600">
            We source our products from trusted suppliers to ensure quality and
            durability.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <h3 className="font-bold">Competitive Pricing</h3>
          <p className="text-gray-600">
            Our pricing strategy is designed to offer the best value for your
            money.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <h3 className="font-bold">Customer Support</h3>
          <p className="text-gray-600">
            Our support team is here to assist you with any inquiries or issues.
          </p>
        </div>
      </div>
      <NewsLetter/>
    </div>
  );
}

export default About
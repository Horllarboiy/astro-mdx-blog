import { th } from 'motion/react-client';
import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6';
import { IoClose } from "react-icons/io5";

const Faq = () => {
  const [firstList, setFirstList] = useState(false)
  const [secondList, setSecondList] = useState(false);
  const [thirdList, setThirdList] = useState(false);
   const [fourthList, setFourthList] = useState(false);
  const handleFirstList = () => {
    setFirstList((prev) => !prev)
  }
   const handleSecondList = () => {
     setSecondList((prev) => !prev);
  };
     const handleThirdList = () => {
       setThirdList((prev) => !prev);
  };
     const handleFourthList = () => {
       setFourthList((prev) => !prev);
     };
  return (
    <div className="flex lg:flex-row flex-col justify-between px-3 lg:px-0">
      <div className="flex flex-col lg:w-[45%] md:w-4/5">
        <h1 className="text-white font-bold text-4xl uppercase">Faqs</h1>
        <p>
          Discover answers to common questions about Noira's services and how we
          can assist you.
        </p>
        <a
          className="bg-white text-black px-3 py-2 mt-5 w-fit rounded-2xl"
          href="/"
        >
          Get in Touch
        </a>
      </div>
      <ul className="lg:w-[50%] mt-10 lg:mt-0">
        <li className="bg-[#111] p-6 rounded-xl">
          <h4 className="flex items-center text-white font-bold justify-between">
            <span className="text-base md:text-xl">
              What is digital marketing, and why is it important?
            </span>
            <span onClick={handleFirstList}>
              {firstList ? <IoClose /> : <FaPlus />}
            </span>
          </h4>
          <p
            className={`text-base text-[#b3b3b3] mt-4 ${
              firstList ? `flex` : `hidden`
            }`}
          >
            Digital marketing is the promotion of products or services using
            online channels like websites, social media, email, and search
            engines. It’s important because it helps businesses reach a broader
            audience, target specific demographics, and measure results in real
            time, often at a lower cost than traditional methods.
          </p>
        </li>
        <li className="bg-[#111] p-6 rounded-xl my-4">
          <h4 className="flex items-center text-white font-bold justify-between">
            <span className="text-base md:text-xl">
              How does SEO impact my business growth?
            </span>
            <span onClick={handleSecondList}>
              {firstList ? <IoClose /> : <FaPlus />}
            </span>
          </h4>
          <p
            className={`text-base text-[#b3b3b3] mt-4 ${
              secondList ? `flex` : `hidden`
            }`}
          >
            SEO, or Search Engine Optimization, improves your website’s
            visibility on search engines. By ranking higher for relevant
            keywords, you can attract more organic traffic, increase brand
            awareness, and drive conversions, which ultimately contributes to
            your business’s growth.
          </p>
        </li>
        <li className="bg-[#111] p-6 rounded-xl my-4">
          <h4 className="flex items-center text-white font-bold justify-between">
            <span className="text-base md:text-xl">
              What is the difference between organic and paid marketing?
            </span>
            <span onClick={handleThirdList}>
              {thirdList ? <IoClose /> : <FaPlus />}
            </span>
          </h4>
          <p
            className={`text-base text-[#b3b3b3] mt-4 ${
              thirdList ? `flex` : `hidden`
            }`}
          >
            A successful email marketing campaign involves personalized and
            segmented email lists, engaging subject lines, mobile-friendly
            designs, and clear call-to-action buttons. Regularly analyzing
            performance data helps optimize campaigns for better results over
            time.
          </p>
        </li>
        <li className="bg-[#111] p-6 rounded-xl my-4">
          <h4 className="flex items-center text-white font-bold justify-between">
            <span className="text-base md:text-xl">
              What makes a successful email marketing campaign?
            </span>
            <span onClick={handleFourthList}>
              {fourthList ? <IoClose /> : <FaPlus />}
            </span>
          </h4>
          <p
            className={`text-base text-[#b3b3b3] mt-4 ${
              fourthList ? `flex` : `hidden`
            }`}
          >
            Choosing the right digital marketing channels depends on your target
            audience and business goals. Social media is great for engagement
            and brand awareness, SEO and content marketing work well for
            long-term visibility, and email marketing is ideal for lead
            nurturing and retention. Assessing your audience and objectives will
            guide your decision.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Faq
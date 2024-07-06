import Profile from "../../assets/profile-pic.jpeg";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <section
      id="home"
      className="flex items-start flex-col justify-center pt-[150px] md:pt-[0] h-screen min-h-screen p-0 mx-auto my-0 max-w-[1000px] heroSection"
    >
      <div className="flex justify-center lg:justify-between gap-8 lg:gap-0 items-center relative flex-wrap-reverse w-full">
        <div className="flex flex-col items-center lg:items-start max-w-[45rem] lg:max-w-[30rem]">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-themeBlue text-clamp1 tracking-wider leading-loose font-mono font-normal ml-[2px]  sm:ml-[3px]"
          >
            Hi, my name is
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-clamp2 m-0 font-bold text-primaryText font-fontHeading"
          >
            Rohit Kumar.
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left text-clamp2 text-secondaryText font-bold font-fontHeading"
          >
            Front-End React Developer
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=" text-justify lg:text-left m-0 mt-[20px] text-secondaryText font-fontParagraph"
          >
            I am a passionate front-end developer specialized in building
            exceptional web apps from Uttar Pradesh, India 📍. I have a strong
            foundation in front-end & back-end development and am skilled inn
            creating user friendly and responsive web applications using react
            and its ecosystem.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-[50px}  py-[1rem] text-[14px] tracking-wide transition-all ease-in-out duratio-300 hover:-translate-x-1 hover:-translate-y-1 "
          >
            <a
              href={""}
              className={`font-mono text-themeBlue bg-transparent border border-themeBlue rounded-[4px] py-[10px] px-4 text-[14px] transition-all ease-in-out duration-300 hover:shadow-buttonShadow ${""}`}
            >
              Get in touch!
            </a>
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-[15rem] h-[15rem] sm:w-[18rem] sm:h-[18rem]"
        >
          <div
            className="w-full h-full rounded-custom animate-morph border border-textGreen bg-no-repeat"
            style={{
              backgroundImage: `url(${Profile})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          ></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Main;

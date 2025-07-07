import about from "../../assets/about.png";
import { skills } from "../../utilities/constant";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="my-[100px] md:my-0 mx-auto py-[100px] md:px-0 max-w-[900px]"
      initial={{ opacity: 0, y: 25 }}
      transition={{ delay: 0.5, duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-end relative mt-[10px] mb-[40px] mx-0 w-full whitespace-nowrap text-sectionHeading text-primaryText font-bold">
        <div className="hidden md:block w-full md:w-[200px] lg:w-[300px] h-[1px] bg-blue-400/20 relative top-[5px] mr-[20px] "></div>
        <span className="relative -bottom-1 text-themeBlue font-mono text-smallSize font-semibold mr-[10px]">
          02.
        </span>
        <h2 className="text-sectionHeading">About Me</h2>
        <div className="block md:hidden w-full h-[1px] bg-blue-400/20 relative top-[5px] ml-[10px] "></div>
      </div>
      <div className="flex justify-center lg:justify-between place-items-start gap-10 flex-wrap-reverse md:flex-nowrap">
        <div className="group w-full max-w-[300px] relative h-[340px]">
          <div className="absolute top-[14px] right-[14px] w-full h-[320px] border-2 border-themeBlue rounded-lg transition-all duration-200  group-hover:top-[24px] group-hover:right-[24px]"></div>
          <div className="block relative w-full bg-themeBlue  shadow-aboutShadow max-h-[400px] h-[320px] rounded-lg transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
            <div
              className="w-full h-full bg-no-repeat rounded-lg relative z-[1]  transition-all duration-300 mix-blend-multiply grayscale  group-hover:mix-blend-normal group-hover:filter-none"
              style={{
                backgroundImage: `url(${about})`,
                backgroundPosition: "center 25%",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
        <div className="text-secondaryText font-fontParagraph text-base md:text-justify w-full md:max-w-[350px] lg:max-w-[500px]">
          <p className="mb-3">
            Hello, I'm Rohit Sharma — Frontend Developer & Cybersecurity Enthusiast.

            I specialize in building high-performance web applications using React.js, Redux, and modern UI frameworks like Tailwind CSS. My experience spans developing AI-powered dashboards and scalable frontend systems that deliver real business value.
          </p>

          <p className="mb-3">
            Previously, I worked as a React Developer at NewFangled Vision, optimizing UI performance and delivering feature-rich analytics tools. I’m currently with Wipro as a Cybersecurity Analyst, focusing on Identity & Access Management (IDAM) and enterprise security frameworks.
          </p>
          <p className="mb-4">
            Technologies I enjoy working with:
          </p>
          <ul className="grid grid-cols-custom gap-x-3 overflow-hidden list-none">
            {skills &&
              skills.map((skill, i) => (
                <li key={i}>
                  <i className="text-themeBlue leading-3 mr-[7px]">▹</i>
                  {skill}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default About;

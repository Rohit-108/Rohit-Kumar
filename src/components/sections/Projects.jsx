import { motion } from "framer-motion";
import razorImg from "../../assets/razorImg.png"



const Projects = () => {
  return (
    <motion.section
      id="project"
      className=" mx-auto  md:px-0 max-w-container  lgl:px-20 py-24"
      initial={{ opacity: 0, y: 25 }}
      transition={{ delay: 0.5, duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-start relative mt-[10px] mb-[40px] mx-0 w-full whitespace-nowrap text-sectionHeading text-primaryText font-bold">
        <span className="relative -bottom-1 text-themeBlue font-mono text-smallSize font-semibold mr-[10px]">
          03.
        </span>
        <h2 className="text-sectionHeading">Some Things I've Built</h2>
        <div className="block sm:hidden w-full h-[1px] bg-blue-400/20 relative top-[5px] ml-[10px] "></div>
        <div className="hidden sm:block w-full md:w-[200px] lg:w-[300px] h-[1px] bg-blue-400/20 relative top-[5px] ml-[20px]"></div>
      </div>

      {/*project One */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full flex-flex-col items-center justify-center gap-28 mt-10"
      >
        <div className="flex flex-col xl:flex-row relative mb-[70px] md:mb-[100px] gap-4  items-center transition-all duration-200 shadow-aboutShadow md:shadow-none">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://rohit-razorpay-clone.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="block relative w-full bg-themeBlue shadow-aboutShadow  rounded-lg transition-all duration-500 mix-blend-screen group-hover:mix-blend-normal h-full z-[3] ">
              <img
                className="w-auto md:w-full h-full min-h-[400px] bg-no-repeat rounded-lg relative object-cover transition-all duration-500 mix-blend-multiply grayscale contrast-[70%] brightness-50 md:brightness-95   group-hover:mix-blend-normal group-hover:filter-none opacity-85 md:opacity-100 z-[4]"
                src={razorImg}
                alt="razorPayImg"
              />
            </div>
          </a>
          <div
            className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10 md:block md:h-auto justify-center sm:p-[40px] sm:pb-[30px]"
            style={{
              gridArea: "1 / 1 / -1 / 7",
            }}
          >
            <p className="font-titleFont text-textGreen text-sm tracking-wider font-semibold ">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold text-textLight text-sectionHeading transition-all duration-200 font-fontHeading md:mb-[20px] leading-[1.1] text-primaryText font-bold leading-[1.1] text-sectionHeading transition-all duration-200 hover:text-themeBlue font-fontHeading md:mb-[20px]"><a class href="https://rohit-razorpay-clone.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">Razorpay Clone</a>
              
            </h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              This is a Razorpay clone website which is created by using HTML,
              CSS & TailwindCSS. It describes the all features and
              functiinalities of the Razorpay website. It is fully responsive.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;

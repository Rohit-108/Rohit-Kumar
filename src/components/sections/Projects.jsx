import { motion } from "framer-motion";
import razorImg from "../../assets/razorImg.png";
import loanImg from "../../assets/loanImg.png"
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import discordImg1 from "../../assets/discordImg.png";

const Projects = () => {
 return (
   <motion.section
     id="project"
     className="my-[100px] mx-auto md:my-0  md:mx-0 max-w-container  lgl:px-20 py-[100px]"
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

     <motion.div
       initial={{ opacity: 0, y: 25 }}
       transition={{ delay: 0.2, duration: 0.5 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       className="w-full flex flex-col items-center justify-between gap-32 "
     >
       {/* Project1 */}
       <div className="w-full flex flex-col items-center justify-center gap-28  mt-[60px]">
         <div className="flex flex-col xl:flex-row gap-6">
           <a
             className="w-full xl:w-1/2 h-auto relative group max-w-[700px]"
             href="https://rohit-razorpay-clone.netlify.app/"
             target="_blank"
             rel="noopener noreferrer"
           >
             <div className="block relative w-full bg-themeBlue shadow-aboutShadow  rounded-lg transition-all duration-500 mix-blend-screen group-hover:mix-blend-normal h-full z-[3]">
               <img
                 className="w-full h-full object-contain md:w-full bg-no-repeat rounded-lg relative transition-all duration-500 mix-blend-multiply grayscale contrast-[60%] brightness-50 md:brightness-50 group-hover:mix-blend-normal group-hover:filter-none opacity-85 md:opacity-100 z-[4] "
                 src={razorImg}
                 alt="RazorImg"
               />
             </div>
           </a>
           <div className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-end text-right xl:-ml-16 z-10">
             <p className="font-titleFont text-textGreen text-sm tracking-wide">
               Featured project
             </p>
             <h3 className="text-2xl font-bold hover:text-textGreen transition-all duration-200">
               <a
                 href="https://rohit-razorpay-clone.netlify.app/"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 Razorpay Clone
               </a>
             </h3>
             <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
               This is a Razorpay clone website which is created by using HTML,
               CSS & TailwindCSS. It describes the all features and
               functiinalities of the Razorpay website. It is fully responsive.
             </p>
             <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
               <li>HTML</li>
               <li>CSS</li>
               <li>Tailwind</li>
               <li>Netlify development</li>
             </ul>
             <div className="text-2xl flex gap-4">
               <a
                 className="flex justify-center items-center  transition-all duration-300 hover:text-themeBlue"
                 href="https://github.com/Rohit-108/Razorpay_clone"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <TbBrandGithub />
               </a>
               <a
                 className="hover:text-textGreen duration-300"
                 href="https://rohit-razorpay-clone.netlify.app/"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <RxOpenInNewWindow />
               </a>
             </div>
           </div>
         </div>
       </div>

       {/*Project two  */}

       <div className="w-full flex flex-col items-center justify-center gap-28 mt-[120px]">
         <div className="flex flex-col xl:flex-row-reverse gap-6">
           <a
             className="w-full xl:w-1/2 h-auto relative group max-w-[700px]"
             href="https://rohit-discord-clone.netlify.app/"
             target="_blank"
             rel="noopener noreferrer"
           >
             <div className="block relative w-full bg-themeBlue shadow-aboutShadow  rounded-lg transition-all duration-500 mix-blend-screen group-hover:mix-blend-normal h-full z-[3]">
               <img
                 className="w-full h-full object-contain md:w-full bg-no-repeat rounded-lg relative transition-all duration-500 mix-blend-multiply grayscale contrast-[60%] brightness-50 md:brightness-50 group-hover:mix-blend-normal group-hover:filter-none opacity-85 md:opacity-100 z-[4] "
                 src={discordImg1}
                 alt="RazorImg"
               />
             </div>
           </a>
           <div className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-end text-right  z-10">
             <p className="font-titleFont text-textGreen text-sm tracking-wide">
               Featured project
             </p>
             <h3 className="text-2xl font-bold hover:text-textGreen transition-all duration-200">
               <a
                 href="https://rohit-discord-clone.netlify.app/"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 Discord Clone
               </a>
             </h3>
             <p className="bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
               This is a Razorpay clone website which is created by using HTML,
               CSS & TailwindCSS. It describes the all features and
               functiinalities of the Razorpay website. It is fully responsive.
             </p>
             <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
               <li>HTML</li>
               <li>CSS</li>
               <li>Tailwind</li>
               <li>Netlify development</li>
             </ul>
             <div className="text-2xl flex gap-4">
               <a
                 className="hover:text-textGreen duration-300"
                 href="https://github.com/Rohit-108/Discord-clone"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <TbBrandGithub />
               </a>
               <a
                 className="hover:text-textGreen duration-300"
                 href="https://rohit-discord-clone.netlify.app/"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <RxOpenInNewWindow />
               </a>
             </div>
           </div>
         </div>
       </div>

       {/* Project1 */}
       <div className="w-full flex flex-col items-center justify-center gap-28  mt-[60px]">
         <div className="flex flex-col xl:flex-row gap-6">
           <a
             className="w-full xl:w-1/2 h-auto relative group max-w-[700px]"
             href="https://loanstatic.netlify.app/"
             target="_blank"
             rel="noopener noreferrer"
           >
             <div className="block relative w-full bg-themeBlue shadow-aboutShadow  rounded-lg transition-all duration-500 mix-blend-screen group-hover:mix-blend-normal h-full z-[3]">
               <img
                 className="w-full h-full object-contain md:w-full bg-no-repeat rounded-lg relative transition-all duration-500 mix-blend-multiply grayscale contrast-[60%] brightness-50 md:brightness-50 group-hover:mix-blend-normal group-hover:filter-none opacity-85 md:opacity-100 z-[4] "
                 src={loanImg}
                 alt="Loanfinder"
               />
             </div>
           </a>
           <div className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-between items-end text-right xl:-ml-16 z-10">
             <p className="font-titleFont text-textGreen text-sm tracking-wide">
               Featured project
             </p>
             <h3 className="text-2xl font-bold hover:text-textGreen transition-all duration-200">
               <a
                 href="https://loanstatic.netlify.app/"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 Loan Finder
               </a>
             </h3>
             <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
               This is fully reponsive website which is created with help of
               HTML,CSS & JavaScript. It tells the required information about
               loan process. It's a static website for describing loan
               facilities.
             </p>
             <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
               <li>HTML</li>
               <li>CSS</li>
               <li>Bootstrap</li>
               <li>JavaScript</li>
               <li>Netlify development</li>
             </ul>
             <div className="text-2xl flex gap-4">
               <a
                 className="flex justify-center items-center  transition-all duration-300 hover:text-themeBlue"
                 href="https://github.com/Rohit-108/Loanstatic"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <TbBrandGithub />
               </a>
               <a
                 className="hover:text-textGreen duration-300"
                 href="https://loanstatic.netlify.app/"
                 target="_blank"
                 rel="noopener noreferrer"
               >
                 <RxOpenInNewWindow />
               </a>
             </div>
           </div>
         </div>
       </div>
     </motion.div>
   </motion.section>
 );
};

export default Projects;

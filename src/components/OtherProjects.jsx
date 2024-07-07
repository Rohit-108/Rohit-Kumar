import {motion} from "framer-motion";
import {ArchiveCard} from "../components"


const OtherProjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      animate={{ opacity: 1 }}
      className="max-w-container mx-auto px-4 py-24 relative transition-all duration-200 ease-in-out"
    >
      <div className="w-full flex flex-col items-center ">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Password Generator"
          des="This is a password generator web app.It is a dynamic apporch to genrate password randomly with the diffrent constriants.This is completely responsive and created with help of javascript."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://github.com/Rohit-108/password-generator"
        />
      </div>
    </motion.div>
  );
}

export default OtherProjects
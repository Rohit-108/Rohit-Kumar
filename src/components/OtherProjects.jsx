import {motion} from "framer-motion";
import {ArchiveCard} from "../components"
import PropTypes from "prop-types";
import React, { useState } from 'react';


const OtherProjects = () => {
    const [showMore, setShowMore] =useState(false)
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
        transition={{ delay: 0.5, duration: 1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      className="max-w-container mx-auto px-4 py-24 relative transition-all duration-200 ease-in-out flex flex-col items-center py-[60px] px-0 sm:py-[80px] sm:px-0 my-0 mx-auto "
    >
      <div className="w-full flex flex-col items-center ">
        <h2 className="text-sectionHeading m-0 mb-[10px] font-bold text-primaryText leading-[1.1]">
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
        <ArchiveCard
          title="Password Generator"
          des="This is a password generator web app.It is a dynamic apporch to genrate password randomly with the diffrent constriants.This is completely responsive and created with help of javascript."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://github.com/Rohit-108/password-generator"
        />
        <ArchiveCard
          title="Password Generator"
          des="This is a password generator web app.It is a dynamic apporch to genrate password randomly with the diffrent constriants.This is completely responsive and created with help of javascript."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://github.com/Rohit-108/password-generator"
        />
        <ArchiveCard
          title="Password Generator"
          des="This is a password generator web app.It is a dynamic apporch to genrate password randomly with the diffrent constriants.This is completely responsive and created with help of javascript."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://github.com/Rohit-108/password-generator"
        />
        <ArchiveCard
          title="Password Generator"
          des="This is a password generator web app.It is a dynamic apporch to genrate password randomly with the diffrent constriants.This is completely responsive and created with help of javascript."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://github.com/Rohit-108/password-generator"
        />
        <ArchiveCard
          title="Password Generator"
          des="This is a password generator web app.It is a dynamic apporch to genrate password randomly with the diffrent constriants.This is completely responsive and created with help of javascript."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://github.com/Rohit-108/password-generator"
        />
        {
            showMore && (
                <>
                <motion.div 
                intial={{ opacity: 0 }}
                whileInview={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                >
                 <ArchiveCard
          title="Password Generator"
          des="This is a password generator web app.It is a dynamic apporch to genrate password randomly with the diffrent constriants.This is completely responsive and created with help of javascript."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://github.com/Rohit-108/password-generator"
        />
        </motion.div>
        <motion.div 
                intial={{ opacity: 0 }}
                whileInview={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                >
                 <ArchiveCard
          title="Password Generator"
          des="This is a password generator web app.It is a dynamic apporch to genrate password randomly with the diffrent constriants.This is completely responsive and created with help of javascript."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://github.com/Rohit-108/password-generator"
        />
        </motion.div>
        <motion.div 
                intial={{ opacity: 0 }}
                whileInview={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                >
                 <ArchiveCard
          title="Password Generator"
          des="This is a password generator web app.It is a dynamic apporch to genrate password randomly with the diffrent constriants.This is completely responsive and created with help of javascript."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://github.com/Rohit-108/password-generator"
        />
        </motion.div>
        <motion.div 
                intial={{ opacity: 0 }}
                whileInview={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                >
                 <ArchiveCard
          title="Password Generator"
          des="This is a password generator web app.It is a dynamic apporch to genrate password randomly with the diffrent constriants.This is completely responsive and created with help of javascript."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://github.com/Rohit-108/password-generator"
        />
        </motion.div>
        <motion.div 
                intial={{ opacity: 0 }}
                whileInview={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                >
                 <ArchiveCard
          title="Password Generator"
          des="This is a password generator web app.It is a dynamic apporch to genrate password randomly with the diffrent constriants.This is completely responsive and created with help of javascript."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://github.com/Rohit-108/password-generator"
        />
        </motion.div>
        <motion.div 
                intial={{ opacity: 0 }}
                whileInview={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                >
                 <ArchiveCard
          title="Password Generator"
          des="This is a password generator web app.It is a dynamic apporch to genrate password randomly with the diffrent constriants.This is completely responsive and created with help of javascript."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://github.com/Rohit-108/password-generator"
        />
        </motion.div>
        <motion.div 
                intial={{ opacity: 0 }}
                whileInview={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                >
                 <ArchiveCard
          title="Password Generator"
          des="This is a password generator web app.It is a dynamic apporch to genrate password randomly with the diffrent constriants.This is completely responsive and created with help of javascript."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://github.com/Rohit-108/password-generator"
        />
        </motion.div>
        <motion.div 
                intial={{ opacity: 0 }}
                whileInview={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                >
                 <ArchiveCard
          title="Password Generator"
          des="This is a password generator web app.It is a dynamic apporch to genrate password randomly with the diffrent constriants.This is completely responsive and created with help of javascript."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://github.com/Rohit-108/password-generator"
        />
        </motion.div>
        <motion.div 
                intial={{ opacity: 0 }}
                whileInview={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                >
                 <ArchiveCard
          title="Password Generator"
          des="This is a password generator web app.It is a dynamic apporch to genrate password randomly with the diffrent constriants.This is completely responsive and created with help of javascript."
          listItem={["HTML", "CSS", "JavaScript"]}
          link="https://github.com/Rohit-108/password-generator"
        />
        </motion.div>
        </>


            )
        }
      </div>
      <div className=" flex items-center justify-center">
        <button 
        onClick={() => setShowMore(true)}
        className="font-mono leading-4 text-themeBlue bg-transparent border border-themeBlue rounded-[4px] px-7 py-5 mx-auto mt-[80px] text-[14px] transition-all ease-in-out duration-300 hover:shadow-buttonShadow hover:-translate-x-1 hover:-translate-y-1">Show More </button>
      </div>
    </motion.section>
  );
};



export default OtherProjects
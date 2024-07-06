import { social_links } from "../utilities/constant";
import { motion } from "framer-motion";

const Leftsection = () => {
  return (
    <>
      <motion.div
        className="w-[40px] hidden fixed bottom-0 md:block left-[20px] right-auto lg:left-[40px] z-10 text-textLight "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5}}
       
      >
        <ul className="flex flex-col items-center m-0 p-0 list-none">
          {social_links &&
            social_links.map(({ url, icon, name }, idx) => (
              <li
                key={idx}
                className="my-2 w-8 h-8 transition-all hover:-translate-y-2 duration-300  hover:text-textGreen cursor-pointer bg-hoverColor rounded-full inline-flex items-center justify-center "
              >
                <a
                  href={url}
                  target="_blank"
                  aria-label={name}
                  rel="noopener noreferrer"
                  className=""
                >
                  {icon}
                </a>
              </li>
            ))}
        </ul>
        <div className="block w-[1px] h-[90px] mx-auto my-0 mt-[15px] bg-textDark"></div>
      </motion.div>

      
    </>
  );
};


export default Leftsection;

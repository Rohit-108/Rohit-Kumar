import {RxOpenInNewWindow} from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";
import { FaRegFolder } from "react-icons/fa";
import {motion} from 'framer-motion';




const ArchiveCard = ({title,des,listItem, link}) => {
  return (
    <motion.a 
    initial={{ opacity: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      animate={{ opacity: 1 }}
    href={link} target="_blank" className="relative transition-all duration-200 ease-in-out">
      <div className="w-full h-ful rounded-lg  bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 duration-200 transition-transform    group   items-start relative  px-7 py-8     ease-in-out overflow-auto shadow-aboutShadow cursor-pointer">
      <header>
          <div className="flex justify-between items-center mb-[35px]">
            <div className="text-themeBlue text-5xl">
              <FaRegFolder />
            </div>
            <div className="flex items-center -mr-[10px] ">
              <a
                href={link}
                className="flex justify-center items-center px-[7px] py-[5px] relative z-[1] text-2xl text-secondaryText transition-all duration-200  hover:text-themeBlue"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TbBrandGithub />
              </a>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center px-[7px] py-[5px] relative z-[1] text-2xl text-secondaryText transition-all duration-200  hover:text-themeBlue"
              >
                <RxOpenInNewWindow/>
              </a>
            </div>
          </div>

          <h3 className="mb-[10px] text-primaryText transition-all duration-500  group-hover:text-themeBlue text-xl font-bold leading-[1.1] font-fontHeading">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <div className="block absolute z-0 w-full h-full top-0 left-0"></div>
              {title}
            </a>
          </h3>
          <div className="text-secondaryText text-[14px] font-semibold font-fontParagraph">
            <p>{des}</p>
          </div>
        </header>
        <ul className="text-xs mdl:text-sm text-textDark flex items-end list-none gap-2 justify-between flex-wrap mt-[20px]">
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.a>
  );
}

export default ArchiveCard
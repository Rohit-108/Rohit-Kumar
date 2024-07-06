import { motion } from "framer-motion";

const Rightsection = () => {
  return (
    <>
      <motion.div
        className="w-[40px] hidden fixed bottom-0 md:block left-auto right-[20px] lg:right-[40px] z-10 text-textLight "
        initial={{ opacity: 0 }}
        animate = {{opacity: 1 }}
        transition={{ delay: 1.5 }}
        
      >
        <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
          <a
            href="mailto:rohitsharma1082001@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            className="font-mono text-sm my-[20px] mx-auto p-[10px] tracking-widest transition hover:-translate-y-[3px] duration-300 text-textGreen hover:text-textGreen"
            style={{ writingMode: "vertical-rl" }}
          >
            rohitsharma1082001@gmail.com
          </a>
        </div>

        <div className="block w-[1px] h-[90px] mx-auto my-0 bg-textDark"></div>
      </motion.div>
    </>
  ); 

};

export default Rightsection;

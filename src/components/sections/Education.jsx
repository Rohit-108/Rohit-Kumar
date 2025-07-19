import { educationData } from "../../utilities/constant"


const Education = () => {

    return (
        <div className="max-w-[800px] mx-auto my-0 p-0 ">
            <div className="relative flex items-center my-[10px] mb-10 w-full whitespace-nowrap text-[28px] md:text-[24px]">Education</div>
            <div className="flex flex-start relative">
                <div className="relative z-[3] w-max block 
    thone:flex thone:overflow-x-scroll thone:mb-[30px] 
    thone:w-[calc(100%+100px)] thone:ml-[-50px]
    phablet:w-[calc(100%+50px)] phablet:ml-[-25px]
  ">{educationData.map((edu, index) => (
                    <div key={index} className="inline-block mr-4 last:mr-0">
                        <div className="text-themeBlue">{edu.college}</div>

                    </div>
                ))}</div>
                {educationData.map((edu, index) => (
                    <div key={index} className="top-0 left-0 w-[100%] h-auto">
                        <div className="text-lightslate font-medium mb-1.5 text-xl">{edu.level}</div>
                        <div className="text-themeBlue">{edu.college}</div>
                        <div>{edu.passingYear}</div>
                        <div className="font-mono text-xs font-normal tracking-wide text-lightSlate mb-8">{edu.location}</div>

                        <a href={edu.url} target="_blank" rel="noopener noreferrer">
                            Visit College Website
                        </a>
                        <div dangerouslySetInnerHTML={{ __html: edu.description }} className="font-mono text-s font-normal tracking-wide text-lightSlate mb-2.5" />
                        
                        
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Education
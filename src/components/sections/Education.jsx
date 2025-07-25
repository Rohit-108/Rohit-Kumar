import { educationData } from "../../utilities/constant"
import { useState } from "react";

const Education = () => {

    const [selectedEducation, setSelectedEducation] = useState(educationData[0]?.id || null);

    const showEducationDetails = (id) => {
        setSelectedEducation(id === selectedEducation ? null : id);
    }


    return (
        <div className="max-w-[800px] mx-auto my-0 p-0 ">
            <div className="relative flex items-center my-[10px] mb-10 w-full whitespace-nowrap text-[28px] md:text-[24px]">06.Education</div>
            <div className="flex flex-start relative">
                <div className="relative z-[3] w-max block thone:flex thone:overflow-x-scroll thone:mb-[30px] thone:w-[calc(100%+100px)] thone:ml-[-50px]phablet:w-[calc(100%+50px)] phablet:ml-[-25px]">
                    {educationData.map((edu) => (
                        <div key={edu.id} onClick={() => showEducationDetails(edu.id)} className={`flex items-center w-full bg-transparent px-5 pb-[2px] h-[42px]
    transition-colors duration-300 border-l-2 border-darkGrey text-left 
    whitespace-nowrap font-mono text-[14px] 
    hover:bg-lightNavy focus:bg-lightNavy ${selectedEducation === edu.id ? "text-themeBlue" : "text-lightSlate"}
    tablet:px-4
    thone:flex thone:justify-center thone:items-center thone:px-4 thone:text-center 
    thone:border-l-0 thone:border-b-2 thone:border-darkGrey thone:min-w-[120px]
                            }`}
                        >
                            {edu.college}
                        </div>
                    ))}</div>
                {educationData.filter((edu) => edu.id === selectedEducation).map((edu) => (
                    <div key={edu.id} className="top-0 left-0 w-[100%] h-auto">
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
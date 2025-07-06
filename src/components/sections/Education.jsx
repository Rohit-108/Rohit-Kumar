import { useState, useEffect, useRef } from 'react';

const educationData = [
    {
        level: 'Bachelor of Technology',
        college: 'ABES Engineering College Ghaziabad(ABESEC)',
        location: 'Ghaziabad, IND',
        passingYear: '2024',
        url: 'https://abes.ac.in/',
        description: `<ul>
      <li>Branch - Computer Science & Enginearing</li>
      <li>CGPA - 7.0</li>
<li> University - Dr. A.P.J.Abdul Kalam Technical University(AKTU), Lukhnow</li>
<li>Medium - English</li>    </ul>`,
    },
    {
        level: 'Diploma in Computer Science',
        college: 'Goverment(Rajkiya) Polytechnic College, Aligarh',
        location: 'Aligarh, IND',
        passingYear: '2021',
        url: 'https://mmitaligarh.in/',
        description: `<ul>
        <li>Percentage - 71.91%</li>
      <li>Branch - Computer Science & Enginearing</li>
<li> Board - Board of Technical Education Uttar Pradesh Lukhnow</li>
<li>Medium - English</li>
    
    </ul>`,
    },
];

const Education = () => {
    const [activeTabId, setActiveTabId] = useState(0);
    const [tabFocus, setTabFocus] = useState(null);
    const tabs = useRef([]);
    const containerRef = useRef(null);

    // Focus keyboard navigation (optional)
    const onKeyDown = (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            setTabFocus((prev) => (prev > 0 ? prev - 1 : educationData.length - 1));
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setTabFocus((prev) => (prev < educationData.length - 1 ? prev + 1 : 0));
        }
    };

    useEffect(() => {
        if (tabFocus !== null && tabs.current[tabFocus]) {
            tabs.current[tabFocus].focus();
        }
    }, [tabFocus]);

    return (
        <section id="education" ref={containerRef} className="max-w-4xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-slate-200 mb-8">Education</h2>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Tabs */}
                <ul
                    className="flex md:flex-col gap-2 overflow-x-auto border-b md:border-b-0 md:border-l border-slate-600"
                    onKeyDown={onKeyDown}
                >
                    {educationData.map((edu, i) => (
                        <li key={i}>
                            <button
                                ref={(el) => (tabs.current[i] = el)}
                                className={`px-4 py-2 text-left text-sm font-mono whitespace-nowrap border-l-2 md:border-l-0 md:border-b-2 ${activeTabId === i
                                    ? 'border-green-400 text-green-400'
                                    : 'border-transparent text-slate-400 hover:text-white'
                                    }`}
                                role="tab"
                                aria-selected={activeTabId === i}
                                onClick={() => setActiveTabId(i)}
                                tabIndex={activeTabId === i ? 0 : -1}
                            >
                                {edu.school}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Content */}
                <div className="flex-1 relative">
                    {educationData.map((edu, i) => (
                        <div
                            key={i}
                            className={`transition-opacity duration-300 ${activeTabId === i ? 'opacity-100 relative' : 'opacity-0 absolute'
                                }`}
                            role="tabpanel"
                            aria-hidden={activeTabId !== i}
                        >
                            <h3 className="text-xl text-slate-100 font-semibold mb-1">
                                {edu.level}
                                <span className="text-green-400">
                                    &nbsp;@&nbsp;
                                    <a
                                        href={edu.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="underline hover:text-green-300"
                                    >
                                        {edu.college}
                                    </a>
                                </span>
                            </h3>
                            <p className="text-sm text-slate-400 font-mono mb-1">{edu.passingYear}</p>
                            <p className="text-sm text-slate-400 font-mono mb-4">{edu.location}</p>
                            <div
                                className="text-slate-300 text-base leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: edu.description }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

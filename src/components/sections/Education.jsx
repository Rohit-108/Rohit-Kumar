import { useState, useEffect, useRef } from 'react';
// import educationData from '../../utilities/constant';


const Education = () => {
    const educationData = [
        {
            frontmatter: {
                level: 'Bachelor of Technology',
                school: 'Indian Institute of Technology',
                location: 'Delhi, India',
                passingYear: '2023',
                url: 'https://www.iitd.ac.in/'
            },
            html: '<ul><li>Major in Computer Science</li><li>CGPA: 9.1/10</li></ul>'
        },
        {
            frontmatter: {
                level: 'Higher Secondary School',
                school: 'Delhi Public School',
                location: 'Delhi, India',
                passingYear: '2019',
                url: 'https://www.dpsdelhi.in/'
            },
            html: '<ul><li>Science Stream</li><li>Percentage: 95%</li></ul>'
        }
    ];

    const [activeTabId, setActiveTabId] = useState(0);
    const [tabFocus, setTabFocus] = useState(null);
    const tabs = useRef([]);

    const revealContainer = useRef(null);

    const focusTab = () => {
        if (tabs.current[tabFocus]) {
            tabs.current[tabFocus].focus();
            return;
        }
        if (tabFocus >= tabs.current.length) {
            setTabFocus(0);
        }
        if (tabFocus < 0) {
            setTabFocus(tabs.current.length - 1);
        }
    };

    useEffect(() => focusTab(), [tabFocus]);

    const onKeyDown = e => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            setTabFocus(e.key === 'ArrowUp' ? tabFocus - 1 : tabFocus + 1);
        }
    };

    return (
        <section id="education" ref={revealContainer} className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-8 text-slate-200">Education</h2>
            <div className="flex flex-col md:flex-row relative">
                <ul
                    className="relative md:flex md:flex-col md:w-48 mb-4 md:mb-0 overflow-x-auto md:overflow-visible"
                    onKeyDown={onKeyDown}
                    role="tablist"
                >
                    {educationData.map((node, i) => (
                        <li key={i} className="flex-shrink-0">
                            <button
                                className={`w-full text-left px-5 py-2 text-sm font-mono border-l-2 md:border-l-2 border-slate-600 hover:bg-slate-700 transition-colors ${activeTabId === i ? 'text-green-400 border-green-400' : 'text-slate-400'
                                    }`}
                                onClick={() => setActiveTabId(i)}
                                ref={el => (tabs.current[i] = el)}
                                id={`education-tab-${i}`}
                                role="tab"
                                aria-selected={activeTabId === i}
                                aria-controls={`education-panel-${i}`}
                                tabIndex={activeTabId === i ? 0 : -1}
                            >
                                {node.frontmatter.school}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="relative flex-grow md:pl-6">
                    {educationData.map((node, i) => {
                        const { level, url, school, passingYear, location } = node.frontmatter;
                        return (
                            <div
                                key={i}
                                className={`${activeTabId === i ? 'block' : 'hidden'}`}
                                role="tabpanel"
                                id={`education-panel-${i}`}
                                aria-labelledby={`education-tab-${i}`}
                            >
                                <h4 className="text-xl font-semibold text-slate-100 mb-1">
                                    {level}
                                    <span className="text-green-400"> @ </span>
                                    <a
                                        href={url}
                                        className="text-green-400 underline hover:text-green-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {school}
                                    </a>
                                </h4>
                                <h5 className="text-sm font-mono text-slate-400 mb-1">{passingYear}</h5>
                                <h5 className="text-sm font-mono text-slate-400 mb-4">{location}</h5>
                                <div
                                    className="prose prose-invert text-slate-300"
                                    dangerouslySetInnerHTML={{ __html: node.html }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Education;
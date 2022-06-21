import {useState} from "react";
import Experien from "./Experien";
import Education from "./Education";
import SkillsLanguages from "./SkillsLanguages";

export default function Content() {
    const [experienList, setExperienList] = useState([
        {
            location: "Yerevan, Armenia",
            startEnd: "Sep 2017 - Sep 2018",
            position: "Web Developer",
            company: "Sky Systems LLC",
            responsibilities: [
                "Support existing projects",
                "Design and develop websites and web applications"
            ]
        },
        {
            location: "Yerevan, Armenia",
            startEnd: "Sep 2018 - Jan 2019",
            position: "Full stack developer",
            company: "Creative Web LLC",
            responsibilities: [
                "Backend architecture design",
                "Backend structure",
                "Develop new products (Websites and Web applications)",
            ]
        },
        {
            location: "Yerevan, Armenia",
            startEnd: "Feb 2019 - May 2020",
            position: "Full stack developer",
            company: "VooDoo programming LLC",
            responsibilities: [
                "Business logic software development",
                "Design databases and software structure",
                "Support and maintain web applications",
                "Develop new websites and web applications",
            ]
        },
        {
            location: "Yerevan, Armenia",
            startEnd: "Jun 2020 - Dec 2021",
            position: "Full stack developer",
            company: "Iguan Systems LLC",
            responsibilities: [
                "Business logic software development",
                "Design databases and software structure",
                "Design and develop frontend structure",
                "Develop new websites and web applications",
                "Deploy and support new features",
                "Support and maintain existing projects",
                "Payment platforms and API integration",
            ]
        },
        {
            location: "Yerevan, Armenia",
            startEnd: "Dec 2021 - May 2022",
            position: "Full stack developer",
            company: "Digital Trends",
            responsibilities: [
                "Business logic software development",
                "Design databases and software structure",
                "Design and develop frontend structure",
                "Deploy and support new features",
                "Support and maintain existing projects",
            ]
        }
    ]);
    const [educationList, setEducationList] = useState([
        {
            location: "Yerevan, Armenia",
            startEnd: "Sep 2009 - May 2013",
            position: "Bachelor's degree of engineering",
            company: "SEUA",
        },
        {
            location: "Yerevan, Armenia",
            startEnd: "Jan 2017 - Jun 2017",
            position: "Web Development Certificate",
            company: "ColibriLab Training Center",
        }
    ]);
    return (
        <div id="page-content-wrapper" className="w-75 pt-5  px-3 text-color max-vh-100 scroll_y_auto content_bg">
            <div className="d-flex border_bottom_custom py-3">
                <div className="me-auto">
                    <h2>Anushavan</h2>
                    <h2>
                        Mesopyan

                    </h2>
                    <b>Full-stack</b>
                </div>
                <div>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-phone" viewBox="0 0 16 16">
                            <path
                                d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                        <a href="tel:+374 55 21 12 21" className="px-2 text-color text-decoration-none">+374 55 21 12
                            21</a>
                    </p>

                    <address>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-pin-map" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
                            <path fillRule="evenodd"
                                  d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
                        </svg>
                        <span className="px-2">
    Address: 89 Mashtots Street, Ejmiatsin, Armenia
</span>

                    </address>

                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-envelope" viewBox="0 0 16 16">
                            <path
                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                        <span className="px-2">anuashavan@gmail.com</span>
                    </p>
                </div>
            </div>
            <div className="border_bottom_custom py-3">
                <h2>EXPERIENCE</h2>
                {
                    experienList.map((experienCompany, i) => {
                        return <Experien key={i} experienCompany={experienCompany}/>
                    })
                }
            </div>
            <div className="border_bottom_custom py-3">
                <h2>EDUCATION</h2>
                {
                    educationList.map((educationItem, i) => {
                        return <Education key={i} educationItem={educationItem}/>
                    })
                }
            </div>
            <div className="border_bottom_custom py-3">
                <SkillsLanguages/>
            </div>

        </div>
    )
}
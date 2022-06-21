import Skills from "./Skills";
import {useState} from "react";
import Languages from "./Languages";

export default function SkillsLanguages() {
    const [skillList, setSkillList] = useState([
        "NodeJS (Express)",
        "React (Redux, Next.js, Saga)",
        "Vue.js (Vuetify, Vuex, Vuesax, NuxtJS)",
        "PHP (Laravel, Yii2)",
        "NoSQL (MongoDB)",
        "HTML",
        "CSS (Bootstrap, Materialize, Tailwind)",
        "Other (GIT, Linux OS, Windows OS)",
        "Sql (MySql)",
    ]);
    const [languages,setLanguages] =useState([
        {
            type: "Armenian",
            status: "Native"
        },
        {
            type: "Russian",
            status: "Intermediate"
        },
        {
            type: "English",
            status: "Elementary"
        },
        {
            type: "French",
            status: "Elementary"
        }
    ])
    return(
        <div className="d-flex  py-3">
               <Skills skillList={skillList} />
                <Languages languages={languages}/>
        </div>
    )
}
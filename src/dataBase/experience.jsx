import { SiJira, SiFigma, SiTrello, SiMiro, SiDocker, SiPostman, SiPostgresql, SiTailwindcss, SiSass } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFillKanbanFill } from "react-icons/bs";

export const experiencesData = [
    { id: "figma", name: "Figma", icon: <SiFigma />, level: "" },
    { id: "miro", name: "Miro", icon: <SiMiro />, level: "" },
    { id: "jira", name: "Jira", icon: <SiJira />, level: "" },
    { id: "docker", name: "Docker", icon: <SiDocker />, level: "" },
    { id: "postman", name: "Postman", icon: <SiPostman />, level: "" },
    { id: "postgreSQL", name: "PostgreSQL", icon: <BiLogoPostgresql />, level: "a" },
    {
        id: "trello",
        name: "Trello",
        icon: <SiTrello />,
        level: "",
    },
    {
        id: "scrum",
        name: "Scrum",
        icon: <DiScrum />,
        level: "",
    },
    {
        id: "kanban",
        name: "Kanban",
        icon: <BsFillKanbanFill />,
        level: "",
    },
];

import AboutContainer from "./AboutContainer";
import TechnologiesContainer from "./TechnologiesContainer";
import Experience from "./Experience";
import ProjectsContainer from "./ProjectsContainer";

import "../styles/components/maincontent.sass";
import CarrerContainer from "./CareerContainer";

const MainContent = () => {
    return (
        <main id="main-content">
            <AboutContainer />
            <CarrerContainer />
            <TechnologiesContainer />
            <Experience />
            <ProjectsContainer />
        </main>
    );
};

export default MainContent;

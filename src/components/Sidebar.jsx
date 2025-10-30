import { useState } from "react";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/perfilPhoto.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
    const urlDownloadCurriculo =
        "https://drive.google.com/uc?id=1ORl-yPva51qlLFGmbAVKUg5EpQjOMP1d&export=download";
    const [download, setDownload] = useState("");

    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Gabriel Bezerra" />
            <p className="title">Desenvolvedor Web Full Stack</p>
            <SocialNetworks />
            <InformationContainer />
            <button
                className="btn"
                onClick={() => {
                    setDownload(urlDownloadCurriculo);
                }}
            >
                Baixar Curriculo
            </button>
            {download && <iframe src={download}></iframe>}
        </aside>
    );
};

export default Sidebar;

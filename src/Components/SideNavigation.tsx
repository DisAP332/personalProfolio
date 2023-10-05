import up_arrow from "../Assets/Icons/up-arrow.svg";
import down_arrow from "../Assets/Icons/down-arrow.svg";
import knowledge_icon from "../Assets/Icons/creative-book.svg";
import projects_icon from "../Assets/Icons/checkmark.svg";

export default function SideNavigation(Props) {
  return (
    <div className="sideNavigation d-none d-md-block">
      <div onClick={() => Props.scrollTo(Props.sections.topRef)}>
        <img src={up_arrow} alt="up arrow" />
        <h1>Top</h1>
      </div>
      <div onClick={() => Props.scrollTo(Props.sections.knowledgeRef)}>
        <img src={knowledge_icon} alt="knowledge section" />
        <h1>Knowledge</h1>
      </div>
      <div onClick={() => Props.scrollTo(Props.sections.projectsRef)}>
        <img src={projects_icon} alt="project section" />
        <h1>Projects</h1>
      </div>
      <div onClick={() => Props.scrollTo(Props.sections.bottomRef)}>
        <img src={down_arrow} alt="down arrow" />
        <h1>bottom</h1>
      </div>
    </div>
  );
}

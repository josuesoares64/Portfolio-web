import SectionHabilidades from "./SectionHabilidades";
import SectionPrincipal from "./SectionPrincipal";
import SectionProjetos from "./SectionProjetos";
import SectionSobre from "./SectionSobre"

const HomeContent = () => {
    return (
        <div>
            <SectionPrincipal/>
            <SectionSobre />
            <SectionHabilidades/>
            <SectionProjetos/>
        </div>
    )
}

export default HomeContent;
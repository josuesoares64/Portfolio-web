import SectionHabilidades from "./SectionHabilidades";
import SectionPrincipal from "./SectionPrincipal";
import SectionSobre from "./SectionSobre"

const HomeContent = () => {
    return (
        <div>
            <SectionPrincipal/>
            <SectionSobre />
            <SectionHabilidades/>
        </div>
    )
}

export default HomeContent;
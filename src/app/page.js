import Header from "@/components/header";
import SectionHero from "@/components/sectionHero";
import SectionAbout from "@/components/sectionAbout";
import SectionBasePrincipe from "@/components/sectionBasePrincipe";
import SectionTripStarted from "@/components/sectionTripStarted";
import SectionCollection from "@/components/sectionCollection";
import SectionDesign from "@/components/sectionDesign";
import SectionEveryDayGrid from "@/components/sectionEveryDayGrid";
import SectionGallery from "@/components/sectionGallery";
import SectionFeatures from "@/components/sectionFeatures";
import SectionForm from "@/components/sectionForm";

export default function Home() {
  return (
    <>
      <SectionHero/>
      <SectionAbout/>
      <SectionBasePrincipe/>
      <SectionTripStarted/>
      <SectionCollection/>
      <SectionDesign/>
      <SectionEveryDayGrid/>
      <SectionGallery/>
      <SectionFeatures/>
      <SectionForm/>
    </>
  );
}

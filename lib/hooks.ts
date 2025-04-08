import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";
import { ActiveSectionStore } from "@/store/active-section-store";
import { useEffect } from "react";

export function useSectionInView(sectionName:SectionName,threshold = 0.75){
    const {ref,inView} = useInView({
        threshold
    })
    const setActiveSection = ActiveSectionStore((state) => state.setActiveSection)
    const setTimeOfLastClick = ActiveSectionStore((state) => state.setTimeOfLastClick)
    const {timeOfLastClick} = ActiveSectionStore()

    useEffect(()=>{
        if(inView && Date.now() - timeOfLastClick > 1000){
            setActiveSection(sectionName)
        }
    },[inView,setActiveSection,timeOfLastClick,sectionName])
    return {
        ref,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
    }
}
import { SectionName } from "@/lib/types";
import { create } from "zustand";


type ActiveSectionStoreType = {
    activeSection: SectionName;
    setActiveSection: (section: SectionName) => void;
    timeOfLastClick: number;
    setTimeOfLastClick: (time: number) => void;
}

export const ActiveSectionStore = create<ActiveSectionStoreType>((set)=>({
    activeSection: 'Home',
    setActiveSection: (section) => set({ activeSection: section }),
    timeOfLastClick: 0,
    setTimeOfLastClick: (time)=> set({timeOfLastClick: time})
}))
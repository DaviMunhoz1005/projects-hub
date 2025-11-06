import { IconType } from "react-icons";

export interface Project {
    title: string;
    description: string;
    tech: IconType[];
    github: string;
    image: string;
    demo?: string;
}

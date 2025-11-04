import Title from "../components/Title";
import HabilitiesList from "../components/HabilitiesList";
import InfoCard from "../components/InfoCard";
import { Mail, MapPin, Code2, Cpu } from "lucide-react";

export default function About() {
    const mainHabilitiesItems = ["Front-end", "Back-end", "SQL", "IoT", "Docker"];

    return (
        <main className="relative flex justify-center items-center h-screen overflow-hidden w-10/12">
        <InfoCard
            position="top-left"
            items={[
                { icon: <Cpu />, text: "Engenharia de Software" },
                { icon: <MapPin />, text: "São Paulo, BR" },
            ]}
        />

        <section className="rounded-full w-140 h-140 flex flex-col gap-4 justify-center items-center bg-linear-to-tr from-dark-main to-dark-contrast shadow-lg shadow-accent-neon">
            <div className="flex flex-col justify-center items-center">
                <Title color="white">Davi</Title>
                <Title animate glow>
                    Munhoz
                </Title>
            </div>

            <HabilitiesList items={mainHabilitiesItems} />
        </section>

        <InfoCard
            position="bottom-right"
            items={[
                { icon: <Mail />, text: "davimunhoz1005@gmail.com" },
                { icon: <Code2 />, text: "Full-Stack Developer" },
            ]}
        />
        </main>
    );
}

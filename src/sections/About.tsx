import Title from "../components/Title";
import HabilitiesList from "../components/HabilitiesList";

export default function About() {
    const mainHabilitiesItems = ["Front-end", "Back-end", "SQL", "IoT", "Docker"];

    return (
        <main className="flex justify-center items-center h-screen">
            <section className="rounded-full w-140 h-140 flex flex-col gap-4 justify-center items-center bg-linear-to-tr from-dark-main to-dark-contrast shadow-lg shadow-accent-neon">
                <div className="flex flex-col justify-center items-center">
                    <Title color="white">Davi</Title>
                    <Title animate={true} glow>Munhoz</Title>
                </div>

                <HabilitiesList items={mainHabilitiesItems} />
            </section>
        </main>
    );
}

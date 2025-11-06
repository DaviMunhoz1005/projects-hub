import Header from "./components/Header";
import About from "./sections/About";
import Skills from "./sections/Skills";
import "./index.css";

export default function App() {
    return (
        <>
            <Header />
            <div className="flex justify-center items-center h-fit relative">
                <About />
                <div className="absolute bottom-0 left-0 w-full h-0 overflow-visible pointer-events-none">
                    <div className="neon-line"></div>
                </div>
            </div>
            <Skills />
        </>
    );
}

import Header from "./components/Header"
import About from "./sections/About"

export default function App() {

    return (
        <>
            <Header />
            <div className="flex justify-center items-center">
                <About />
            </div>
        </>
    )
}

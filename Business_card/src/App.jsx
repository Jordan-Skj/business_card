import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Image } from "./components/image";
import { Section } from "./components/section";

export default function App(){
    return(
        <div className="card">
            <Image/>     
            <Header/>
            <Section/>
            <Footer/>
        </div>
    )
}
import Image from "next/image";
import Link from "next/link";

import LogoImg from "../../../public/logo.svg"
import SearchIcon from "../../../public/icon-search.svg"
import UserIcon from "../../../public/icon-user.svg"
import { GridContainer } from "./grid";

const arrayMenu = [
    "Início",
    "Benefícios",
    "Pra quem é o curso?",
    "Preços promocionais",
    "Sobre nós",
]

export function Header() {
    const activedStyle = "bg-green-actived text-white/100 rounded-full"
    return (
        <header className="relative w-full h-24 bg-green-primary flex items-center">
            <GridContainer className="flex items-center justify-between">
                
                <Image
                    src={LogoImg}
                    alt="logo instasany"
                />
                
                <div className="flex items-center gap-20">
                    <nav className="flex gap-2">
                        { arrayMenu.map((item, index) => (
                            <Link 
                                key={index} 
                                href="#" 
                                className={`px-3 py-1 text-white/40 hover:text-white/100 transition-colors
                                ${index === 0 ? activedStyle : ""}`}>
                                    {item}
                            </Link>
                        ))}
                    </nav>
                </div>
                
                <div className="flex items-center gap-6">
                    <button>
                        <Image 
                            src={SearchIcon}
                            alt=""
                        />
                    </button>

                    <button className="flex items-center gap-2">
                        <Image 
                            src={UserIcon}
                            alt=""
                        />
                        <span className="text-white font-medium hover:text-white/40 transition-colors cursor-pointer">
                            Fazer login
                        </span>
                    </button>
                </div>
            </GridContainer>
        </header>
    )
}
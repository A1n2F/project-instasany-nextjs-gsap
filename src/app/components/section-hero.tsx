"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import { GridContainer } from "./grid";

import iconFile from "../../../public/icon-file.svg"
import iconHand from "../../../public/icon-hand.svg"
import iconHand2 from "../../../public/icon-hand-02.svg"
import mockUpImg from "../../../public/mockup.svg"
import gsap from "gsap";

export function SectionHero() {
    const textHeroRef = useRef(null)
    const mockupLeftRef = useRef(null)
    const mockupRightRef = useRef(null)

    useEffect(() => {
        const textHero = textHeroRef.current
        const mLeft = mockupLeftRef.current
        const mRight = mockupRightRef.current

        gsap.fromTo(textHero, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        })

        gsap.fromTo(mLeft, {
            rotate: 0
        }, {
            rotate: -12,
            duration: 1
        })

        gsap.fromTo(mRight, {
            rotate: 0
        }, {
            rotate: 12,
            duration: 1
        })
    }, [])

    return (
        <section className="w-full h-[874px] bg-[url('/bg-hero.svg')] bg-no-repeat bg-top bg-green-primary
         border-t border-t-green-border pt-16 relative overflow-hidden">
            <GridContainer className="flex flex-col items-center">
                <div className="w-full max-w-[1056px] text-center opacity-0" ref={textHeroRef}>
                    <h3 className="text-xl font-medium text-green-actived mb-4">
                        Novo curso focado em Instagram
                    </h3>
                    <h1 className="text-white text-7xl/normal font-semibold mb-2.5">
                        Destrave as suas habilidades
                    </h1>

                    <div className="flex items-center justify-center gap-10">
                        <button className="flex items-center gap-2">
                            <Image src={iconFile} alt=""/>
                            <span className="text-white font-medium">Assinar lista de espera</span>
                        </button>

                        <button className="px-5 py-4 bg-green-btn rounded-full text-green-primary font-bold
                        hover:bg-[#a9bb6d] transition-colors cursor-pointer">
                            Começar agora
                        </button>
                    </div>
                </div>

                <div className="w-full h-28 max-w-[856px] relative mt-4">
                    <Image src={iconHand} alt="" className="absolute bottom-0 left-0" />
                    <Image src={iconHand2} alt="" className="absolute right-0 top-0" />
                </div>

                <div className="w-full max-w-[957px] absolute -bottom-44 flex justify-between">
                    <Image 
                        src={mockUpImg} 
                        alt=""
                        className="relative top-[18px] left-[53px]" 
                        ref={mockupLeftRef}
                    />
                    <Image 
                        src={mockUpImg} 
                        alt=""
                        className="relative top-[18px] right-[53px]"
                        ref={mockupRightRef}
                    />
                </div>
            </GridContainer>
        </section>
    )
}
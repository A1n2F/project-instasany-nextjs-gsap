"use client"
import { useEffect, useRef } from "react";

import Image from "next/image";

import mockupImg from "../../../public/mockup-main.png"
import card01 from "../../../public/image-01.png"
import card02 from "../../../public/image-02.png"
import card03 from "../../../public/image-03.png"
import card04 from "../../../public/image-04.png"
import card05 from "../../../public/image-05.png"
import card06 from "../../../public/image-06.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export function SectionCards() {
    const mockupRef = useRef(null)
    const titleRef = useRef(null)
    const sectionRef = useRef(null)

    const card01Ref = useRef(null)
    const card02Ref = useRef(null)
    const card03Ref = useRef(null)
    const card04Ref = useRef(null)
    const card05Ref = useRef(null)
    const card06Ref = useRef(null)

    const section = sectionRef.current

    function animateCards(images: null[], position: number) {
        gsap.fromTo(images, {
            opacity: 0,
            x: position
        }, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: .2,
            scrollTrigger: {
                trigger: section,
                start: "center center"
            }
        })
    }

    useEffect(() => {
        const mockupPhone = mockupRef.current
        const title = titleRef.current

        gsap.fromTo(mockupPhone, {
            opacity: 0,
            scale: .5
        }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power4.out",
        })

        gsap.fromTo(title, {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "65% center",
                end: "",
            }
        })

        const img01 = card01Ref.current
        const img02 = card02Ref.current
        const img03 = card03Ref.current
        const img04 = card04Ref.current
        const img05 = card05Ref.current
        const img06 = card06Ref.current

        const leftImages = [img01, img02, img03]
        const rightImages = [img04, img05, img06]

        animateCards(leftImages, 50)
        animateCards(rightImages, -50)
    }, [])
    return (
        <section className="w-full pb-20" ref={sectionRef}>
            <Image 
                src={mockupImg} 
                alt="" 
                className="sticky top-56 z-10 mx-auto -mt-[32rem] mb-16 opacity-0" 
                ref={mockupRef}   
            />

            <h2 className="text-center text-7xl font-semibold mb-56 opacity-0" ref={titleRef}>Faça <span className="text-green-title-card">você</span> mesmo de casa</h2>

            <div className="relative w-full max-w-[1320px] mx-auto h-[562px]">
                <Image src={card01} alt="" className="absolute top-8 left-44 opacity-0" ref={card01Ref}/>
                <Image src={card02} alt="" className="absolute left-0 bottom-32 opacity-0" ref={card02Ref}/>
                <Image src={card03} alt="" className="absolute bottom-0 left-80 opacity-0" ref={card03Ref}/>
                <Image src={card04} alt="" className="absolute top-0 right-32 opacity-0" ref={card04Ref}/>
                <Image src={card05} alt="" className="absolute right-0 bottom-28 opacity-0" ref={card05Ref}/>
                <Image src={card06} alt="" className="absolute bottom-0 right-80 opacity-0" ref={card06Ref}/>
            </div>
        </section>
    )
}
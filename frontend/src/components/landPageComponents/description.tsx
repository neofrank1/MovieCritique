'use client'
import { CardBorder } from "../Card";

interface DescriptionCardProps {
    posterData: Array<any>
}

export default function DescriptionCard({posterData}: DescriptionCardProps) {
    return (
        <CardBorder className="shadow-md bg-slate-900 relative">
            <div className="flex flex-col sm:flex-row justify-between gap-4 cover">
                {/* TEXT SIDE */}
                <div className="grid justify-items-center sm:justify-items-start p-2 z-10">
                <div className="p-2">
                    <span className="text-rotate text-6xl text-white duration-6000 font-extrabold">
                    <span>
                        <span>RATE</span>
                        <span>REVIEW</span>
                        <span>ENJOY!</span>
                    </span>
                    </span>
                </div>

                <div className="p-2">
                    <p className="text-white text-lg text-center sm:text-left">
                    “Jump into the world of movies—rate what you love, roast what you don’t,
                    <br />
                    and discover what everyone’s talking about.
                    <br />
                    Your next favorite film is just a scroll away.”
                    </p>
                </div>
                </div>
            </div>
             {/* IMAGE STACK */}
            <div className="hidden lg:block absolute top-[-20%] right-[-15%] w-[300px] h-[200px]">
                {posterData?.slice(0, 4).map((poster, index) => (
                    <img
                        key={index}
                        src={poster}
                        className={`w-40 rounded-lg shadow-md absolute ${
                            index === 0
                                ? "rotate-[-19deg] top-20 right-[335%] z-50"
                                : index === 1
                                ? "rotate-[-15deg] top-10 right-[275%] z-20"
                                : index === 2
                                ? "rotate-[15deg] top-10 right-[-35%] z-30"
                                : "rotate-[18deg] top-20 right-[-95%] z-10"
                        }`}
                    />
                ))}
            </div>
        </CardBorder>
    );
}
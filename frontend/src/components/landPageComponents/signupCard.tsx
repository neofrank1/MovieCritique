'use client';
import { CardBorder } from "../Card";
import { useRef } from "react";
import React from "react";
import { Link } from "react-router";

export default function SignupCard() {

    const [email, setEmail] = React.useState<string>("");

    return (
        <div className="flex justify-center p-10">
            <CardBorder className="bg-neutral shadow-lg">
                <p className="font-extrabold uppercase text-white text-4xl">Review Right Now!</p>
                <p className="font-mono text-white text-md text-justify">Sign up and unleash your totally unbiased, absolutely questionable movie opinions.<br />
                Rate masterpieces like a critic, trash films like a pro, <br />
                and confidently act like you could’ve directed it better—with zero experience.<br />
                Your hot takes won’t change the industry… but they will be hilarious.</p> 
                <div className="join card-action">
                    <div>
                        <label className="input validator join-item">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                            >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>
                        <input type="email" placeholder="mail@site.com" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </label>
                        <div className="validator-hint hidden">Enter valid email address</div>
                    </div>
                    <Link to={`/sign_up/${email}`} className="btn btn-error join-item text-white">Join</Link>
                </div>      
            </CardBorder>
        </div>
    );
}
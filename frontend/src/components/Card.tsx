'use client';
import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    imgSrc?: string;
    altName?: string;
    className?: string;
}

export function Card({ children, imgSrc, altName, className }: CardProps) {
    return (
        <div className={`card ${className || ''}`}>
            <figure>
                <img
                src={imgSrc}
                alt={altName} />
            </figure>
            <div className="card-body">
                {children}
            </div>
        </div>  
    );
}

export function CardBorder({ children, className }: CardProps) {
    return (
        <div className={`card card-border ${className || ''}`}>
            <div className="card-body">
            {children}
            </div>
        </div>  
    );
}
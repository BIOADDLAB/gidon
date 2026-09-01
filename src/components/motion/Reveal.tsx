'use client';

import { useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

type RevealProps = {
    children: ReactNode;
    className?: string;
    y?: number;
    x?: number;
    delay?: number;
    duration?: number;
};

export function Reveal({ children, className, y = 28, x = 0, delay = 0, duration = 0.9 }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const el = ref.current;
            if (!el || prefersReducedMotion()) {
                return;
            }

            gsap.fromTo(
                el,
                { y, x, autoAlpha: 0 },
                {
                    y: 0,
                    x: 0,
                    autoAlpha: 1,
                    duration,
                    delay,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 88%',
                        once: true,
                    },
                    onComplete: () => {
                        gsap.set(el, { clearProps: 'transform' });
                    },
                },
            );
        },
        { scope: ref },
    );

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}

type RevealStaggerProps = {
    children: ReactNode;
    className?: string;
    selector?: string;
    y?: number;
    stagger?: number;
};

export function RevealStagger({
    children,
    className,
    selector,
    y = 24,
    stagger = 0.12,
}: RevealStaggerProps) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const el = ref.current;
            if (!el || prefersReducedMotion()) {
                return;
            }

            const items = selector ? el.querySelectorAll(selector) : el.children;

            gsap.fromTo(
                items,
                { y, autoAlpha: 0 },
                {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.8,
                    stagger,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        once: true,
                    },
                    onComplete: () => {
                        gsap.set(items, { clearProps: 'transform' });
                    },
                },
            );
        },
        { scope: ref },
    );

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}

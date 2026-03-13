"use client";

import { Suspense } from "react";
import "./App.css";
import dynamic from "next/dynamic";
import { LoadingProvider } from "../context/LoadingProvider";

const MainContainer = dynamic(() => import("../components/MainContainer"), { ssr: false });
const CharacterModel = dynamic(() => import("../components/Character"), { ssr: false });

export default function Home() {
    return (
        <main>
            <LoadingProvider>
                <Suspense fallback={<div>Loading...</div>}>
                    <MainContainer>
                        <Suspense fallback={null}>
                            <CharacterModel />
                        </Suspense>
                    </MainContainer>
                </Suspense>
            </LoadingProvider>
        </main>
    );
}

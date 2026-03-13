"use client";

import { Suspense } from "react";
import "./App.css";
import { LoadingProvider } from "../context/LoadingProvider";
import MainContainer from "../components/MainContainer";
import CharacterModel from "../components/Character";

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

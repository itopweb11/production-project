import {lazy} from "react";

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    //в реальном проекте так не делаем (ts-ignore) Делаем для курса
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}));
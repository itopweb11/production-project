import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    //в реальном проекте так не делаем (ts-ignore) Делаем для курса
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));
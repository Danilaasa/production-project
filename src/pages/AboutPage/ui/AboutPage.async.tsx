import React from "react"

export const AboutPageAsync = React.lazy(() => new Promise(resolve => {
    //eslint-disable-next-line
    // @ts-ignore
    //так не делать в реальных проектах,  сделано чисто проверить
    setTimeout(() => resolve(import("./AboutPage")), 1000)
}))
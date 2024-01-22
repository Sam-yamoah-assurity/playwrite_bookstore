export { };

declare global {
    namespace NodeJS {
            interface ENV {
                BROWSER: "chrome" | "firefox" | "webkit",
                ENV: "staging" | "production" | "test" | "local" | "pipeline",
                BASEURL: string,
                HEAD: true | false
            }
    }
}
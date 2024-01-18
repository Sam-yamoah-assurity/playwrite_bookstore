export { };

declare global {
    namespace NodeJS {
            interface ENV {
                BROWSER: "chrome" | "firefox" | "webkit",
                ENV: "staging" | "production" | "test",
                BASEURL: string,
                HEAD: "true" | "false"
            }
    }
}
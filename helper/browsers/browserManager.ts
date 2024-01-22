import { LaunchOptions, chromium, firefox, webkit } from "playwright-core";

export const invokeBrowser = () => {
    let envHeadlessMode: boolean = (
        process.env.HEAD == null || process.env.HEAD === "true");
    const options: LaunchOptions = {
        headless: envHeadlessMode,
    }

    const browserType = process.env.BROWSER;
    switch (browserType) {
        case "chrome":
            return chromium.launch(options);
        case "firefox":
           return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);

        default:
            throw new Error("Please set the proper browser");
            ;
    }
}
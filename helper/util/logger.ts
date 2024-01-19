import { format, transports } from "winston";

export function options(scenarioName: string) {
    return {
        transports: [
            new transports.Console(),
            new transports.File({
                filename: `testResults/logs/${scenarioName}/log.log`,
                level: 'info',
                format: format.combine(
                    format.timestamp({ format: 'DD-MMM-YYYY HH:mm:SS' }),
                    format.align(),
                    format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
                )
            })
        ]
    }
};
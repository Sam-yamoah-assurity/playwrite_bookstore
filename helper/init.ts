const fs = require("fs-extra");

try {
    fs.ensureDir("testResults/reports");
    fs.emptyDir("testResults/reports");
} catch (error) {
    console.log(`Reports directory not created! ${error}`);
    
}

try {
    fs.ensureDir("testResults/screenshots");
    fs.emptyDir("testResults/screenshots");
} catch (error) {
    console.log(`Screenshoots folder not created! ${error}`);
    
}

try {
    fs.ensureDir("testResults/logs");
    fs.emptyDir("testResults/logs");
} catch (error) {
    console.log(`Logs folder not created! ${error}`);
    
}
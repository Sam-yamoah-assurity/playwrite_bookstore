const fs = require("fs-extra");

try {
    fs.ensureDir("testResults/reports");
    fs.emptyDir("testResults/reports");
} catch (error) {
    console.log(`Folder not created! ${error}`);
    
}

try {
    fs.ensureDir("testResults/screenshots");
    fs.emptyDir("testResults/screenshots");
} catch (error) {
    console.log(`Folder not created! ${error}`);
    
}
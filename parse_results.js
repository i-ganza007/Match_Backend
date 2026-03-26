const fs = require('fs');
const r = fs.readFileSync('c:/Users/HP/OneDrive/Desktop/Match_B/Match_Backend/coverage/html-report/jest-html-reporters-attach/test-report/result.js', 'utf8');
const json = r.replace('window.jest_html_reporters_callback__(', '').replace(/\);\s*$/, '');
const data = JSON.parse(json);

console.log('=== OVERALL ===');
console.log('Total tests  :', data.numTotalTests);
console.log('Passed       :', data.numPassedTests);
console.log('Failed       :', data.numFailedTests);
console.log('Suites total :', data.numTotalTestSuites);
console.log('success flag :', data.success);
console.log('');
console.log('=== PER SUITE ===');

data.testResults.forEach(function(s) {
  var parts = (s.testFilePath || '').split('\\');
  var file = parts[parts.length - 1];
  console.log(file + ' | pass=' + s.numPassingTests + ' fail=' + s.numFailingTests);
});

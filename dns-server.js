const ipInfo = require('node-ipinfo');
const chalk = require('chalk');
const token = '248d686718b700';
const ip = '8.8.8.8'
const response = new ipInfo(token);

response.lookupIp(ip).then((result) => {
    console.log(chalk.yellow(result.hostname))
    console.log(chalk.blue(result.city))
    //console.log(result)
}).catch((err) => {
    console.log('Something went wrong')
});
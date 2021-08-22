<<<<<<< HEAD
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
=======
const ipLookUp = require('node-ipinfo');
const program = require('commander');
const chalk = require('chalk')
const host = process.argv[2];
//const token = '248d686718b700';

const dns = require('dns');
dns.resolve(host,(err,add)=>{
  if(err){
      console.log(err)
  }else{
      console.log(`Ipv4: ${chalk.rgb(200,12,223)(add)}`)
      //console.log(`Family: ${chalk.rgb(123,34,129)(family)}`)
  }
})
>>>>>>> 5b6fe7b8f95857d4d505f8038ab5f14fef42e890

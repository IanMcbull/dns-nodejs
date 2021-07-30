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
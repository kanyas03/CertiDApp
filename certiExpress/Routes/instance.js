import {assert, ethers} from "ethers";
import abi from './Assest/cert.json' assert {type:"json"}
import adderss from './Assest/deployed_addresses.json' assert {type:"json"}
import { Wallet } from "ethers";
import { WebSocketProvider } from "ethers";


//const provider = new ethers. JsonRpcProvider("https://eth-hoodi.g.alchemy.com/v2/J69y1XfWdTRWtSUkbf8eJfJNzu6EU69C");
const provider = new WebSocketProvider("wss://eth-sepolia.g.alchemy.com/v2/APzhthxxxVw7-boJ6VbeFixoc1M4olqr");
//export const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/")

// const signer = await provider.getSigner();
const wallet = new Wallet('76ca9f5e18190a67618d0d36090939a871be186827033efbf91ac6219210e46f', provider);

// console.log(adderss);
// console.log(abi);
// console.log(signer);

//instance of the contract for we need to pass 3 arguments are need 

export const contObject =new ethers.Contract(adderss["certModule#cert"],abi.abi,wallet)
//export const contObject =new ethers.Contract(adderss["certModule#cert"],abi.abi,signer);


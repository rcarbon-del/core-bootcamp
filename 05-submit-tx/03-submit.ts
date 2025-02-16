// 0x3b26E8DA9aDedAAe86a260b6354aC1855AA65C14

import path from 'path'
require('dotenv').config({ path: '.env' });

import {
  Hex,
  createWalletClient,
  getContract,
  http,
  publicActions,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import artifacts from "./submit.artifacts.json";

// Application Binary Interface
const { abi } = artifacts;

const privateKey = process.env.PRIVATE_KEY;
const account = privateKeyToAccount(`0x${privateKey}` as Hex);

(async () => {
  const client = createWalletClient({
    account,
    transport: http(process.env.API_URL),
  }).extend(publicActions);

  const contractAddress = '0x3b26E8DA9aDedAAe86a260b6354aC1855AA65C14';
  const contract = getContract({
    address: contractAddress,
    abi,
    client,
  });

  const tx = await contract.write.recordSubmission([
    'rcarbon-del',
    'Radge',
    '0x5C383eb10c5b58e00b4949161B38A5CC5976C039',
    '0xd0b73a8F555591ED198098761903aDafaC34c9C1'
    ]);    
  console.log('tx', tx);
})();
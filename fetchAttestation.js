import { EAS } from "@ethereum-attestation-service/eas-sdk";
import { ethers, getDefaultProvider } from "ethers";


const EASContractAddress = "0x4200000000000000000000000000000000000021";
const eas = new EAS(EASContractAddress);

// const provider = new ethers.JsonRpcProvider("https://sleek-bold-wind.base-mainnet.quiknode.pro/00a0a05164872187ea592d0c69906a4affe0be13/");
const provider = getDefaultProvider(8453)
eas.connect(provider);

// const uid = "0xfa0aa4edc00cb9d81c3c6d81c85754221a262874d8c28d0ffbfa6954f6581315";
const uid = '0x30366660c5de3beaf51d1158a33cccdd562669553f3f6bc6014495243fa2c9ac';
const attestation = await eas.getAttestation(uid);

console.log(attestation);
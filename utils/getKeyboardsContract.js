import { ethers } from "ethers";

import abi from "../utils/Keyboards.json";

const contractAddress = "0xE2369C04763d51e020BEf2E1679269C6d3Ea882D";
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}

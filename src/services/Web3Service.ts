import Web3, { AbiItem } from "web3";
import ABI from '../abi.json';

const CONTRACT_ADDRESS = `${process.env.REACT_APP_CONTRACT_ADDRESS}`;

const mint = async() => {
    if (!window.ethereum) throw new Error("No MetaMask found!");

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts();
    if (!accounts || !accounts.length) throw new Error("No account allowed!");
    alert(accounts[0]);

    const contract = new web3.eth.Contract(ABI as AbiItem[], CONTRACT_ADDRESS);
};

export default mint;
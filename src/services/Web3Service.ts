import Web3 from "web3";

const mint = async() => {
    if (!window.ethereum) throw new Error(`No MetaMask found!`);

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.requestAccounts();
    alert(accounts[0]);
};

export default mint;
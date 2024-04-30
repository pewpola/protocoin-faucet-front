const mint = async() => {
    if (!window.ethereum) {
        alert('Usuário não possui Carteira MetaMask')
    } else {
        alert('Usuário possui Carteira MetaMask')
    }
};

export default mint;
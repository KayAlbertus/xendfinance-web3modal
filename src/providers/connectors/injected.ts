const ConnectToInjected = async () => {
  let provider = null;
  if (typeof window.MadWallet !== "undefined") {
    provider = window.MadWallet;
    try {
      await provider.request({ method: "eth_requestAccounts" });
    } catch (error) {
      throw new Error("User Rejected");
    }
  } else if (window.ethereum) {
    provider = window.ethereum;

    try {
      await provider.request({ method: "eth_requestAccounts" });
    } catch (error) {
      throw new Error("User Rejected");
    }
   
  } else if (window.celo) {
    provider = window.celo;
  }
  else if(window.web3){
    provider = window.web3.currentProvider;
  }
   else {
    throw new Error("No Web3 Provider found");
  }
  return provider;
};

export default ConnectToInjected;

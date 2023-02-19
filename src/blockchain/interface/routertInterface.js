// import web3 from "../web3";
import ABI from "../abi/router.json";
import WalletConnectProvider from "@walletconnect/web3-provider";

const Web3 = require("web3");

export const contractAddress = "0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3";

async function ContratInterface(walletType) {
  let web3;

  if (walletType === "Trust_wallet") {
    const provider = new WalletConnectProvider({
      rpc: {
        //97: "https://bsc-dataseed.binance.org/",
         56: "https://bsc-dataseed.binance.org/",
      },
    });
    await provider.enable();

    web3 = new Web3(provider);
    return new web3.eth.Contract(ABI.abi, contractAddress);
  } else if (walletType === "Metamask") {
    web3 = new Web3(Web3.givenProvider);
  } else {
    const provider = new Web3.providers.HttpProvider(
      "https://bsc-dataseed.binance.org/"
    );
    web3 = new Web3(provider);
  }

  return new web3.eth.Contract(ABI.abi, contractAddress);
}

export default ContratInterface;

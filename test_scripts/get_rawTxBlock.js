const { ethers } = require("ethers");

// Connect to the Binance Smart Chain or Ethereum RPC endpoint
const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");

// Fetch the latest block
async function logLatestBlock() {
  try {
    const block = await provider.getBlock("latest", true); // 'true' to include full transaction details
    console.log("Raw Block Data:", block); // Log the entire raw block response
  } catch (error) {
    console.error("Error fetching the latest block:", error);
  }
}

logLatestBlock();

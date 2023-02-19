import React, { useState } from "react";
import { MineTokens } from "../blockchain/functions";

function MineTokens({ connectWallet, userAddress, }) {;

  return (
    <div>
        <button
          onClick={
            // !userAddress ? connectWallet : () => MineTokens(recipient, value)
             !userAddress ? connectWallet : () => MineTokens()
          }
          type="submit"
          className="button button--v1 exchange__button">
          {!userAddress ? "Connect Wallet" : "MINE SATROK"}
        </button>
      
    </div>
  );
}

export default MineTokens;
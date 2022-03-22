import { useEffect, useState } from "react";
import useSWR from "swr";

// keccak-256
const adminAddresses = {
  "0x746769432692ec0b39a73e4ea35d4de8e9b6eb7705d11b50065333c0d8ceda5a": true
};

export const handler = (web3, provider) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/accounts" : null),
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => {
        mutate(accounts[0] ?? null);
      });
  }, [provider]);

  return {
    account: {
      data,
      isAdmin: (data && adminAddresses[web3.utils.keccak256(data)]) ?? false,
      mutate,
      ...rest
    }
  };
};

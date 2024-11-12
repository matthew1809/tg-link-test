'use client'

import { useSocialAccounts } from "@dynamic-labs/sdk-react-core"


export default function LinkFarcaster() {
  const {
    linkSocialAccount,
    isProcessing,
    getLinkedAccountInformation,
  } = useSocialAccounts()


  async function linkFarcasterAccount() {
    console.log("isProcessing before linkSocialAccount", isProcessing)
    await linkSocialAccount("farcaster")
    console.log("isProcessing after linkSocialAccount", isProcessing)
    
    const pollInterval = 500;

    while (isProcessing) {
      console.log("isProcessing inside while", isProcessing)
      await new Promise(resolve => setTimeout(resolve, pollInterval));
    }
    console.log("isProcessing after while", isProcessing)
    const farcasterAccount = getLinkedAccountInformation("farcaster")
    console.log('account info', farcasterAccount)
  }

  return (
    <button variant="outline" className="px-6" onClick={() => linkFarcasterAccount()}>
        Link my Farcaster Account
    </button>
  )
}

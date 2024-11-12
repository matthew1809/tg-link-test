import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import Main from "./Main";


const App = () => (
  <DynamicContextProvider
    theme="auto"
    settings={{
      environmentId: "86e13cc5-debe-4109-a513-30a5ecdbc35f",
      walletConnectors: [EthereumWalletConnectors],
    }}
  >
    <Main />
  </DynamicContextProvider>
);

export default App;
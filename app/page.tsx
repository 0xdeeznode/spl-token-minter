import CreateMintForm from "@/components/CreateMintForm";
import CreateTokenAcc from "@/components/CreateTokenAcc";
import TokenMint from "@/components/TokenMint";
import WalletContextProvider from "@/components/sub/WalletContextProvider";

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WalletContextProvider>
        <CreateMintForm />
        <CreateTokenAcc />
        <TokenMint />
      </WalletContextProvider>
    </main>
  );
}

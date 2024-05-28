import CreateMint from "@/components/CreateMint";
import CreateTokenAcc from "@/components/CreateTokenAcc";
import TokenMint from "@/components/TokenMint";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CreateMint />
      <CreateTokenAcc />
      <TokenMint />
    </main>
  );
}

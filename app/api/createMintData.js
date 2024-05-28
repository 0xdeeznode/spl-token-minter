import { createMint } from "@solana/spl-token";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, clusterApiUrl } from "@solana/web3.js";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).end(); // Method Not Allowed
        return;
    }

    try {
        const connection = new Connection(clusterApiUrl("devnet"));
        const user = getKeypairFromEnvironment("SECRET_KEY");
        const tokenMint = await createMint(connection, user, user.publicKey, null, 8);
        res.status(200).json({ tokenMint: tokenMint.toString() });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create mint' });
    }
}

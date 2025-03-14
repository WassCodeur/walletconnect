import { http, createConfig } from 'wagmi'
import { base, mainnet } from 'wagmi/chains'
import { injected  } from 'wagmi/connectors'

const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID

export const config = createConfig({
    chains: [mainnet, base],
    connectors: [
        injected(),  
    ],
    
    transports: {
        [mainnet.id]: http(),
        [base.id]: http(),
    },
})
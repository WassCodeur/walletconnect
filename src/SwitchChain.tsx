import { useSwitchChain } from 'wagmi'

function SwitchChain() {
    const { chains, switchChain } = useSwitchChain()

    return (
        <div>
            {chains.map((chain) => (
                <button key={chain.id} onClick={() => switchChain({ chainId: chain.id })}>
                    {chain.name}
                </button>
            ))}
        </div>
    )
}

export { SwitchChain }
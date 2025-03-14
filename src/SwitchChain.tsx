import { useState } from 'react'
import { useSwitchChain } from 'wagmi'

function SwitchChain() {
    const { chains, switchChain } = useSwitchChain()
    const [index, setIndex] = useState(0)

    console.log(chains)

    return (
        <div>
            <select onChange={(e) => setIndex(parseInt(e.target.value))}>
                {chains.map((chain) => (
                    <option key={chain.id} value={chain.id}>
                        {chain.name}
                    </option>
                ))}
            </select>
            {index !== undefined && index > 0 && (
                <button onClick={() => switchChain({ chainId: index })}>Switch Chain</button >

            )}
        </div>
    )
}

export { SwitchChain }
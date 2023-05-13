
import { NetworkConfig, isNetworkConfig, ChainId, networks, findNetworkConfig } from '@0xsequence/network'

export const indexerURL = (network: string) => `https://fun-${network}-relayer.sequence.app`
export const relayerURL = (network: string) => `https://dev-${network}-indexer.sequence.app`
export const nodesURL = (network: string) => `https://fun-nodes.sequence.app/${network}`

const genUrls = (network: string) => {
  const rpcUrl = nodesURL(network)
  return {
    rpcUrl,
    relayer: {
      url: relayerURL(network),
      provider: {
        url: rpcUrl,
      }
    },
    indexerUrl: indexerURL(network)
  }
}

// Add default values for API, relayer and Indexer
export const NETWORKS: NetworkConfig[] = [
  {
    ...networks[ChainId.MAINNET],
    ...genUrls('mainnet'),
    isDefaultChain: true
  },
  {
    ...networks[ChainId.POLYGON],
    ...genUrls('polygon'),
  },
  {
    ...networks[ChainId.BSC],
    ...genUrls('bsc'),
  },
  {
    ...networks[ChainId.AVALANCHE],
    ...genUrls('avalanche'),
  },
  {
    ...networks[ChainId.ARBITRUM],
    ...genUrls('arbitrum'),
  },
  {
    ...networks[ChainId.ARBITRUM_NOVA],
    ...genUrls('arbitrum-nova'),
  },
  {
    ...networks[ChainId.OPTIMISM],
    ...genUrls('optimism'),
  },
  {
    ...networks[ChainId.POLYGON_ZKEVM],
    ...genUrls('polygon-zkevm'),
  },
  {
    ...networks[ChainId.GNOSIS],
    ...genUrls('gnosis'),
  },
  {
    ...networks[ChainId.GOERLI],
    ...genUrls('goerli'),
  },
  {
    ...networks[ChainId.POLYGON_MUMBAI],
    ...genUrls('mumbai'),
  },
  {
    ...networks[ChainId.BSC_TESTNET],
    ...genUrls('bsc-testnet'),
  },
  {
    ...networks[ChainId.AVALANCHE_TESTNET],
    // TODO: replace with node-gateway once we get it working
    rpcUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
    relayer: {
      url: relayerURL('avalanche-testnet'),
      provider: { url: 'https://api.avax-test.network/ext/bc/C/rpc' },
    },
    indexerUrl: indexerURL('avalanche-testnet')
  }
]

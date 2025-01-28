import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: '@ashenedelweiss',
  images: [
    {
      url: `${getServerSideURL()}/logo-dark.png`,
    },
  ],
  siteName: '@ashenedelweiss',
  title: '@ashenedelweiss',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}

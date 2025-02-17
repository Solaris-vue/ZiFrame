import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const NEXT_PUBLIC_URL = 'https://fungiframev3-o7vpmqeip-solarisvs-projects.vercel.app';

export async function generateMetadata(): Promise<Metadata> {
  const frameMetadata = getFrameMetadata({
    buttons: [
      {
        label: 'Visit Fungi',
        action: 'link',
        target: 'https://fungifungi.art'
      }
    ],
    image: {
      src: `${NEXT_PUBLIC_URL}/fungi-image.png`,
      aspectRatio: '1:1'
    },
    input: {
      text: 'Enter your wallet address'
    }
  });

  return {
    title: 'Fungi Frame',
    description: 'A Farcaster frame for fungifungi.art',
    openGraph: {
      title: 'Fungi Frame',
      description: 'A Farcaster frame for fungifungi.art',
      images: [`${NEXT_PUBLIC_URL}/fungi-image.png`],
    },
    other: {
      ...frameMetadata,
    },
  };
}

export default function Page() {
  return (
    <div>
      <h1>Fungi Frame</h1>
      <p>This is a Farcaster frame for fungifungi.art</p>
    </div>
  );
}

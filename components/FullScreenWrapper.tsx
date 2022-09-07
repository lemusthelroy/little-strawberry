import Head from "next/head";

const FullScreenWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <Head>
      <title>Purple Dash</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="bg-purple-200 min-h-screen flex flex-col items-center justify-center py-4">
      {children}
    </div>
  </>
);

export default FullScreenWrapper;

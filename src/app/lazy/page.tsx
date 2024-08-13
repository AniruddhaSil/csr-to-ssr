import dynamic from 'next/dynamic'

const Gifts = dynamic(() => import('@/layouts/gifts/Gifts'))

const Blaze = dynamic(() => import('@/layouts/blaze/Blaze'))

const Lazy = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const getTheme = async () => {
    if (!searchParams.domain) return null;

    const res = await fetch(searchParams.domain as string);
    if (!res.ok) return null;

    return res.json();
  };

  const theme = (await getTheme())?.data.theme.name;

  if (theme === "Gifts") return <Gifts />;

  if (theme === "Blaze") return <Blaze />;

  return (
    <main style={{
      backgroundColor: 'green',
      border: '2px solid black'
    }}>
      <h1>ServerLazyTeam</h1>
    </main>
  );
};

export default Lazy;

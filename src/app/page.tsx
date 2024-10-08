import Blaze from "@/layouts/blaze/Blaze";
import styles from "./page.module.css";
import Gifts from "@/layouts/gifts/Gifts";

export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
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
    <main className={styles.main}>
      <h1>ServerTeam</h1>
    </main>
  );
}

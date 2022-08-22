import Head from "next/head";

export default function Meta(props) {
  const { title, description, image } = props;
  return (
    <Head>
      <title>{title} | App</title>
      <meta name="description" content={description} />
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={image} />
    </Head>
  );
}

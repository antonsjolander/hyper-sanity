import { client } from "../../sanity/lib/client";
import { groq } from "next-sanity";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

export default function Page({ page }) {
	const imageProps = useNextSanityImage(client, page.image);
	console.log(imageProps);
	return (
		<div className="container mx-auto mt-5">
			<h1 className="text-2xl">{page.title}</h1>
			<p>{page.description}</p>
			<Image {...imageProps} alt={page.title} />
		</div>
	);
}

export const getStaticPaths = async () => {
	const paths = await client.fetch(
		groq`*[_type == "page" && defined(slug.current)][].slug.current`
	);

	return {
		paths: paths.map((slug) => ({ params: { slug } })),
		fallback: true, // false or "blocking"
	};
};

export const getStaticProps = async (context) => {
	const { slug = "" } = context.params;
	const page = await client.fetch(
		`
    *[_type == "page" && slug.current == $slug][0]`,
		{ slug }
	);

	return {
		props: {
			page,
		},
	};
};

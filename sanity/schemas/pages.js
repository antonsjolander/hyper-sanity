export const pages = {
	title: "Page",
	name: "page",
	type: "document",
	fields: [
		{
			title: "Slug",
			name: "slug",
			type: "slug",
			options: {
				source: "title",
			},
		},
		{
			title: "Title",
			name: "title",
			type: "string",
		},
		{
			title: "Description",
			name: "description",
			type: "string",
		},
		{
			title: "Image",
			name: "image",
			type: "image",
		},
	],
};

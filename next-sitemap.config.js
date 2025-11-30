/** @type {import('next-sitemap').IConfig} */

module.exports = {
	siteUrl: "https://neonhost.com.br/",
	generateRobotsTxt: true,
	additionalPaths: async (config) => [
		await config.transform(config, "/infraestrutura"),
	],
};

export default function sitemap() {
    return [
        {
            url: 'https://moshudmuktadir.pro.bd',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://moshudmuktadir.pro.bd/projects',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];
}
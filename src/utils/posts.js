import fm from 'front-matter';


const postFiles = import.meta.glob('../posts/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
})

function slugFromPath(path) {
    return path.split('/').pop().replace('.md', '')
}

export function getAllPosts() {
    const posts = Object.entries(postFiles).map(([path, rawContent]) => {
        const { attributes, body } = fm(rawContent)
        return {
            slug: slugFromPath(path),
            title: attributes.title,
            date: attributes.date,
            excerpt: attributes.excerpt,
            content: body,
        }
    }) 
    
    // Newest posts first
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date))
}


export function getPostBySlug(slug) {
    return getAllPosts().find(post => post.slug === slug)
}



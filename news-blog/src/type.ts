export interface ArticleProps {
    articl: Articles
}
export interface ArticlePageProps {
    articl: Articles
}
export interface ArticlesProps {
    limit?: number | null | undefined,
    offset?: number | null | undefined,
    search?: string | null | undefined
}

export interface PaginatedArticlesList {
    count: number,
    next: string,
    previous: string,
    results: Articles[],
}

export interface Articles {

    id: number,
    title: string,
    url: string,
    image_url: string,
    news_site: string,
    summary: string,
    published_at: string,
    updated_at: string,
    featured: boolean,
    launches: [
        {
            launch_id: string,
            provider: string
        }
    ],
    events: [
        {
            event_id: number | string,
            provider: string
        }
    ]
}

export interface ArticlesPageStore {

    articles: Articles[],
    loadingPin: boolean,
    search: string | null,
    offset: number,
    limit: number,
    total: number,

}
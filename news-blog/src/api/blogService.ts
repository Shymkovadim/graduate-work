import { ArticlId, Articles, ArticlesProps, CreareArticleProps, PaginatedArticlesList } from "../type";
function getBasicHeaders() {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');

    return headers;
}


export const blogServise = {
    async getArticles(props?: ArticlesProps): Promise<PaginatedArticlesList> {
        let queryParams = '';
        if (props?.limit) {
            if (queryParams.length === 0) {
                queryParams += '?limit=' + props.limit;
            } else {
                queryParams += '&limit=' + props.limit;
            }
        }
        if (props?.offset) {
            queryParams += '&offset=' + props.offset
        }
        if (props?.search) {
            if (queryParams.length === 0) {
                queryParams += '?search=' + props.search
            } else {
                queryParams += '&search=' + props.search
            }
        }

        const response = await fetch(`v4/articles/${queryParams}`,
            {
                method: "GET",
                headers: getBasicHeaders()
            })

        if (response.ok) {
            return response.json()
        } else {
            const text = await response.text()
            throw new Error(text)
        }
    },
    async getArticlId(props?: ArticlId): Promise<Articles> {
        let queryParams = '';
        if (props?.id !== undefined) {
            queryParams += props.id
        }

        const response = await fetch(`v4/articles/${queryParams}/`,
            {
                method: "GET",
                headers: getBasicHeaders()
            })

        if (response.ok) {
            return response.json()
        } else {
            const text = await response.text()
            throw new Error(text)
        }
    },
    async createArticl(props: CreareArticleProps) {
        const response = await fetch('v4/articles/', {
            method: 'POST',
            body: JSON.stringify({
                ...props,
                headers: getBasicHeaders()
            }),

        })
        if (response.ok) {
            return response.json()
        } else {
            const text = await response.text()
            alert(text)
            // throw new Error(text)
        }
    },


    async getNews(props: string) {


        const response = await fetch(props,
            {
                method: "GET",
                credentials: "include"

            })

        return response.json()
    },
}
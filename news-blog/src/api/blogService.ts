import { ArticlesProps, PaginatedArticlesList } from "../type";


export const blogServise = {
    async getArticles(props?: ArticlesProps): Promise<PaginatedArticlesList> {
        let queryParams = '';
        if (props?.limit !== undefined) {
            if (queryParams.length === 0) {
                queryParams += '?limit=' + props.limit;
            } else {
                queryParams += '$limit=' + props.limit;
            }
            if (props.offset) {
                queryParams += '&offset=' + props.offset
            }
            if (props.search) {
                if (queryParams.length === 0) {
                    queryParams += '?search=' + props.search
                } else {
                    queryParams += '$search=' + props.search
                }
            }
        }
        const response = await fetch(`v4/articles/${queryParams}`,
            {
                method: "GET",

            })

        return response.json()
    },
}
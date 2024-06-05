export interface Pagination {
    skip: number
    limit: number
}

export interface PaginationQuery {
    page?: string
    per_page?: string
}
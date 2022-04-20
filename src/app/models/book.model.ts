export interface BookModel {
    id?: string;
    categoryId?: string;
    name?: string;
    isbn?: string;
    author?: string;
    pathImage?: string;
}

export interface CreateBookModel {
    categoryId?: string;
    name?: string;
    isbn?: string;
    author?: string;
    pathImage?: string;
}


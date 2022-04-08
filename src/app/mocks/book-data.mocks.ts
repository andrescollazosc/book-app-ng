import { BookModel } from "../models/book.model";

export class BookDataMock {
    /**
     * static getBooks
  */
    public static getBooks():BookModel[] {

        return[
            {
            name: '100 Año de soledad',
            author: 'Gabriel Garcia Marquez',
            // publicationDate: '10-01-1970',
            pathImage: 'https://imagessl8.casadellibro.com/a/l/t7/08/9788497592208.jpg'
        }
        ,
        {
            name: 'Elon Musk',
            author: 'Ashley Vancee',
            //publicationDate: '10-01-1970',
            pathImage: 'https://images-na.ssl-images-amazon.com/images/I/51atqlRBqyL._SX328_BO1,204,203,200_.jpg'
        },
        {
            name: 'Salvese Quien Pueda',
            author: 'Andres Oppenheimer',
            //publicationDate: '10-01-1970',
            pathImage: 'https://www.andresoppenheimer.com/wp-content/uploads/2018/08/9789873752896.jpg'
        },
        {
            name: 'Clean Code',
            author: 'Robert C Martin',
            //publicationDate: '10-01-1970',
            pathImage: 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg'
        }
        ,
        {
            name: '100 Año de soledad',
            author: 'Gabriel Garcia Marquez',
            //publicationDate: '10-01-1970',
            pathImage: 'https://imagessl8.casadellibro.com/a/l/t7/08/9788497592208.jpg'
        }
    
    ];
        
    }
}
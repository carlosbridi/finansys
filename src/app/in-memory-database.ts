import { InMemoryDbService }  from "angular-in-memory-web-api"

import {Category} from './pages/categories/shared/category.model'

export class InMemoryDatabase implements InMemoryDbService {

    createDb(){
        const categories: Category[] = [
            {id: 1, name: "Moradia", description: "Pagamentos de conta da casa"},
            {id: 2, name: "Saúde", description: "Gastos com saúde"},
            {id: 3, name: "Salário", description: "Recebimento do salário"},
            {id: 4, name: "Lazer", description: "Gastos diversos"},
            {id: 5, name: "Freelas", description: "Trabalhos como freelancer"}
        ];

        return {categories}
    }


}
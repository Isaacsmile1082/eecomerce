import { TableClients } from "../components/TableClients";
import { TableEmployers } from "../components/Table";
import { TableBills } from "../components/TableBills";
import { TableProducts} from "../components/TableProducts";

export const routes = [
    {
        exact: true,
        element: <TableEmployers/>,
        path: '/employers' 
    },
    {
        exact: true,
        element: <TableClients/>,
        path: '/clients' 
    },
    {
        exact: true,
        element: <TableBills/>,
        path: '/bills' 
    },
    {
        exact: true,
        element: <TableProducts/>,
        path: '/products' 
    },
]

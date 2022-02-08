import Customers from './Customers';
import Packages from './Packages';
import Invoices from './Invoices';


const Routes = [
      {
        path: '/customers',
        sidebarName: 'Customers',
        component: Customers
      },
      {
        path: '/packages',
        sidebarName: 'Packages',
        component: Packages
      },
      {
        path: '/invoices',
        sidebarName: 'Invoices',
        component: Invoices
      }


      
    ];


export default Routes;
import { DrawerItem } from '../ts';
import { ROUTES } from './routes';
import diamond from '../assets/diamond.png';
import gold from '../assets/gold.png';
import silver from '../assets/silver.png';


export const DRAWER_LIST: DrawerItem[] = [
  {
    route: ROUTES.main,
    literal: 'Dashboard',
    Icon: diamond,
  },
  {
    route: ROUTES.orders,
    literal: 'Orders',
    Icon: gold,
  },
  {
    route: ROUTES.customers,
    literal: 'Customers',
    Icon: silver,
  }
];

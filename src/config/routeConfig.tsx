import UniversalSearchPage from '../pages/UniversalSearchPage';
//import FAQsPage from '../pages/FAQsPage';
import { universalResultsConfig } from './universalResultsConfig';
//import LocationsPage from '../pages/LocationsPage'; 
import ProductPage from '../pages/ProductPage';
//import ArticlesPage from '../pages/ArticlesPage';
//import BlogPages from '../pages/BlogPages';
//import RewardsPages from '../pages/RewardsPages';



/**
 * This defines the pasth and page used for showing a vertical on front-end.
 */
export const routeConfig = [
  {
    path: '/',
    exact: true,
    page: <ProductPage verticalKey='products' />
  },
  // {
  //   path: '/faqs',
  //   page: <FAQsPage verticalKey='faqs'/>
  // },
  // {
  //   path: '/locations',
  //   page: <LocationsPage verticalKey="locations" />
  // },

  // {
  //   path: '/articles',
  //   page: <ArticlesPage verticalKey='articles' />
  // },

  // {
  //   path: '/products',
  //   page: <ProductPage verticalKey='products' />
  // },
  // {
  //   path: '/blogs',
  //   page: <BlogPages verticalKey='blogs' />
  // },
  // {
  //   path: '/member_options',
  //   page: <RewardsPages verticalKey='member_options' />
  // }
];
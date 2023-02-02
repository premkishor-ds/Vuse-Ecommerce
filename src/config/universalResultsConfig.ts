//import { StandardCard } from '../components/cards/StandardCard';
import { ProductsCard } from '../components/cards/ProductsCard';
//import { ArticlesCard } from '../components/cards/ArticlesCard';
//import { FaqCard } from '../components/cards/FaqCard';
import { VerticalConfig } from '../components/UniversalResults';
//import { BlogCards } from '../components/cards/BlogCards';
//import LocationSection from '../sections/LocationSection';
//import StandardSection from '../sections/StandardSection';
//import { MemberCards } from '../components/cards/MemberCards';



export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {
// 
  products: {
    label: 'Products',
    viewAllButton: true,
    cardConfig: {
      CardComponent: ProductsCard,
      showOrdinal: false
    }
  },
  // articles: {
  //   label: 'Articles',
  //   viewAllButton: true,
  //   cardConfig: {
  //     CardComponent: ArticlesCard,
  //     showOrdinal: false
  //   }
  // },
  // faqs: {
  //   label: 'FAQs',
  //   viewAllButton: true,
  //   cardConfig: {
  //     CardComponent: FaqCard,
  //     showOrdinal: false
  //   }
  // },
  // blogs: {
  //   //SectionComponent: StandardSection,
  //   label: 'Blogs',
  //   viewAllButton: true,
  //   cardConfig: {
  //     CardComponent: BlogCards,
  //     showOrdinal: false
  //   }
  // },
  // member_options: {
  //   //SectionComponent: StandardSection,
  //   label: 'Member Options',
  //   viewAllButton: true,
  //   cardConfig: {
  //     CardComponent: MemberCards,
  //     showOrdinal: false
  //   }
  // },
}
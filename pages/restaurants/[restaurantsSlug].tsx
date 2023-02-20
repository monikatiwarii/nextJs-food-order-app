import { GetServerSideProps, NextPage } from 'next';
import Header from '../../src/components/header/Header';
import MaxWidthWrapper from '../../src/components/common/MaxWidthWrapper';
import Menus from '../../src/components/restaurantDetails/Menus';
import RestaurantHeader from '../../src/components/restaurantDetails/RestaurantHeader';
import FoodType from '../../src/components/restaurantDetails/FoodType';
import RestaurantDetails from '../../src/components/restaurantDetails/RestaurantDetails';
// import restaurant from '../../src/data/data';
import { useRouter } from 'next/router';
import { restaurants } from '../../src/data/data';
import { restaurantType } from '../../src/types/constants/restaurant.type';

interface RestaurantDetailProps {
  selectedRestaurant: restaurantType | undefined;
}
const RestaurantDetail: NextPage<RestaurantDetailProps> = ({ selectedRestaurant }) => {
  return (
    <>
      <Header />
      <RestaurantHeader />
      <MaxWidthWrapper>
        <RestaurantDetails selectedRestaurant={selectedRestaurant} />
        <Menus />
        <FoodType selectedRestaurant={selectedRestaurant} />
      </MaxWidthWrapper>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const restaurantSlug = context.query.restaurantsSlug;

  const restaurant = restaurants.find(data => data.slug === restaurantSlug);

  // Find restaurant from the list of restaurants and send it via props.
  return { props: { selectedRestaurant: restaurant } };
};

export default RestaurantDetail;

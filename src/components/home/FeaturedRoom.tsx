import { Link } from 'react-router-dom';

import { Button } from '../ui/button';
import SectionHeading from '../ui/SectionHeading';
import { Rating } from '@smastrom/react-rating';

const FeaturedRoom = () => {
  return (
    <section className="px-1 py-10 border-b md:px-10 md:py-20">
      <div className="flex justify-center">
        <SectionHeading heading="Featured Room" />
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <FeaturedCard key={item} />
        ))}
      </div>

      <div className="flex justify-end mt-4">
        <Link to="/products">
          <Button variant={'outline'}>See More...</Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedRoom;

const FeaturedCard = () => {
  return (
    <div className="min-h-[350px] bg-[#e9effd] border p-5 rounded flex flex-col gap-4 hover:shadow-lg hover:scale-[0.98] transition-transform duration-300 ease-in-out">
      <div>
        <img
          className="h-[160px] object-cover w-full rounded"
          src="https://kono.store/cdn/shop/files/GMK_Firefly_-_Prophet_1_3be17f6c-b936-40db-b561-2fdc6463a6f0_1600x600_crop_center.png?v=1631814814&quot"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-between h-full gap-2">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-[#212529]">
            {`Title name`}
          </h3>
          <p>Brand: {`Brand name`}</p>
          <p>Stock: {`25`}</p>
          <p>Price: $ {`26`}</p>

          <Rating style={{ maxWidth: 120 }} value={5} readOnly />
        </div>

        <div>
          <Link to={`/product-details/123`}>
            <Button className="w-full">Show details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

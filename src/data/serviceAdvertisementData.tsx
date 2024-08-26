import { FaCaravan } from 'react-icons/fa';
import {
  FaMoneyCheck,
  FaMoneyCheckDollar,
  FaRegMessage,
} from 'react-icons/fa6';

type ServiceBenefit = {
  id: number;
  icon: JSX.Element;
  heading: JSX.Element;
  desc: JSX.Element;
  iconGray: JSX.Element;
  background: string;
};

export const serviceAdvertisementData: ServiceBenefit[] = [
  {
    id: 1,
    icon: <FaCaravan className="size-10 text-[#495057]" />,
    heading: <h4 className="font-semibold">Free shipping</h4>,
    desc: <p className="text-[10px]">Orders over $600</p>,
    iconGray: (
      <FaCaravan className="absolute top-1 right-1 size-12 text-[#868e96] opacity-10" />
    ),
    background: '#fff9db',
  },
  {
    id: 2,
    icon: <FaMoneyCheck className="size-10 text-[#495057]" />,
    heading: <h4 className="font-semibold">Quick Payment</h4>,
    desc: <p className="text-[10px]">100% secure</p>,
    iconGray: (
      <FaMoneyCheck className="absolute top-1 right-1 size-12 text-[#868e96] opacity-10" />
    ),
    background: '#e7f5ff',
  },

  {
    id: 3,
    icon: <FaMoneyCheckDollar className="size-10 text-[#495057]" />,
    heading: <h4 className="font-semibold">Big Cashback</h4>,
    desc: <p className="text-[10px]">Over 40% Cashback</p>,
    iconGray: (
      <FaMoneyCheckDollar className="absolute top-1 right-1 size-12 text-[#868e96] opacity-10" />
    ),
    background: '#fff5f5',
  },
  {
    id: 4,
    icon: <FaRegMessage className="size-10 text-[#495057]" />,
    heading: <h4 className="font-semibold">24/7 Support</h4>,
    desc: <p className="text-[10px]">Ready For You</p>,
    iconGray: (
      <FaRegMessage className="absolute top-1 right-1 size-12 text-[#868e96] opacity-10" />
    ),
    background: '#d0ebff',
  },
];

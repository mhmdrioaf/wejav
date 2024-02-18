type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  profile_picture: string | null;
  created_at: Date;
  updated_at: Date;
  role: USER_ROLE;
};

type TProduct = {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  seller_id: string;
  seller: TSeller;
};

type TSeller = TUser & {
  products: TProduct[];
};

type USER_ROLE = "ADMIN" | "SELLER" | "CUSTOMER";

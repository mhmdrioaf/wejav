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
};

type TSeller = TUser & {
  products: TProduct[];
};

enum USER_ROLE {
  ADMIN = "ADMIN",
  SELLER = "SELLER",
  CUSTOMER = "CUSTOMER",
}

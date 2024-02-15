import { user, product } from "@/db/schema";

type TUser = typeof user.$inferSelect;
type TProduct = typeof product.$inferSelect & {
  seller: Pick<TUser, "email" | "user_name" | "profile_picture">;
};

import { relations } from "drizzle-orm";
import {
  date,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const USER_ROLE = pgEnum("USER_ROLE", [
  "ADMIN",
  "SELLER",
  "CUSTOMER",
  "DRIVER",
]);

export const user = pgTable("user", {
  user_id: serial("user_id").primaryKey(),
  user_name: varchar("user_name").notNull(),
  email: varchar("email").notNull(),
  password: varchar("password").notNull(),
  profile_picture: text("profile_picture"),
  created_at: date("created_at").notNull().default("now()"),
  updated_at: date("updated_at").notNull().default("now()"),
  role: USER_ROLE("role").notNull().default("CUSTOMER"),
});

export const product = pgTable("product", {
  id: serial("id").primaryKey(),
  title: varchar("title").notNull(),
  description: varchar("description").notNull(),
  price: integer("price").notNull().default(0),
  images: text("images").notNull().array(),
  seller_id: serial("seller_id")
    .notNull()
    .references(() => user.user_id, {
      onDelete: "cascade",
    }),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  user_id: serial("user_id")
    .notNull()
    .references(() => user.user_id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});

export const sellerRelations = relations(user, ({ many, one }) => ({
  products: many(product),
  session: one(session),
}));

export const productRelations = relations(product, ({ one }) => ({
  seller: one(user),
}));

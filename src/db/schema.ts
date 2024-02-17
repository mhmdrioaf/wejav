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
  id: text("user_id").primaryKey(),
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
  seller_id: text("seller_id")
    .notNull()
    .references(() => user.id, {
      onDelete: "cascade",
    }),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
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

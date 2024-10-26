import { faker } from "@faker-js/faker";

export const products = Array.from({ length: 10 }, () => ({
  _id: faker.string.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: faker.commerce.price(),
  image: [
    faker.image.urlLoremFlickr({
      category: "clothes",
    }),
  ],
  category: faker.commerce.department(),
  subCategory: "Clothing",
  sizes: ["S", "M", "L"],
  date: Date.now(),
  bestseller: faker.datatype.boolean(),
}));
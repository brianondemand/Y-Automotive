import { pgTable, serial, varchar, json, integer } from "drizzle-orm/pg-core";

export const CarListing = pgTable('carListing', {
    id: serial('id').primaryKey(),
    listingTitle: varchar('listingTitle'),
    tagline: varchar('tagline'),
    originalPrice: varchar('originalPrice'),
    sellingPrice: varchar('sellingPrice').notNull(),
    category: varchar('category').notNull(),
    condition: varchar('condition').notNull(),
    make: varchar('make').notNull(),
    model: varchar('model').notNull(),
    year: varchar('year').notNull(),
    driveType: varchar('driveType').notNull(),
    transmission: varchar('transmission').notNull(),
    fuelType: varchar('fuelType').notNull(),
    mileage: varchar('mileage').notNull(),
    engineSize: varchar('engineSize'),
    cylinder: varchar('cylinder'),
    color: varchar('color').notNull(),
    door: varchar('door').notNull(),
    vin: varchar('vin'),
    offerType: varchar('offerType'),
    listingDescription: varchar('listingDescription').notNull(),
    features: json('features'),
    createdBy:varchar('createdBy').notNull(),
    userName:varchar('userName').notNull().default('Y Automotive'),
    userImageUrl:varchar('userImageUrl').default('https://firebasestorage.googleapis.com/v0/b/y-automotive-35346.appspot.com/o/car-images%2F1730340463680.png?alt=media&token=2ecde64a-8dbf-4f6c-88fb-131f07f9c309'),
    postedOn:varchar('postedOn')
});

export const CarImages = pgTable('carImages', {
    id: serial('id').primaryKey(),
    imageUrl: varchar('imageUrl').notNull(),
    carListingId: integer('carListingId').notNull().references(() => CarListing.id)
  });

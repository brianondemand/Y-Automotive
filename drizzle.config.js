/** @type { import("drizzle-kit").Config} */
export default{
    schema: './configs/schema.js',
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:cT8qbBuWo5RP@ep-super-wind-a5h8a81g.us-east-2.aws.neon.tech/automotive_db?sslmode=require',
    },
  };
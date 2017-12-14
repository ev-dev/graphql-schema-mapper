# Write Your Schema Once
Reduce redundancy in your backend... If you are using an ORM/ODM (like Sequelize, Mongoose, Bookshelf, Knex, TypeORM, etc...) and creating a GraphQL API, you are often writting similar logic twice. 
In most common ORMs, database model definitions overlap with the logic defined in a GraphQL Schema and these libraries usually have specific APIs that differ amoung implementations and are likely not the easiest to work with. 

The GraphQL SDL on the other hand, is a very concise and clear way of defining a schema, and is fully described in the evolving GraphQL specification. Using a GSM (GraphQL Schema Mapper) like this tool can often eliminate a lot of repeated code. 

There are counter arguments to this philosphy, namely that by defining this logic twice you are being much more specific as to what your API needs are and what your database storage needs are.


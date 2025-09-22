// Initialize MongoDB with okteto user and database
db = db.getSiblingDB('okteto');

db.createUser({
  user: 'okteto',
  pwd: 'okteto',
  roles: [
    {
      role: 'readWrite',
      db: 'okteto'
    }
  ]
});

print('Created okteto user and database successfully');
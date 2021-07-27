
node version 14

git clone https://github.com/Abedeen1/ExpressJs-Swagger-Auto.git

cd ExpressJs-Swagger-Auto

npm install

npm run dev

http://localhost:3000/api-docs



Response is empty
```typescript
{
  summary: path,
  consumes: ['application/json'],
  parameters: params.map(p => ({
    name: p,
    in: 'path',
    required: true,
  })) || [],
  responses: {},
  tags: matchingTags(tagsSpecs || [], path)
};
```

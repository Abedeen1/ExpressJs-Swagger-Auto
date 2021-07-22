
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

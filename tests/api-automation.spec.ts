import { test, expect } from '@playwright/test';

// URL
const BASE_URL = 'https://jsonplaceholder.typicode.com';

test('CRUD : Automation API Test', async ({ request }) => {
  
  const createResponse = await request.post(`${BASE_URL}/posts`, {
    data: {
      title: 'Automation Test',
      body: 'Body Test',
      userId: 1,
    },
  });

  expect(createResponse.status()).toBe(201);

  const createData = await createResponse.json();
  console.log('Created Post:', createData);

  const newPostId = createData.id; 
  
  const getResponse = await request.get(`${BASE_URL}/posts/1`); 
  expect(getResponse.ok()).toBeTruthy();
  
  const getData = await getResponse.json();
  expect(getData).toHaveProperty('id');


  const updateResponse = await request.patch(`${BASE_URL}/posts/1`, {
    data: {
      title: 'UPDATED: Modified Title',
    },
  });

  expect(updateResponse.status()).toBe(200);
  const updateData = await updateResponse.json();

  expect(updateData.title).toBe('UPDATED: Modified Title');
  
  expect(updateData.userId).toBe(getData.userId);

  const deleteResponse = await request.delete(`${BASE_URL}/posts/1`);
  expect(deleteResponse.status()).toBe(200); 

  const verifyDeleteResponse = await request.get(`${BASE_URL}/posts/1`);
  
  console.log(' Verify Delete Status (Test API):', verifyDeleteResponse.status());
});
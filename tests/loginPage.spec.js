import test from '../support/fixture/objectFixture';

test.describe('Test script of login page', () => {

    test('Navigate to login page ', async ({ login }) => {
        await login.navigate_to_landing_page();
        
    })
      
})

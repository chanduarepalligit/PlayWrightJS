import {test,expect} from '@playwright/test';
test('independent test case',async({page})=>{
    console.log("independent test case")

});
//test.describe is to create couple on test cases under one group tag
//test.one --> to execute that particular test case
//test.skip --> to skip that particular test case
//test.fail --> to fail test case
//test.fixme --> it will skip failed test cases
//test.slow --> it will wait for 3* of default waiting time
test.describe('Group1',()=>{
    test.fixme('test case one',async({page})=>{
        console.log("test case one")
        expect(1).toBe(0)
    });
    test('test case two', async({page})=>{
        test.slow()
        console.log("test case two")
        await new Promise(resolve=>setTimeout(resolve,35000)) // explicitly waits for 35secs
        console.log("Prints after 32 seconds")

    });
    test('test case three', async({page})=>{
        console.log("test case three")
    });
});

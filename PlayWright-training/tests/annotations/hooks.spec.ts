import{test,expect} from '@playwright/test'
test.describe('Group1',()=>{
    test("test case one", async({page})=>{
        console.log("test case one")
    });
    test('test case two', async({page})=>{
        console.log("test case two")
    });
    test('test case three', async({page})=>{
        console.log("test case three")
    });
});
test.describe('Group2',()=>{
    test.beforeAll(async()=>{
        console.log("before all")
    })
    test.afterAll(async()=>{
        console.log("after all")
    })
    test.beforeEach(async()=>{
        console.log("before each")
    })
    test.afterEach(async()=>{
        console.log("after each")
    })
    test("test case one", async({page})=>{
        console.log("test case one")
    });
    test('test case two', async({page})=>{
        console.log("test case two")
    });
    test('test case three', async({page})=>{
        console.log("test case three")
    });
});
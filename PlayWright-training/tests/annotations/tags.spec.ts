import { test, expect } from '@playwright/test';

test('test case one', {tag:'@smoke'}, async ({ page }) => {
    console.log("test case one")
});
test('test case two',{tag:'@sanity'}, async ({ page }) => {
    console.log("test case two")

});
test('test case three',{tag:'@regression'}, async ({ page }) => {
    console.log("test case three")
});
test('test case four',{tag:['@smoke','@regression']}, async ({ page }) => {
    console.log("test case four")
});
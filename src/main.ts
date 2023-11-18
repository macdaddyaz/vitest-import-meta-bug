/// <reference types="vitest/importMeta" />
function addTheseThings(a: number, b: number): number {
    return a + b;
}

if (import.meta.vitest) {
    const {describe, expect, it} = import.meta.vitest;

    describe("addTheseThings", () => {
        it("should add things", () => {
            expect(addTheseThings(5, 10)).toBe(15);
        });
    });
}

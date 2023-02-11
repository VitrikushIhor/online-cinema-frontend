

import generateSlug from '@/utils/string/generateSlug';
import {onlyText} from '@/utils/string/clearText';

describe('Test GenerateSlug', () => {

	test("True Value",()=>{
expect(generateSlug("Keanu Reeves")).toBe("keanu-reeves")
	})
	test("False Value",()=>{
		expect(generateSlug("Keanu Reeves")).not.toBe("keanu Reeves")
	})
	test("Not null",()=>{
		expect(generateSlug("Keanu Reeves")).not.toBeNull()
	})
	test("Not should return 1",()=>{
		expect(generateSlug("1")).not.toBe(1)
	})
})

describe('Test OnlyText', () => {

	test("Should return Keanu...",()=>{
		expect(onlyText("Keanu Reeves",5)).toBe("Keanu...")
	})

	test("No return an empty string",()=>{
		expect(onlyText("",1)).toBe("...")
	})

})
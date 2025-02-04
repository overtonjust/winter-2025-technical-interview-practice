import { calculateDiscountPrice } from "./warmup";
import {describe, expect, test} from '@jest/globals';


describe( 'calculateDiscountPrice', () => {
    test('arguements should be two numbers', () => {
        const wrapper = () => {
            calculateDiscountPrice('bob', 2)
        }
        expect(wrapper).toThrow();
    })

    test('should return a number', () => {
        const wrapper = () => {
           const result = typeof calculateDiscountPrice(70,3);
           return result
        }

        expect(wrapper()).toBe('number')
    })

    test('should calculate the proper price given a discount', () => {
        expect(calculateDiscountPrice(70,3)).toBe(67.9)
    })

    test('should return price if there is no discount', () => {
        expect(calculateDiscountPrice(50,0)).toBe(50)
    })

})
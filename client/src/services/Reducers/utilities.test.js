
import {fromJS} from "immutable"

import {removeItemInList, insertItemInList} from "./utilities"

describe("Store Utilities", () => {
    it("should have removed an item from the list", () => {
        let original = fromJS([
            {
                id: 1, 
                message: "Test"
            }, {
                id: 2, 
                message: "Test 2"
            }
        ])
        let newList = removeItemInList(original, 1)
        expect(newList.size).toBe(1)
        
        expect(newList.get(0).get('id')).toBe(2)
    })

    it("should add a new item to the list", () => {
        let original = fromJS([
            {
                id: 1, 
                message: "Test"
            }, {
                id: 2, 
                message: "Test 2"
            }
        ])
        let newItem = fromJS({
            id: 3, 
            message: "Test 3"
        })
        let finalList = insertItemInList(original, newItem)
        expect(finalList.size).toBe(3)
    })
    
    it("should NOT add a new item to the list", () => {
        let original = fromJS([
            {
                id: 1, 
                message: "Test"
            }, {
                id: 2, 
                message: "Test 2"
            }
        ])
        let newItem = fromJS({
            id: 2, 
            message: "Test 2"
        })
        let finalList = insertItemInList(original, newItem)
        expect(finalList.size).toBe(2)
    })

})
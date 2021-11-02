import {ActionType, div, mult, sub, sum} from "./tasks";

test('sum',()=> {
    //1. вводные данные
    const salary = 100
    const add = 20
    //2  выполнение
    const result = sum(salary,add)

    //3 проверка
    expect(result).toBe(120)

})
test('mult',()=> {
    expect(mult(100,0.5)).toBe(50)
})
test('sub',()=> {
    expect(sub(100,10)).toBe(90)
})
test('div',()=> {
    expect(div(100,2)).toBe(50)
})

test('sum salary reducer ', () => {
    const salary = 100
    const action: ActionType = {
        type:  'sum' || 'mult' || 'sub' || 'div',
        payload: 10
    }
    expect(div(100,10)).toBe(10)
    expect(sub(100,10)).toBe(90)
    expect(mult(100,10)).toBe(1000)
    expect(sum(100,10)).toBe(110)
})
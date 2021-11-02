const salary: number = 100;

// +, *,
export const sum = (salary: number, a: number) => salary + a
export const mult = (salary: number, a: number) => salary * a
export const sub = (salary: number, a: number) => salary - a
export const div = (salary: number, a: number) => salary / a

//action type,

export type ActionType = {
    type: 'sum' | 'mult' | 'sub' | 'div'
    payload?: number
}

export const salaryReducer = (salary: number, action: ActionType) => {
    switch (action.type) {
        case 'sum':
            return action.payload && salary + action.payload
        case 'mult':
            return action.payload && salary * action.payload
        case 'sub':
            return action.payload && salary - action.payload
        case 'div':
            return action.payload && salary / action.payload
        default:
            return salary
    }
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'


const initialState = {
    status: 'idle' as RequestStatusType,
    isError: 'error' as string | null
}

export type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, isError: action.isError}
        default:
            return state
    }
}

type ActionsType = ReturnType<typeof setAppStatus>
| ReturnType<typeof setAppError>

export const setAppStatus = (status: RequestStatusType) => ({
    type: 'APP/SET-STATUS',
    status
}) as const
export const setAppError = (isError: string | null) => ({
    type: 'APP/SET-ERROR',
    isError
}) as const



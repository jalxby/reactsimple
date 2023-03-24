const SET_COLLAPSED = 'SET-COLLAPSED'
type ActionType = CollapsedActionType
export type StateType = {
    collapsed: boolean
}
export const collapsedReducer = (state: StateType, action: ActionType|any): StateType => {
    switch (action.type) {
        case SET_COLLAPSED: {
            return {...state, collapsed: !state.collapsed}
        }
        default: {
            throw new Error('Action incorrect!')
        }
    }
}


type CollapsedActionType = ReturnType<typeof CollapsedAC>
export const CollapsedAC = () => {
    return {type: SET_COLLAPSED} as const
}
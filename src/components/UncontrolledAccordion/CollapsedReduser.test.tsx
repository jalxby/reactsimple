import {CollapsedAC, collapsedReducer, StateType} from "./CollapsedReducer";

test('collapsed reducer test', () => {
    const state: StateType = {
        collapsed: true
    }
    const newState = collapsedReducer(state, CollapsedAC())
    const newState2 = collapsedReducer(newState, CollapsedAC())
    expect(newState.collapsed).toBe(false)
    expect(newState2.collapsed).toBe(true)

})

test('unexpected action causes an error', () => {
    const state: StateType = {
        collapsed: true
    }
    expect(() => {
        collapsedReducer(state, {type: 'SOME-ACTION'})
    }).toThrowError('Action incorrect!')

})
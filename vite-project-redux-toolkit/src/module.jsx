import { createSlice } from '@reduxjs/toolkit'

/**
 * 1. 액션 생성 함수와 리듀서
 * 
 * createSlice를 사용하면 액션 함수와 리듀서를 동시에 만들 수 있기 때문에 액션 타입을 따로 선언하지 않아도 됩니다.
 * slice를 만들면 counterSlice.actions는 액션 생성 함수들이 들어있는 객체를, counterSlice.reducer는 리듀서 함수를 가리킵니다.
 * 
 * 리듀서와 액션 함수가 동시에 만들어지기 때문에 액션 타입을 따로 선언할 필요가 없는데요.
 * 만약 액션 타입을 조회해야 할 일이 생기면 액션 함수의 type 필드를 확인하면 됩니다. 
 * (예: increase.type)
 * 
 * 
 * 2. slice의 이름과 액션 타입
 * 
 * slice를 만들때는 name을 지정해야 합니다.
 * 여기서 작성한 name은 액션 타입이 만들어질 때 name/액션 이름 형태로 사용됩니다.
 * 예를 들어 현재 slice의 이름이 counter이므로, increase의 액션 타입은 counter/increase가 되겠지요.
 * 
 * increaseBy 리듀서 메서드를 보면 action.payload라는 값을 사용했습니다.
 * 
 * 
 * 3. 액션의 payload
 * 
 * Redux Toolkit에서는 액션에 추가로 넣어줄 값의 이름이 payload로 통일되며, 
 * 이는 액션 생성 함수의 파라미터를 통해 정해집니다.
 * increaseBy(5)라고 액션 함수를 호출하면 action.payload 값은 5가 되는 것이죠.
 * 
 * 
 * 4. 자동으로 이루어지는 불변성 관리
 * 
 * createSlice에서 사용하는 리듀서 메서드에서는 불변성을 신경쓰지 말고 state값을 직접 수정해도 됩니다.
 * 이 라이브러리에는 immer라는 라이브러리가 내장되어 있어 불변성을 자동을 관리해줍니다.
 * 
 * 
 * 5. 타입스크립트와 함께 사용하기
 * 
 * Redux Toolkit은 타입스크립트를 공식적으로 지원하기 때문에 타입스크립트 환경에서도 쉽게 사용할 수 있습니다.
 * 다음은 두 가지만 알면 됩니다.
 * 
 * 1. initialState에 타입 달아주기
 * 2. 액션 타입에 PayloadAction 사용하기
 */
const initialState = {value: 1}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:
    {
        increase: function(state, action) {
            state.value +=1
        },
        decrease: function(state, action) {
            state.value -=1
        },
        increaseBy: function(state, action)
        {
            state.value += action.payload
        },
        decreaseBy: function(state, action)
        {
            state.value -= action.payload
        }
    }
});

export const { increase, decrease, increaseBy, decreaseBy } = counterSlice.actions;
export default counterSlice
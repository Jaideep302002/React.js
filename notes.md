  Redux: It is a core library which is platform independent and react-redux is the implementation of the redux for the wiring between react and redux.


Redux toolkit ki notes.
every application has only one store
1. Create Store - single source of truth
it has configureStore which can be imported from redux toolkit.
introduce reducer that we have maked like addTodo and many more.

2. Create Slice(functions) method(createSlice)

Slice has name, initialState, reducers :{key: function}
Access of two things (State, action)
state = updated state value in the store
action = action.payload 
export individual functionality like addTodo and many more. 
export main source export

3. Add Todo - Give values to State i.e Dispatch Courier  = use method useDispatch()
 dispatch(addTodo())  and not forgot to import reducer in this.

4. Take Values - useSelector((state) =>state.todos) state ka access chaiye
variable me values lelo ek baar aagaie uske baad pure JS concept hai 


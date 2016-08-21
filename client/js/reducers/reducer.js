export default function reducer(state = {value:''}, action) {
  switch(action.type){
    case "GETTVALUE":
      return {
        value : action.value
      };
  }
  return state;
}

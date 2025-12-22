import { useReducer } from "react";
import { listReducer } from "../reducers/list";
import { ListContext } from "./ListsContext";

const ListProvider = ({children}) => {

  // states
  const [lists, dispatchListActions] = useReducer(listReducer, []);

  return (
    <ListContext.Provider value={{ lists, dispatchListActions }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;

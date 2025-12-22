export const listReducer = (lists = [], action) => {
  switch (action.type) {
    case "CREATE_LIST": {
      const newList = {
        id: action.payload.id,
        title: action.payload.title,
        boardId: action.payload.boardId,
        tasks: [],
      };
      return [...lists, newList];
    }
    case "UPDATE_LIST_NAME": {
      const updatedLists = lists.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            title: action.payload.title,
          };
        }
        return item;
      });
      return updatedLists;
    }
    case "CHANGE_BOARD_ID": {
      const updatedLists = lists.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            boardId: action.payload.boardId,
          };
        }
        return item;
      });
      return updatedLists;
    }
    case "REMOVE_LIST": {
      return lists.filter((item) => item.id !== action.payload);
    }
    case "ADD_TASK_ID_TO_LIST": {
      const updatedLists = lists.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            taskId: [...item.tasks, action.payload.taskId],
          };
        }
        return item;
      });
      return updatedLists;
    }
    case "REMOVE_TASK_LIST": {
      const updatedLists = lists.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            taskId: item.tasks.filter(
              (taskId) => taskId !== action.payload.taskId
            ),
          };
        }
        return item;
      });
      return updatedLists;
    }
    default:
      return lists;
  }
};

const AddItem = ({ listAddItem, taskAddItem, setEditMode }) => {
  const handleClick = () => setEditMode(true);

  return (
    <div className="add-item" onClick={handleClick}>
      {listAddItem && "+ Add list"}
      {taskAddItem && "+ Add task"}
    </div>
  );
};

export default AddItem;

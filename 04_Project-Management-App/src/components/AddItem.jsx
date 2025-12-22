const AddItem = ({ listAddItem, setEditMode }) => {
  return (
    <div
      className={
        listAddItem ? "add-item list-add-item" : "add-item task-add-item"
      }
      onClick={() => setEditMode(true)}
    >
      <p className="add-item-icon">+</p>
      <p className="add-item-text">
        {listAddItem ? "Add a list" : "Add a task"}
      </p>
    </div>
  );
};

export default AddItem;

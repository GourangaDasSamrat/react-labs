const AddItemForm = ({
  listForm,
  title,
  handleSubmit,
  handleOnChange,
  setEditMode
}) => {
  return (
    <div className="item-container">
      <form onSubmit={handleSubmit}>
        <textarea
          value={title}
          onChange={handleOnChange}
          placeholder={listForm ? "Enter list title..." : "Enter task title..."}
          rows={listForm ? 1 : 2}
        />
        <div className="button-container">
          <button type="submit">{listForm ? "Add List" : "Add Task"}</button>
          <p onClick={() => setEditMode(false)}>×</p>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;

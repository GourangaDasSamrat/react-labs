const AddItemForm = ({
  handleSubmit,
  handleOnChange,
  listForm,
  title,
  setEditMode,
}) => {
  return (
    <div className="item-container">
      <div className="item-card">
        <form>
          <textarea
            rows="2"
            cols="20"
            value={title}
            onChange={handleOnChange}
          ></textarea>
        </form>
        <div className="button-container">
          <button type="button" onClick={handleSubmit}>
            {listForm ? "Add list" : "Add/Update task"}
          </button>
          <p onClick={() => setEditMode(false)}>x</p>
        </div>
      </div>
    </div>
  );
};

export default AddItemForm;

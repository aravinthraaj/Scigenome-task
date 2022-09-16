import "./customCheckbox.css"

function CustomCheckbox({ name }) {
  return (
    <div className="checkboxWrapper">
      <label className="container">
        <input type="checkbox" />
        <span class="checkmark"></span>
        {name}
      </label>
    </div>
  )
}

export default CustomCheckbox

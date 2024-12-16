import CommonInput from "../common-input";

const formType = {
  INPUT: "input",
};

function CommonForm({ formcontrols = [], formData, setformData,submitbybutton,buttontext }) {
  function renderFormElement(getsingleElement) {
    let content = null;

    
    
    switch (getsingleElement?.componentType) {
      case formType.INPUT:
        content = (
          <CommonInput
            label={getsingleElement.label}
            name={getsingleElement.name}
            id={getsingleElement.id}
            type ={getsingleElement.type}
            placeholder={getsingleElement.placeholder}
            value={formData[getsingleElement.name] || ""}
            onChange={(event) =>
              setformData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );

        break;

      default:
        content = (
          <CommonInput
            label={getsingleElement.label}
            name={getsingleElement.name}
            id={getsingleElement.id}
            type ={getsingleElement.type}
            placeholder={getsingleElement.placeholder}
            value={formData[getsingleElement.name] ||""}
            onChange={(event) =>
              setformData({
                ...formData,
              [event.target.name]:event.target.value
              })
            }
          />
        );
        break;
    }

    return content;
  }
  // console.log(setformData)

  return (
    <form onSubmit={submitbybutton}>
      {formcontrols.length > 0
        ? formcontrols.map((singleItem, index) => (
            <div key={index}>{renderFormElement(singleItem)}</div>
          ))
        : null}
        <div style={{marginTop:"15px"}}>
      <button type="submit" >{buttontext ||"Submit"}</button>
        </div>
    </form>
  );
}

export default CommonForm;

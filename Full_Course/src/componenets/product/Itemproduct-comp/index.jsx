import css from './itemproduct.module.css'

function Buttoncomponent(){
    return (
      <button className={css.buttonstyle}>Click me</button>
    )
}


function Productitem({eachproduct}) {
    return (
      <div style={{padding:"20px", border:"2px solid red", marginBottom:"12px" }}>
        <h2 className={css.productitemstyle}>{eachproduct}</h2>
        <Buttoncomponent/>
      </div>
    );
  }
  export default Productitem;






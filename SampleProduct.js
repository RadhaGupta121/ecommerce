import All_nav from "./All_nav";
import Products from "./Products";

const SampleProduct=()=>{
    return(
        <>
        <All_nav/>
       <div style={{height:"400px",width:"100%"}}>
        <h2>This is sample Product</h2>
        <div style={{display:"flex",justifyContent:"center",padding:"12px"}}>
        <Products/>
        <Products/>
        <Products/>
        </div>
       
       </div>
        </>
    )
}
export default SampleProduct;
import CartContainer from "./CartContainer"
export default function NavBar(){

const cartIcon = (useState) => {
    if (cart > 0){
        <img src=".assets/cart-full.png" width="20px"/>
    }
    else{
         <img src=".assets/cart-empty.png" width="20px"/>
    }
};


return
(<div className="NavDiv">
    <div className="NavUser">
    <h3> Hello, userName</h3>
    </div>
    <div className="NavTitle">
        <h1>Groceries App</h1>
    </div>
     <div className="NavCart">
      {cartIcon}
    </div>
</div>
)}

export default function Friend({friend}){
    const {name, email,address,phone,id}=friend;
    return(
        
        <div className="box">
            <h3>ID:{id}</h3>
            <h4>Name: {name}</h4>
            <small>Adress: {address?.street}</small>
            <h6>Phone: {phone}</h6>
            <p>Email:{email}</p>


        </div>
    )
}
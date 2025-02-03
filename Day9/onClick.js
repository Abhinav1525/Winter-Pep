export const BasicEvent = () => {
    function HandleEvent(){
        console.log(event.targget);
        console.log(event.type);
        console.log("welcome");
    }
    function handleWelcome(user){
        console.log(user);
    }
    return(
        <div>
            <button onClick={HandleEvent}>Click Me</button>
            <button onClick={handleWelcome.bind(this,"Raj")}>Click Me</button>
        </div>
    );
}

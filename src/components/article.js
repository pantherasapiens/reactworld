import logo from './tumblr_o7wjfwsA5A1ug0at9o1_250.gif'
function Article(){
    return(
        <>
        <article className="s5">
            <img src={logo} alt="loading" className="image2"/>
            <p>Following calculator is made using react.js</p>
            <ul className="s6">
                <li>I have used basic react to build the calculator.</li>
                <li>I have use concept of hooks to give the functionalities.</li>
                <li>I used CSS for the styling purpose.</li>
                {/* <li>firey hasrato ka janaja uthaye...</li>
                <li>hai malum humko tumhari hakikat...</li>
                <li>muhabbat ke pardey mein kartey ho nafrat...</li>
                <li>kahi aur jakey adayein uchalo...</li>
                <li>humein zinda rehney do aye husn walo...</li>
                <li>kaali kaali zulfon key fandey naa daalo...</li>
                <li>humein zinda rehney do aye husn walo...</li> */}
            </ul>
        </article>
        </>
    )
}
export default Article
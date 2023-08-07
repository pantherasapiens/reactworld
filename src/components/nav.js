import './styles.css'
export default function Nav(){
    return(
        <nav className="s4">
            <button type="button" onClick={()=>alert('hello ji!')} className='btn'>Home</button>
            <button type="reset" onClick={()=>alert('sab changa si!')} className='btn'>About</button>
            <button type="button" className='btn'><a href="PortfolioForm.html" className="anchor">Form</a></button>
            <button type="submit" onClick={()=>window.print()} className="b2">Submit</button>    
        </nav>
    );
}
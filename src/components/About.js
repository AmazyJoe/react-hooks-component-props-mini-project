
function About(props){
    return(
        <aside>
            <img src={props.image} alt="blog logo"></img>
            <p>{props.paragraph}</p>
        </aside>
    )
}
export default About;
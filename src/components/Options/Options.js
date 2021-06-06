const Options = ({selectedOption, options, handleOption }) => {
    const styles = {
        color: "black",
        padding: "0.5rem 0.5rem",
        fontWeight: "bold",
        borderRadius: "6px",
        maxWidth: "70%",
        outline: "none",
        font: "Lucida Sans",
        margin: "1%"
    }
    
    return(
         <select value={selectedOption} onChange={handleOption} style={styles}>
             {options.map((item) => (
                 <option key={item.id} value={item.id}>
                    {item.id} : {item.ans}
                 </option>
             ))}
         </select>
    )
}
export default Options;
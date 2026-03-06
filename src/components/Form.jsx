function Form() {
    return (
        <form>
            <label htmlFor="linkName">Link name:</label>
            <input type="text" id="linkName" name="linkName" />
            <br />
            <br />

            <label htmlFor="linkURL">Link URL:</label>
            <input type="text" id="linkURL" name="linkURL" />
            <br />
            <br />

            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form
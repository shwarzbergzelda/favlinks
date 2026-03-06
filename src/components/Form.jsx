function Form() {
    return (
        <form>
            <label for="linkName">Link name:</label>
            <input type="text" id="linkName" name="linkName" />
            <br />
            <br />

            <label for="linkURL">Link URL:</label>
            <input type="text" id="linkURL" name="linkURL" />
            <br />
            <br />

            <input type="submit" value="Submit" />
        </form>
    )
}

export default Form
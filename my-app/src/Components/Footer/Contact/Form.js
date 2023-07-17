import './Form.css';
function Form(){
    return(
        <form className="form-section">
            <input type="text" name="name" placeholder="Your Name"/>
            <input type="mail" name="mail" placeholder="Your Email"/>
            <textarea placeholder="Messege" className="message-section">
           

            </textarea>
            <button type="submit" id="submit">SEND MESSAGE</button>

        </form>
    );
}

export default Form;
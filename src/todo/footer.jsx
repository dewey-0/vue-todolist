
import '../assets/styles/footer.styl'
export default {
    data(){
        return {
            author: 'Dewey'
        }
    },
    render(){
        return (
            <div id="footer">
                <span>wirtten by {this.author}</span>
            </div>
        )
    }
}
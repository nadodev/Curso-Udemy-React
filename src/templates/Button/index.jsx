import { Component} from 'react'
export class Button extends Component{
    render() {
        const {text, onClick, disabled} = this.props;
        return(
           <section className="area-btn">
                <button 
                disabled={disabled}
                onClick={onClick} 
                className="btn-more-post"

                >
                {text}
                </button>
           </section>
        )
    }
}
export default Button;
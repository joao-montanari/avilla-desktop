import './gradientCard.sass';

interface GradientCardProps {
    title : string;
    icon : any;
    gradient : 'red' | 'green' | 'blue' | 'purple';
    onClick : any;
}

function GradientCard({ title, icon, gradient, onClick } : GradientCardProps) {
    function Gradient() {
        if (gradient === 'purple') {
            return 'linear-gradient(to bottom, #e54ede, #be27b9, #960093)';
        } else if (gradient === 'blue') {
            return 'linear-gradient(to bottom, #00A0C6, #245DA4, #0D428C)';
        } else if (gradient === 'green') {
            return 'linear-gradient(to bottom, #8BBB66, #42934D, #009A63)';
        }
        return 'linear-gradient(to bottom, #D51317, #B12638, #942331)';
    }

    return(
        <div id='gradientCard' onClick={onClick} style={{ backgroundImage: Gradient() }} >
            {icon}
            <h4>{title}</h4>
        </div>
    )
}

export default GradientCard;
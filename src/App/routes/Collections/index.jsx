
import { useTheme } from '@mui/styles';


const Collections = (props) => {
    const theme = useTheme();
    const printTheme = () => {
        console.log(theme);
    }

    return (
        <div className="collection">
            <button type="button" >
                connect
            </button>
            <button type="button" onClick={printTheme}>
                info
            </button>
        </div>
    )
}


export default Collections
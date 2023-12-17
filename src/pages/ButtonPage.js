
import Button from "../components/Button";
import {GoBell, GoCloud, GoDatabase} from "react-icons/go";

function ButtonPage() {

    const handleClick = () =>{
    };

    return <div>
        <div>
            <Button primary className="mb-5" onClick={handleClick}>
                <GoBell />
                Click!
                </Button>
        </div>
        <div>
            <Button secondary onMouseMove={handleClick}>
                <GoCloud />
                By now!</Button>
        </div>
        <div>
            <Button warning><GoDatabase className="mr-1"/>See Deal!</Button>
        </div>
        <div>
            <Button success>Hide Ads!</Button>
        </div>
        <div>
            <Button danger>Test!</Button>
        </div>
        <div>
            <Button outline primary>rounded!</Button>
        </div>
        <div>
            <Button outline danger>Test!</Button>
        </div>

         </div>
};

export default ButtonPage;
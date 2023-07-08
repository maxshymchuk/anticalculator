import {useStyletron} from "styletron-react";
import BaseButton from "../../BaseButton/BaseButton";

function ZeroButton({ children, ...props }) {
    const [css] = useStyletron();

    const buttonClass = css({
        gridColumn: '1 / span 2',
        justifyContent: 'flex-start'
    });

    const wrapperClass = css({
        display: 'flex',
        justifyContent: 'center',
        width: '10vh',
        pointerEvents: 'none'
    });

    return (
        <BaseButton className={buttonClass} {...props}>
            <div className={wrapperClass}>
                {children}
            </div>
        </BaseButton>
    );
}
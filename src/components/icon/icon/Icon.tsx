import classNames from 'classnames';
import { IconProps } from './iconTypes';

export function Icon(props: IconProps) {
    const { name, size, className, pack } = props;

    const additionalProps: { height?: string; width?: string } = {};
    if (size) {
        if (typeof size === 'number') {
            additionalProps.height = size.toString();
            additionalProps.width = size.toString();
        } else {
            additionalProps.height = size.height.toString();
            additionalProps.width = size.width.toString();
        }
    }

    return (
        <div className={classNames(`icon --icon-${name}`, className)}>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="xMinYMin" fill="none" {...additionalProps}>
                <use href={'#' + (pack) + '-' + name}></use>
            </svg>
        </div>
    );
}

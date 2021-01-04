import React from 'react';
import Style from './Flex.rules.scss';

export const NAME = 'Flex';

export const PROP = {
    types: {},
    defaults: { tag: 'div' },
};
export function Component({ children, className, tag: Tag }) {
    console.log(Style);
    return (
        <Tag id="flex" className={className}>
            {children}
        </Tag>
    );
}
Component.propTypes = PROP.types;
Component.defaultProps = PROP.defaults;
Component.displayName = NAME;
export default Component;

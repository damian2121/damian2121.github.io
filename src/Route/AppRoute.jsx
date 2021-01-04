import React from 'react';
import { Route } from 'react-router-dom';

export const NAME = 'AppRoute';

export const PROP = {
    types: {},
    defaults: {},
};
export function Component({ component: View, path, ...rest }) {
    return <Route path={path} component={View} {...rest} />;
}
Component.propTypes = PROP.types;
Component.defaultProps = PROP.defaults;
Component.displayName = NAME;
export default Component;

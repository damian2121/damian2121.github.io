import React from 'react';
import PropTypes from 'prop-types';
export const NAME = 'WorkExperience';

export const PROP = {
    types: {},
    defaults: {},
};
export function Component(props) {
    return <div>Datos laborales</div>;
}
Component.propTypes = PROP.types;
Component.defaultProps = PROP.defaults;
Component.displayName = NAME;
export default Component;

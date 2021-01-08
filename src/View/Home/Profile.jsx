import React from 'react';
import PropTypes from 'prop-types';
import Flex from '../../components/Flex';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Style from './Profile.rules.scss';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import Avatar from '@material-ui/core/Avatar';

export const NAME = 'Profile';

export const PROP = {
    types: {},
    defaults: {},
};
export function Component(props) {
    const classes = useStyles();

    return (
        <Flex tag="div" className="Profile">
            <Avatar
                style={{ height: '200px', width: '200px' }}
                alt="Lescano Nicolas"
                src={`${process.env.PUBLIC_URL}/img/ver.jpg`}
            />
            <Typography variant="h5" gutterBottom>
                Lescano Nicolas Damian
            </Typography>

            <div className="section__container">
                <Divider />

                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <Typography variant="h6" className={classes.title}>
                                    Contacto
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Telefono:" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Email: nico.damian.ex@gmail.com" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Celular :1133074483" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText>
                                            Linkedin :
                                            <a href="http://www.linkedin.com/in/nicolas-lescano-a6b72114b">
                                                <Button
                                                    // variant="contained"
                                                    color="primary"
                                                    className={classes.button}
                                                    endIcon={<Icon>call_made</Icon>}
                                                >
                                                    <LinkedInIcon fontSize="large" />
                                                </Button>
                                            </a>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Paper className={classes.paper}>
                                <Typography variant="h6" className={classes.title}>
                                    Ubicacion
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Localidad: Florencio Varela" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Direccion: ******" />
                                    </ListItem>
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Flex>
    );
}
Component.propTypes = PROP.types;
Component.defaultProps = PROP.defaults;
Component.displayName = NAME;
export default Component;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '10px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paperPrimary: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
}));

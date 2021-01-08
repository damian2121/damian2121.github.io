import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import GitHubIcon from '@material-ui/icons/GitHub';
import WorkIcon from '@material-ui/icons/Work';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import { MediaSM } from '../../Util/MediaQueries';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Profile from './Profile';
import WorkExperience from './WorkExperience';

export const NAME = 'Home';

export const PROP = {
    types: {},
    defaults: {},
};
export function Component(props) {
    const classes = useStyles();
    const SM = MediaSM();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container maxWidth="md">
            {SM && (
                <div className={classes.root}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                    >
                        <Tab className={classes.tab} icon={<PersonPinIcon />} label="Mi Perfil" {...a11yProps(0)} />
                        <Tab
                            className={classes.tab}
                            icon={<WorkIcon />}
                            label="Experiencia Laboral"
                            {...a11yProps(1)}
                        />
                        <Tab className={classes.tab} icon={<GitHubIcon />} label="Repositorio" {...a11yProps(2)} />
                        <Tab className={classes.tab} icon={<PhoneIcon />} label="Contacto" {...a11yProps(3)} />
                        <Tab
                            className={classes.tab}
                            icon={<CastForEducationIcon />}
                            label="Capacitaciones"
                            {...a11yProps(4)}
                        />
                    </Tabs>
                    <TabPanel value={value} index={0} className={classes.profile}>
                        <Profile />
                    </TabPanel>
                    <TabPanel value={value} index={1} className={classes.profile}>
                        <WorkExperience />
                    </TabPanel>
                    <TabPanel value={value} index={2} className={classes.profile}>
                        <Profile />
                    </TabPanel>
                    <TabPanel value={value} index={3} className={classes.profile}>
                        <Profile />
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        Item Five
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        Item Six
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        Item Seven
                    </TabPanel>
                </div>
            )}
            {!SM && (
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="open drawer">
                            <MenuIcon />
                        </IconButton>
                        <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                            <AddIcon />
                        </Fab>
                        <div className={classes.grow} />
                        <IconButton color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <IconButton edge="end" color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            )}
        </Container>
    );
}
Component.propTypes = PROP.types;
Component.defaultProps = PROP.defaults;
Component.displayName = NAME;
export default Component;

function TabPanel(props) {
    const { children, value, index, className, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            className={className}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    tab: {
        marginTop: '5rem',
    },
    profile: {
        width: '100%',
    },
}));

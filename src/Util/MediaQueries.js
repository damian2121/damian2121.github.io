import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export function MediaSM() {
    const theme = useTheme();
    const mediaSM = useMediaQuery(theme.breakpoints.up('sm'));
    return mediaSM;
}

export default {
    SM: MediaSM,
};

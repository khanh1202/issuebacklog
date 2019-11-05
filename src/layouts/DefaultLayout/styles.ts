import { makeStyles, Theme } from '@material-ui/core';

export const useDefaultLayoutStyles = makeStyles<Theme>(
  ({ mixins: { toolbar }, spacing }) => ({
    contentPaper: {
      marginTop: (toolbar.minHeight as number) + spacing(4),
      padding: spacing(4)
    }
  })
);

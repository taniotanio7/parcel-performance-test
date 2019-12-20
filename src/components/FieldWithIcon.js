import React, { useState } from "react";
import { css } from "@emotion/core";
import { Grid, Icon } from "@material-ui/core";

const FieldWithIcon = ({ icon, children, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      wrap="nowrap"
      css={css`
        line-height: 0;
      `}
      {...props}
    >
      <Grid item>
        <Icon color={isFocused ? "primary" : "inherit"}>{icon}</Icon>
      </Grid>
      <Grid
        item
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        css={css`
          width: 100%;
        `}
      >
        {children}
      </Grid>
    </Grid>
  );
};

export default FieldWithIcon;

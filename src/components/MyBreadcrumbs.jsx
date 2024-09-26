import { Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const MyBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <MuiLink component={RouterLink} to="/" color="inherit">
        Inicio
      </MuiLink>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        // Decodificar el nombre para mostrarlo correctamente
        const decodedName = decodeURIComponent(name.replace(/%20/g, " "));

        return isLast ? (
          <Typography key={name} color="text.primary">
            {decodedName.charAt(0).toUpperCase() + decodedName.slice(1)}
          </Typography>
        ) : (
          <MuiLink
            key={name}
            component={RouterLink}
            to={routeTo}
            color="inherit"
          >
            {decodedName.charAt(0).toUpperCase() + decodedName.slice(1)}
          </MuiLink>
        );
      })}
    </Breadcrumbs>
  );
};

export default MyBreadcrumbs;

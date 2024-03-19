/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { flattenRoutes } from "@/helpers";

// default pages
// https://react.dev/reference/react/lazy#suspense-for-code-splitting

const AdminEditRestaurant = lazy(
  () => import("../components/edit-restaurant/page")
);

const adminRoutes = [
  {
    path: "",
    name: "Edit Restaurant",
    element: <AdminEditRestaurant />,
  },
];

const allAdminRoutes = [...adminRoutes];

const allAdminFlattedRoutes = flattenRoutes([...allAdminRoutes]);

export { allAdminFlattedRoutes };

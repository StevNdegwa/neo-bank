import React from "react";
import AppSession from "../../../utils/AppSession";

const PortalSessionContext = React.createContext<AppSession | null>(null);

export default PortalSessionContext;
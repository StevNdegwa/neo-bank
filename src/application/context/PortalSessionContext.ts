import React from "react";
import AppSession from "../authentication/AppSession";

const PortalSessionContext = React.createContext<AppSession | null>(null);

export default PortalSessionContext;
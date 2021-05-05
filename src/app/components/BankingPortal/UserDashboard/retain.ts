import { createOperationDescriptor, getRequest } from "relay-runtime";
import environment from "../../../config/relay/Environment";
import { userDashboardQuery, variables } from "./UserDashboard";

const request = getRequest(userDashboardQuery);
const descriptor = createOperationDescriptor(request, variables);

export const loginSession = environment.retain(descriptor);
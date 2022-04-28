import { get } from "../../shared/utils/get";

export const locationSelector = (state) => get(state, "location", "/");

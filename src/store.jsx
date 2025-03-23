import { create } from "zustand";

import PocketBase from "pocketbase";

const pocketBaseUrl = import.meta.env.VITE_POCKETBASE_URL;
if (!pocketBaseUrl) {
  throw new Error("VITE_POCKETBASE_URL is required");
}

const pb = new PocketBase(pocketBaseUrl);

const useConfiguratorStore = create((set) => ({
  categories: [],
  currentCategories: null,
  assets: [],
  fetchCategories: async (params) => {},
}));

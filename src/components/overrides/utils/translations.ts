import { getCollection } from "astro:content";
// @ts-expect-error
import config from "virtual:starlight/user-config";
import type { i18nSchemaOutput } from "../schemas/i18n";
import { createTranslationSystem } from "./createTranslationSystem";

/** All translation data from the i18n collection, keyed by `id`, which matches locale. */
let userTranslations: Record<string, i18nSchemaOutput> = {};
try {
  // Load the user’s i18n collection and ignore the error if it doesn’t exist.
  const collection = await getCollection("i18n");
  userTranslations = Object.fromEntries(
    collection.map(({ id, data }) => [id, data as i18nSchemaOutput]),
  );
} catch {}

/**
 * Generate a utility function that returns UI strings for the given `locale`.
 * @param {string | undefined} [locale]
 * @example
 * const t = useTranslations('en');
 * const label = t('search.label'); // => 'Search'
 */
export const useTranslations = createTranslationSystem(
  userTranslations,
  config,
);

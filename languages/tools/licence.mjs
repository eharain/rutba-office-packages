// The licence every language pack carries: Tech Style's, all rights
// reserved. The helpers and the check are shared by every kind of pack and
// live in the repository's tools/pack-core.mjs; this module passes them on.
// A language pack is wholly made here, so it must name PROPRIETARY.
import { PROPRIETARY, LICENCE_FILE, REPO_LICENSE, ownLicence, writeLicence, checkLicence as checkAny } from '../../tools/pack-core.mjs';

export { PROPRIETARY, LICENCE_FILE, REPO_LICENSE, ownLicence, writeLicence };

/** The shared check, plus: a language pack names PROPRIETARY. */
export function checkLicence(dir, manifest) {
  const faults = checkAny(dir, manifest);
  if (!String(manifest.licence?.spdx || '').split(/[\s()]+/).includes(PROPRIETARY)) faults.push(`a language pack is made here, so its licence names ${PROPRIETARY}`);
  return faults;
}

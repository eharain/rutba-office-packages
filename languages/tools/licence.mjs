// The licence every language pack carries: Tech Style's, all rights
// reserved, with the repository's LICENSE copied into the pack as
// LICENSE.txt so a downloaded pack states its own terms.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const PROPRIETARY = 'LicenseRef-TechStyle-Proprietary';
export const LICENCE_FILE = 'LICENSE.txt';
export const REPO_LICENSE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../LICENSE');

/** The manifest's licence field for a pack made wholly here. */
export const ownLicence = () => ({ spdx: PROPRIETARY, files: [LICENCE_FILE] });

/** Put the licence text into a pack folder. */
export function writeLicence(dir) {
  fs.copyFileSync(REPO_LICENSE, path.join(dir, LICENCE_FILE));
}

/** Faults in a pack's licence: the id it must name, and its text the same as the repository's. */
export function checkLicence(dir, manifest) {
  const faults = [];
  const spdx = String(manifest.licence?.spdx || '');
  if (!spdx.split(/\s+(?:AND|OR|WITH)\s+/).includes(PROPRIETARY)) faults.push(`licence ${spdx || '(none)'} does not name ${PROPRIETARY}`);
  if (/NOASSERTION/.test(spdx)) faults.push('licence still says NOASSERTION');
  const file = path.join(dir, LICENCE_FILE);
  if (!fs.existsSync(file)) faults.push(`${LICENCE_FILE} is missing`);
  else if (!fs.readFileSync(file).equals(fs.readFileSync(REPO_LICENSE))) faults.push(`${LICENCE_FILE} differs from the repository's LICENSE`);
  return faults;
}

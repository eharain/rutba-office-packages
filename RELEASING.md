# Releasing the packages for an Office release

Each release of this repository is for one Rutba Office release, X, and is
tagged vX. It may go out before, with or after Office X; Office X never waits
for it. Until vX's feed lists a person's packs, Office's update gate holds X
back from them and says why.

The steps, in order:

1. **Move the pin.** Once Office X's candidate has passed its gate, before X is
   tagged:

   ```
   node tools/carry.mjs --to <X> --commit <X's gated commit> --before-tag --no-build
   ```

   `office.json` then names X, with `commit` set to the gated commit and `tag`
   left empty.

2. **Add and check the translations of the labels new in X.**

3. **Build and check.**

   ```
   node tools/carry.mjs --build
   ```

   This builds every pack against a clone of that commit, gives the labels new
   in X their ids, checks every pack and gathers them into `dist/vX/`. It
   prints the signing commands for the next step.

4. **Sign**, on the release PC. The data packs take the packages key:

   ```
   node tools/sign.mjs --key <packages key> dist/vX/<id> ...
   ```

   The speech engine takes Office's release key, through Office's release
   tooling. A `lang-en` that Office X already carries is published exactly as
   it is and never signed again.

5. **Make the feed and the zips.**

   ```
   node tools/feed.mjs dist/vX --previous <the last feed published> [--complete] [--retire <id>=<reason> ...]
   node tools/feed.mjs --sign dist/vX/feed.json --key <packages feed key>
   ```

   `--complete` once every pack for X is in; leave it out for a partial
   release. This writes `feed.json`, `assets.json` and each pack's zip.

6. **Set the tag.** Once Office's vX exists:

   ```
   node tools/carry.mjs --set-tag
   ```

   It fills the pin's tag only if vX names the commit the packs were built
   from. If it names another, go back to step 1 with vX's commit.

7. **Publish** the files `assets.json` lists, then `feed.json` and
   `feed.json.sig` last, as release vX of this repository.

8. **Check what was published**, against a clone of Office's vX tag:

   ```
   node tools/verify-release.mjs --office <clone of Office vX>
   ```

   It checks the feed's signature and fields, every envelope, file and zip,
   that `lang-en` is byte for byte the copy Office X carries, that Office's own
   checks take every pack, that every language Office X no longer carries
   built in has its pack in the release, that Office X's list of languages is
   this release's `languages/languages.json`, and that every draft language
   has a review line.

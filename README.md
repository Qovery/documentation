# documentation-v2
Qovery Documentation v2

## Contributing to the Documentation

### **How to Contribute**

To work on the documentation locally:

1. Install [**Mintlify**](https://www.mintlify.com/docs/quickstart)
2. Go to the /docs folder
3. Run:

    ```bash
    mintlify dev
    ```

### **CLI command reference**

The reference sections of `docs/cli/commands/*.mdx` (between the `BEGIN GENERATED` and `END GENERATED` markers) are generated from `qovery --help`. After a CLI release, run `python3 scripts/cli-reference/generate.py --qovery /path/to/qovery --apply docs/cli/commands`, then `--check docs/cli/commands` to find hand-written examples that use a flag or subcommand that no longer exists.

---

### **Screenshot Guidelines**

To ensure consistency across the entire documentation:

- Screenshots **have been taken on a 13-inch MacBook Pro Retina display**
- With the **Arc browser**
- Always display the product **in fullscreen mode**
- You may **add arrows, highlights, or explanatory text** directly on the screenshot
- If sensitive data appears in the UI, use the **Zeroblur extension** to mask it

    👉 https://chromewebstore.google.com/detail/zeroblur/ckmpibbifmcamfmfelkencbbiilpcfjg?hl=en

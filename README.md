# PoE2 Route

A minimal Path of Exile 2 campaign tracker. Acts I–IV plus the Interludes, one short line per step.

- Optional steps and tips are hidden until you turn them on.
- A "Next" bar shows the next step and marks it done in one click.
- Finished zones fold away.
- Progress is saved in your browser. Copy/paste a code to move it to another device.

## Credit

This is a fork of **[domistae/poe2-leveling](https://github.com/domistae/poe2-leveling)**
([live site](https://domistae.github.io/poe2-leveling/)), MIT licensed.
The route, rewards and zone order come from that guide; the text here has been rewritten in short form
and the site rebuilt from scratch. Please report route errors that come from the original guide upstream too.

## Files

```
index.html   page shell
style.css    styles (dark/light)
app.js       rendering, progress, toggles
data.js      route data — edit this to change steps
```

No build step. Open `index.html` or serve the folder.

## Editing the route

Each zone in `data.js` holds a list of strings:

| Syntax       | Meaning                          |
|--------------|----------------------------------|
| `text`       | required step                    |
| `? text`     | optional step                    |
| `> text`     | tip for the step above           |
| `! text`     | warning for the step above       |
| `*Name*`     | boss / key name                  |
| `[x]`        | reward                           |
| `[[x]]`      | permanent reward                 |

Step IDs are hashes of zone + text (ignoring case and punctuation), so changing the words of a step resets its checkbox, but fixing capitalization or punctuation does not.

## Deploy (GitHub Pages)

Settings → Pages → Source: *Deploy from a branch* → `main` / root.

Path of Exile 2 is © Grinding Gear Games. Unofficial fan project.

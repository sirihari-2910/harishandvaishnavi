# Srivaishnavi & Sai Harish — Wedding Invitation

A mobile-first, single-page wedding invitation website.

## Included
- Telugu opening: `ఓం వెంకటేశాయ నమః`
- Venkateswara Swamy hero artwork
- Bride and groom photo sections
- Live countdown to 29 October 2026, 7:30 PM IST
- Wedding and Satyanarayana Vratham details
- Google Maps buttons using the supplied links
- Traditional banana-leaf floral section
- Family blessings section
- Background music with playback starting at 4 seconds
- Responsive mobile/desktop layout
- Scroll reveal animations

## Run locally
Open `index.html` in a modern browser. For best results use a local web server because browsers can restrict local media playback.

Example with Python:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Hosting
The folder is static and can be uploaded to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or ordinary web hosting. No backend is required.

## Music
The supplied MP3 is loaded as `assets/music.mp3`. JavaScript sets the audio position to 4 seconds when the visitor taps **ప్రవేశించండి**, then starts playback. The opening tap is intentional because mobile browsers generally block autoplay with sound until a user gesture.


## Replace the bride/groom photos locally

The site uses two image files from the `assets` folder:
- `assets/bride.jpg` → Srivaishnavi
- `assets/groom.jpg` → Sai Harish

To replace either photo, keep the same filename and overwrite the existing file. No HTML/CSS changes are required.

### Steps
1. Open the website folder.
2. Open `assets/`.
3. Replace `bride.jpg` with your new bride photo.
4. Replace `groom.jpg` with your new groom photo.
5. Keep the files in JPG format and keep the exact filenames.
6. Refresh the browser. If the old image remains, do a hard refresh (`Ctrl+F5`).

If your new photos have different aspect ratios, the existing CSS will automatically crop them to fit the portrait cards.

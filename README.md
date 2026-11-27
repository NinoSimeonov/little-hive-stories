# Little Hive Stories

Little Hive Stories is a responsive, English-language website for original AI characters and children’s books. The illustrated one-page site introduces Bee, Sheep Head, Stoyan, and Hank with his dog. It also has a book preview, an introduction to the project, and an expandable **Ask Bee** contact card.

The book previews currently say **Coming Soon**, and the contact card uses a sample email address.

## Project structure

- [`dist/index.html`](dist/index.html) contains the page and its content.
- [`dist/style.css`](dist/style.css) styles the site for mobile and desktop.
- [`dist/site.js`](dist/site.js) handles the mobile navigation menu.
- [`dist/assets/`](dist/assets/) holds the illustrations and logo.

The files in `dist/` are ready to serve as static HTML, CSS, and JavaScript. The project has no build step or package dependencies.

## Preview locally

With Python 3 installed, run the following command from the repository root.

```bash
python3 -m http.server 8000 --bind 127.0.0.1 --directory dist
```

Open [localhost:8000](http://127.0.0.1:8000/) in your browser.

## Deploy to GitHub Pages

On GitHub Free, the source repository must be public. GitHub Pages limits use for online businesses and sites primarily intended to facilitate sales. Review the limits before choosing it for the live book site. [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)

1. Run the following command from the repository root to publish the committed contents of `dist/` to a `gh-pages` branch.

   ```bash
   git subtree push --prefix=dist github gh-pages
   ```

   This project’s GitHub remote is named `github`. If you cloned the repository and your remote is named `origin`, use `origin` in the command. Run `git remote` to check the name.

2. On GitHub, open the repository’s **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then choose **`gh-pages`** and **`/(root)`**. Click **Save**. [GitHub Pages publishing settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

3. After the deployment succeeds, use **Visit site** under **Settings → Pages**. The default address for this project is `https://<github-username>.github.io/little-hive-stories/` if the repository is named `little-hive-stories`.

### Publish updates

Make changes in `dist/`, commit them on `main`, then run the subtree command again. GitHub Pages publishes from the `gh-pages` branch, so a push to `main` alone does not update the live site.

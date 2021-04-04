# Flareact Geist Template

This template uses [Geist UI](https://react.geist-ui.dev) on [Flareact](https://flareact.com) for ⚡️ fast rendering on the edge with [Cloudflare Workers](https://workers.cloudflare.com)

If you don't already have [Wrangler](https://github.com/cloudflare/wrangler), start by installing it:

```bash
npm i @cloudflare/wrangler -g
```

Then use wrangler to generate your new project based on this template:

```bash
wrangler generate my-project https://github.com/nathanclevenger/flareact-geist-template
```

Next, fill in `account_id` and `name` inside your `wrangler.toml` file.

Finally, run `yarn dev` to see magic happen 🎉

Go edit a page in your `/pages` directory to get started 👍

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button?paid=true)](https://deploy.workers.cloudflare.com/?url=https://github.com/nathanclevenger/flareact-geist-template&paid=true)

To make debugging easier, this template is also pre-integrated with Sentry.
You can edit the config variables in [`sentry.js`](https://github.com/bustle/cf-sentry/blob/master/sentry.js) to suit your environment:

```js
// Get the key from the "DSN" at: https://sentry.io/settings/<org>/projects/<project>/keys/
// The "DSN" will be in the form: https://<SENTRY_KEY>@sentry.io/<SENTRY_PROJECT_ID>
// eg, https://0000aaaa1111bbbb2222cccc3333dddd@sentry.io/123456
const SENTRY_PROJECT_ID = '123456'
const SENTRY_KEY = '0000aaaa1111bbbb2222cccc3333dddd'

// Useful if you have multiple apps within a project – not necessary, only used in TAGS and SERVER_NAME below
const APP = 'my-app'

// https://docs.sentry.io/error-reporting/configuration/?platform=javascript#environment
const ENV = 'development'

// https://docs.sentry.io/error-reporting/configuration/?platform=javascript#release
// A string describing the version of the release – we just use: git rev-parse --verify HEAD
// You can use this to associate files/source-maps: https://docs.sentry.io/cli/releases/#upload-files
const RELEASE = '0000aaaa1111bbbb2222cccc3333dddd'

// https://docs.sentry.io/enriching-error-data/context/?platform=javascript#tagging-events
const TAGS = { app: APP }

// https://docs.sentry.io/error-reporting/configuration/?platform=javascript#server-name
const SERVER_NAME = `${APP}-${ENV}`
```

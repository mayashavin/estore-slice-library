# PrismUI Slice Library

> This is the project done to enter the Slice Contest organized by [Prismic](https://prismic.io)

![Logo of PrismUI](https://res.cloudinary.com/mayashavin/image/upload/w_200,c_scale,f_auto,q_auto/v1606168965/prismUi/logo_transparent_background)

🎮 &nbsp; [Playground](https://prismstore-storybook.netlify.app/?path=/story/landingpage--default-slice)

### Launching the Slice Builder

To launch the Slice Builder you need to run 2 terminals: one for Storybook, one for the Slice Builder itself.

```bash
# On a first terminal
$ yarn storybook # or with npm: `$ npm run storybook`

# On the second terminal
$ yarn prismic sm --develop
```

This will launch Storybook on port `3003` and the Slice Builder on port `9999`, you can open a third terminal to create slices from or launch other commands...

> ℹ We are aware that it will be more convenient to launch Storybook and the Slice Builder with a single command and are working on it~

> ⚠ Storybook is known for being quite picky with its dependencies. If you experience a blank page when running it with a lot of errors in the browser console try deleting your lock file and installing dependencies again, should fix the issue.

> ⚠ We noticed that in some rare case you can get stuck in a `401 [Unauthorized]` loop prompting you to log in when running the Slice Machine develop command. If this happens to you check if your Prismic repository was created, if not, try running `$ yarn prismic login` and `$ yarn prismic sm --bootstrap` again.

For comprehensive documentation about using the Slice Builder check the dedicated [documentation](https://www.slicemachine.dev/documentation/slice-builder#using-the-slice-builder).

## 🚀 &nbsp;Deploying Your Storybook

One of the requirements of this contest if to have your Storybook documentation hosted somewhere.

If you are not familiar with hosting no worries! We recommend to either use [Netlify](https://netlify.com) **or** [Vercel](https://vercel.com) and have done most of the setup for you already!

You only need to host the documentation once, no need to have it at multiple location, so just pick one that works for you~

### Hosting on Netlify

To host your Storybook documentation on Netlify go to: [app.netlify.com/start](https://app.netlify.com/start), you might need to create an account or to log in if not already.

Once on the page click "**GitHub**". After granting access to your account you should now be able to see a list of your repositories. Pick the one you worked on.

On the last build options step every default should be good. We already took care of configuring the build command and publish directory through a [netlify.toml](https://docs.netlify.com/configure-builds/file-based-configuration/) file. Click "**Deploy site**" and wait for the magic to happen.

Once the build is finished, head over to the "**Site overview**" tab. The URL of the hosted documentation should be available at the top left of the tab (if Netlify is still building it will display you the build status instead). You can customize it by changing the site name under the "**Site settings**" tab.

Congratulations! You documentation is now hosted and will update itself whenever you commit to your repository.

### Hosting on Vercel

To host your Storybook documentation on Vercel go to: [vercel.com/import](https://vercel.com/import).

Once on the page click "**Continue**" under "**Import Git Repository**", you might need to create an account or to log in if not already.
After you logged in, paste the GitHub repository URL you worked on in the dedicated field and click "**Continue**", Vercel might ask for access to your account.

On the last build options step every default should be good and Nuxt.js should have already been selected. We already took care of configuring everything to deploy your documentation. Click "**Deploy**" and wait for the magic to happen.

Once the build is finished and successful, you should be redirected to a success page. The URL of the hosted documentation should be available through the "**Visit**" button. You can customize it by changing the site name under the "**Settings**" tab of the new site dashboard.

Congratulations! You documentation is now hosted and will update itself whenever you commit to your repository.

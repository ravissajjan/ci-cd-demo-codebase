# cicd-lab — starter files
//dummy_change

Copy **all** of these files into your own `cicd-lab` repository, **including the hidden `.github`
folder**. There are no libraries to install. You only need **Node.js 20 or higher**.

> ⚠️ Windows File Explorer hides folders that start with a dot. Turn on **View → Show → Hidden
> items**, or copy from inside VS Code — otherwise you will miss `.github` and no pipeline will run.

## What each file is

| File | What it is |
|---|---|
| `math.js` | 4 small functions |
| `math.test.js` | 5 tests for those functions |
| `app.js` | a 15-line web server |
| `index.html` | the web page |
| `build.js` | copies the page into a `dist` folder (this is our "build") |
| `package.json` | the commands: lint, test, build, start |
| `Dockerfile` | packages the app into a container image |
| `.dockerignore` | keeps `node_modules`, `dist` and `.git` out of the image |
| `.gitignore` | stops build output and secrets being committed |
| `.github/workflows/ci.yml` | the CI pipeline — lint, test, build, container smoke test |
| `.github/workflows/cd.yml` | the CD pipeline — Docker Hub push, Pages deploy, approval gate |

The two workflow files are written for you. You will read them job by job as the labs reach them.
`cd.yml` stays dormant until you add the Docker Hub secrets in Lab 3D and turn on Pages in Lab 4.

There is **no `.github` folder** to worry about writing — it is already here. Your job in the labs is
to understand each pipeline, run it, break it on purpose, and watch it stop you.

## Check it works on your laptop

```bash
npm run lint     # checks for syntax mistakes
npm test         # runs the 5 tests - all 5 should pass
npm run build    # creates the dist folder
npm start        # open http://localhost:3000 , then press Ctrl+C
```

If all four of those work, you are ready for Lab 1.

## Break it on purpose

In `math.js`, change `add` to `return a - b;`, push it on a branch and open a Pull Request.
Watch the pipeline turn red. This is Lab 1.5 and it is the most important step of the day.

## Docker (optional)

```bash
docker build -t cicd-lab .
docker run -p 3000:3000 cicd-lab
curl http://localhost:3000/health
```

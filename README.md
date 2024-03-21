# Vue 3 + TypeScript + Vite

Simple CRUD to work with CI CD for learning purpose

Netlify https://cicd-crud-vue.netlify.app/
Vercel production https://cicd-crud-vue.vercel.app/
Vercel preview - https://cicd-crud-52bvclbty-pawel-gnat.vercel.app/

## Workflow dispatch with inputs - example

```bash
name: Deploy
on:
  workflow_dispatch:
    inputs:
      deploy-netlify:
        type: boolean
        description: Enable Netlify deployment
        default: true
      deploy-vercel:
        type: boolean
        description: Enable Vercel deployment
        default: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Configure node
        uses: actions/setup-node@v4
        with:
          node-version-file: '.nvmrc'

      - name: Install dependencies
        run: npm ci

      - name: Run unit tests
        run: npm run test

      - name: Build app
        run: npm run build

      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v3.0
        if: ${{ inputs.deploy-netlify }}
        with:
          publish-dir: './dist'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: 'Deployed from GitHub Actions'
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}

      - name: Install Vercel CLI
        if: ${{ inputs.deploy-vercel }}
        run: npm install --global vercel@canary

      - name: Pull Vercel Environment Information
        if: ${{ inputs.deploy-vercel }}
        run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}

      - name: Build for Vercel
        if: ${{ inputs.deploy-vercel }}
        run: vercel build --prod --token=${{ secrets.VERCEL_TOKEN }}

      - name: Deploy to Vercel
        if: ${{ inputs.deploy-vercel }}
        run: vercel deploy --prebuilt --prod --token=${{ secrets.VERCEL_TOKEN }}

```

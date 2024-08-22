## on Vercel

```bash
# All of these should time out
$ time curl "$VERCEL_URL/api/nested/test"
$ time curl "$VERCEL_URL/api/hello"
```

## local

```bash
$ pnpm i
$ pnpm build
$ pnpm start
$ time curl localhost:3000/api/nested/test
$ time curl localhost:3000/api/hello
```

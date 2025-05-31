FROM node:24-slim@sha256:5ae787590295f944e7dc200bf54861bac09bf21b5fdb4c9b97aee7781b6d95a2 AS builder
WORKDIR /build

RUN corepack enable

COPY ./package.json ./
COPY ./pnpm-lock.yaml ./
COPY ./pnpm-workspace.yaml ./
RUN pnpm install

COPY . ./
RUN pnpm build

##
FROM ghcr.io/thedevminertv/gostatic:1.3.9
CMD [ "--spa", "--compress-level=2" ]

COPY --from=builder /build/dist /static